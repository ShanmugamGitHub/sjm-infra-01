const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') walk(path.join(dir, file), fileList);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const allFiles = [...walk(path.join(__dirname, 'app')), ...walk(path.join(__dirname, 'components'))];

const entityReplacements = {
  'Ã—': '&times;',
  'â€”': '&mdash;',
  'Â·': '&middot;',
  'â‚¹': 'Rs.',
  'â€¢': '&bull;',
  'ï¼‹': '+',
  'â†’': '&rarr;',
};

// Target Garbled Emojis -> Lucide Components
// And Map what we should import
const iconReplacements = {
  'ðŸ—ºï¸': { icon: 'Map', size: 24, class: 'lucide-icon' },
  'ðŸ›ï¸': { icon: 'Building2', size: 24, class: 'lucide-icon' },
  'ðŸ ': { icon: 'Home', size: 24, class: 'lucide-icon' },
  'ðŸ“ ': { icon: 'MapPin', size: 16, class: 'lucide-icon' },
  'ðŸ’°': { icon: 'Banknote', size: 16, class: 'lucide-icon' },
  'ðŸ‘¤': { icon: 'User', size: 16, class: 'lucide-icon' },
  '📞': { icon: 'Phone', size: 16, class: 'lucide-icon' },
  '✉️': { icon: 'Mail', size: 16, class: 'lucide-icon' },
  '📍': { icon: 'MapPin', size: 16, class: 'lucide-icon' },
  '🚧': { icon: 'Hammer', size: 16, class: 'lucide-icon' },
  'ðŸš§': { icon: 'Hammer', size: 16, class: 'lucide-icon' }, // construction
  '🎉': { icon: 'PartyPopper', size: 48, class: 'lucide-icon mb-4' },
  'ðŸŽ‰': { icon: 'PartyPopper', size: 48, class: 'lucide-icon mb-4' }, // party
  '🏗️': { icon: 'Construction', size: 48, class: 'lucide-icon mb-4' },
  'ðŸ —ï¸': { icon: 'Construction', size: 48, class: 'lucide-icon mb-4' }, // crane
  '📐': { icon: 'Ruler', size: 16, class: 'lucide-icon' },
  '📋': { icon: 'Clipboard', size: 16, class: 'lucide-icon' },
  '🌆': { icon: 'Building', size: 16, class: 'lucide-icon' },
  '💰': { icon: 'Banknote', size: 16, class: 'lucide-icon' },
  '🏠': { icon: 'Home', size: 16, class: 'lucide-icon' },
  '🔨': { icon: 'Hammer', size: 16, class: 'lucide-icon' },
  '🛣️': { icon: 'Map', size: 16, class: 'lucide-icon' },
  '🕐': { icon: 'Clock', size: 16, class: 'lucide-icon' }
};

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  let importedIcons = new Set();
  
  // Replace HTML entities for garbled weird chars
  for (const [bad, htmlEntity] of Object.entries(entityReplacements)) {
    if (content.includes(bad)) {
      if (file.includes('StructuredData.js')) {
        // Raw text instead of JSX entities in json
        const plainText = bad === 'â‚¹' ? 'Rs.' : (bad === 'â€”' ? '-' : (bad === 'Â·' ? '-' : (bad === 'â€¢' ? '-' : (bad === 'â†’' ? '->' : 'x'))));
         content = content.split(bad).join(plainText);
      } else {
         // for JSX, let's just make sure it parses by putting them in strings if they are standalone, 
         // actually in JSX text nodes HTML entities like &mdash; are valid.
         content = content.split(bad).join(htmlEntity);
      }
      changed = true;
    }
  }

  // Find and replace emojis with Lucide React Icons
  for (const [emoji, config] of Object.entries(iconReplacements)) {
    if (content.includes(emoji)) {
      importedIcons.add(config.icon);
      // Wait, if it's inside quotes like `icon: '📍'`, it will become `icon: <MapPin size={16} className="lucide-icon" />`
      // So if it's surrounded by single or double quotes, we replace the quotes too to make it a JSX node.
      const emojiInQuotesSingle = new RegExp(`'${emoji}\\s?'`, 'g');
      if (emojiInQuotesSingle.test(content)) {
         content = content.replace(emojiInQuotesSingle, `<${config.icon} size={${config.size}} className="${config.class}" />`);
      }
      const emojiInQuotesDouble = new RegExp(`"${emoji}\\s?"`, 'g');
      if (emojiInQuotesDouble.test(content)) {
         content = content.replace(emojiInQuotesDouble, `<${config.icon} size={${config.size}} className="${config.class}" />`);
      }
      // If it's a bare emoji in JSX text (e.g. `<div>📍 </div>`)
      const bareEmoji = new RegExp(emoji, 'g');
      if (bareEmoji.test(content)) {
         content = content.replace(bareEmoji, `<${config.icon} size={${config.size}} className="${config.class}" /> `);
      }
      changed = true;
    }
  }

  // Prepend imports
  if (importedIcons.size > 0 && !file.includes('StructuredData.js')) {
    const importStatement = `import { ${Array.from(importedIcons).join(', ')} } from 'lucide-react';\n`;
    // Find last import
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLine = content.indexOf('\n', lastImportIndex);
      content = content.substring(0, endOfLine + 1) + importStatement + content.substring(endOfLine + 1);
    } else {
      content = importStatement + content;
    }
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated icons in ${file.replace(__dirname, '')}`);
  }
}
