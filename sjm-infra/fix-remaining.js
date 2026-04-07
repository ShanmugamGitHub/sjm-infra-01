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
  'â€“': '&ndash;',
  'â”€': '-',
  'âœ“': '&#10003;'
};

const iconReplacements = {
  'ðŸ›ï¸': { icon: 'Building2', size: 18, class: 'lucide-icon' },
  'ðŸ›£ï¸': { icon: 'Waypoints', size: 18, class: 'lucide-icon' },
  'ðŸŒ†': { icon: 'SunMedium', size: 18, class: 'lucide-icon' },
  'ðŸ“‹': { icon: 'ClipboardSignature', size: 18, class: 'lucide-icon' },
  'ðŸ“ ': { icon: 'MapPin', size: 18, class: 'lucide-icon' },
  'ðŸ“': { icon: 'FileCheck', size: 18, class: 'lucide-icon' },
  'ðŸ’§': { icon: 'Droplets', size: 18, class: 'lucide-icon' },
  'ðŸ¦': { icon: 'Landmark', size: 18, class: 'lucide-icon' },
  'ðŸ—ï¸': { icon: 'Ruler', size: 18, class: 'lucide-icon' },
  'ðŸ”¨': { icon: 'Hammer', size: 18, class: 'lucide-icon' },
  'ðŸ“Š': { icon: 'BarChart', size: 18, class: 'lucide-icon' },
  'ðŸ ¦': { icon: 'Landmark', size: 18, class: 'lucide-icon' },
  'ðŸ —ï¸': { icon: 'Construction', size: 18, class: 'lucide-icon' }
};

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  let importedIcons = new Set();
  
  // Replace HTML entities
  for (const [bad, htmlEntity] of Object.entries(entityReplacements)) {
    if (content.includes(bad)) {
      if (!file.includes('StructuredData.js')) {
        content = content.split(bad).join(htmlEntity);
      } else {
        content = content.split(bad).join('-');
      }
      changed = true;
    }
  }

  // Replace Icons
  for (const [emoji, config] of Object.entries(iconReplacements)) {
    if (content.includes(emoji)) {
      importedIcons.add(config.icon);
      
      // Handle the emoji when enclosed in quotes like `'ðŸ›ï¸ '`
      const jsxNode = `<${config.icon} size={${config.size}} className="${config.class}" />`;
      
      // Escape spaces in the emoji search if present
      const emojiTrim = emoji.trim();
      
      // 1. Literal quotes substitution e.g., icon: 'ðŸ›ï¸ ' -> icon: <Building2 />
      const regexSingle = new RegExp(`'${emoji}\\s?'`, 'g');
      if (regexSingle.test(content)) {
        content = content.replace(regexSingle, jsxNode);
      }
      
      const regexDouble = new RegExp(`"${emoji}\\s?"`, 'g');
      if (regexDouble.test(content)) {
        content = content.replace(regexDouble, jsxNode);
      }
      
      // 2. Bare substitution within JSX text e.g., <div>ðŸ›ï¸ </div>
      // We wrap the rest in spaces safely
      const bareEmoji = new RegExp(emoji, 'g');
      if (bareEmoji.test(content)) {
        content = content.replace(bareEmoji, `${jsxNode} `);
      }
      
      changed = true;
    }
  }

  // Add remaining missing lucide imports
  if (importedIcons.size > 0 && !file.includes('StructuredData.js')) {
    const iconsArray = Array.from(importedIcons);
    // Find existing lucide-react import
    if (content.includes("from 'lucide-react'")) {
       for (const icon of iconsArray) {
          if (!content.includes(icon) || (!new RegExp(`import .*${icon}.*from 'lucide-react'`).test(content))) {
             // Let's just append to the existing import by regex
             content = content.replace(/import \{(.*?)\} from 'lucide-react'/, (match, p1) => {
                if (!p1.includes(icon)) {
                   return `import {${p1}, ${icon}} from 'lucide-react'`;
                }
                return match;
             });
          }
       }
    } else {
       const importStatement = `import { ${iconsArray.join(', ')} } from 'lucide-react';\n`;
       const lastImportIndex = content.lastIndexOf('import ');
       if (lastImportIndex !== -1) {
         const endOfLine = content.indexOf('\n', lastImportIndex);
         content = content.substring(0, endOfLine + 1) + importStatement + content.substring(endOfLine + 1);
       } else {
         content = importStatement + content;
       }
    }
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated icons in ${file.replace(__dirname, '')}`);
  }
}
