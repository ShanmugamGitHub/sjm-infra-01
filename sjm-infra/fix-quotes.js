const fs = require('fs');
const path = require('path');

const STAR_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{ display: 'inline-block' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
const PIN_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: "inline-block", marginRight: "4px", verticalAlign: "middle" }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
const ARROW_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ display: "inline-block", marginLeft: "4px", verticalAlign: "middle" }}><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41l4.88 4.88H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>`;

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

  // Fix strings where SVG was injected incorrectly
  // Let's replace: '{/* pin */}<svg.... </svg> ' with just the SVG node (no quotes)
  const regexLiteralNode = /'\{\/\*\s*pin\s*\*\/\}(<svg.*?<\/svg>)\s*'/g;
  content = content.replace(regexLiteralNode, "$1");
  
  // What if it was double quotes?
  const regexLiteralNodeDbg = /"\{\/\*\s*pin\s*\*\/\}(<svg.*?<\/svg>)\s*"/g;
  content = content.replace(regexLiteralNodeDbg, "$1");

  // What about template literals? 
  // e.g. `{/* pin */}<svg ...`
  // Nothing to fix if it was directly in JSX out of quotes.

  // Let's make sure our SVGs within quotes are changed back to valid JSX for object arrays
  // Example: icon: '{/* pin */}<svg style={{...}}>'  ->  icon: <svg style={{...}}>
  
  // Wait, I had: content = content.split(pinEmoji).join(`{/* pin */}${PIN_SVG} `);
  // So inside the array in ContactPage.js, it was: { icon: '{/* pin */}<svg...
  // It matches the regex string literal above. Let's do a broader fix to replace any enclosing string quotes containing an inline SVG 
  const replaceStrWithJSX = /(["'`])(\{\/\* pin \*\/\})?(<svg.*?<\/svg>)\s*\1/g;
  content = content.replace(replaceStrWithJSX, "$3");
  
  fs.writeFileSync(fullPath, content, 'utf8');
}

filesToFix.forEach(processFile);
