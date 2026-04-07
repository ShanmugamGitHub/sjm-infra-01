const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        walk(path.join(dir, file), fileList);
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const allFiles = [...walk(path.join(__dirname, 'app')), ...walk(path.join(__dirname, 'components'))];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Look for any non-ASCII character (except common ones like smart quotes, bullet dots if already correct)
  const lines = content.split('\n');
  let found = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Regex matches any character outside basic ASCII
    // We ignore copyright symbol, em-dash, l/r quotes if properly encoded, but let's just log everything non-ASCII for inspection.
    const nonAsciiMatch = line.match(/[^\x00-\x7F]/g);
    if (nonAsciiMatch) {
      if (!found) {
        console.log(`\n--- ${file.replace(__dirname, '')} ---`);
        found = true;
      }
      console.log(`${i + 1}: ${line.trim()}`);
    }
  }
}
