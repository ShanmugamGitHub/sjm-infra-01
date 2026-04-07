const fs = require('fs');
const path = require('path');

const STAR_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{ display: 'inline-block' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
const PIN_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
const ARROW_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }}><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41l4.88 4.88H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>`;

const filesToFix = [
  'app/HomePage.js',
  'app/projects/ProjectsPage.js',
  'app/contact/ContactPage.js',
  'app/reach/ReachPage.js',
  'app/admin/page.js'
];

function processFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;

  // Replace garbled/ugly emojis
  // Stars in mapping array
  const starMatch = /\{\[1,2,3,4,5\]\.map\(s => <span .*?>[^\<]+<\/span>\)\}/g;
  if (starMatch.test(content)) {
    content = content.replace(starMatch, `{[1,2,3,4,5].map(s => <span key={s} style={{ color: 'var(--gold)', display: 'inline-flex' }}>${STAR_SVG}</span>)}`);
    changed = true;
  }

  // Location / Pin emojis (handling utf8 malformed or literal 📍 / ðŸ“ )
  // Let's replace any instance of "ðŸ“  " or "📍 " inside JSX with PIN_SVG
  // Instead of regex on garbled characters, let's just do a specific string replace
  const pinGarbled = "ðŸ“  ";
  const pinEmoji = "📍 ";
  const pinEmoji2 = "📍";
  
  if (content.includes(pinGarbled) || content.includes(pinEmoji) || content.includes(pinEmoji2)) {
    content = content.split(pinGarbled).join(`{/* pin */}${PIN_SVG} `);
    content = content.split(pinEmoji).join(`{/* pin */}${PIN_SVG} `);
    content = content.split(pinEmoji2).join(`{/* pin */}${PIN_SVG} `);
    changed = true;
  }

  const dotGarbled = " Â· ";
  if (content.includes(dotGarbled)) {
    content = content.split(dotGarbled).join(" · ");
    changed = true;
  }

  const arrowGarbled = " â†’";
  const arrowEmoji = " →";
  if (content.includes(arrowGarbled) || content.includes(arrowEmoji)) {
    content = content.split(arrowGarbled).join(` ${ARROW_SVG}`);
    content = content.split(arrowEmoji).join(` ${ARROW_SVG}`);
    changed = true;
  }
  
  const houseEmoji = "🏠";
  const govtEmoji = "🏛️";
  const mapEmoji = "🗺️";
  const chatGarbled = "ðŸ’¬";
  const chatEmoji = "💬";
  
  if (content.includes(chatGarbled) || content.includes(chatEmoji) || content.includes(houseEmoji) || content.includes(govtEmoji) || content.includes(mapEmoji)) {
    // For specific static widgets, we just remove the garbled texts and emojis.
    content = content.split(chatGarbled + " ").join("");
    content = content.split(chatEmoji + " ").join("");
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

filesToFix.forEach(processFile);
