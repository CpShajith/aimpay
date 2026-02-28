const fs = require('fs');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace blur-[...] that are not already hidden md:block
    // This simplistic approach matches `className="..."` containing `blur-`
    // and checks if it has `md:block` or `hidden`. We inject `hidden md:block`
    // if it's a decorative background absolute wrapper.

    content = content.replace(/className=(["`'])([^"']*\b(blur-\[?\d+px\]?|blur-xl|blur-2xl|blur-3xl)\b[^"']*)(["`'])/g, (match, quote1, classes, blurClass, quote2) => {
        // Only apply to absolute wrappers (decorative backgrounds)
        if (classes.includes('absolute') && !classes.includes('hidden') && !classes.includes('md:block')) {
            return `className=${quote1}hidden md:block ${classes}${quote2}`;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed performance in: ' + file);
    }
});
