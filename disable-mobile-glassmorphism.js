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

    // Change anything that uses backdrop-blur on all devices. If it's `backdrop-blur-sm`, we change it to `backdrop-blur-none sm:backdrop-blur-sm` (so mobile gets none, tablets+ get the blur)
    content = content.replace(/className=(["`'])([^"']*\b(backdrop-blur-[a-z]+)\b[^"']*)(["`'])/g, (match, quote1, classes, blurClass, quote2) => {

        // Safety check - if we already added backdrop-blur-none don't double replace
        if (classes.includes('backdrop-blur-none') || classes.includes('md:backdrop-blur')) {
            return match;
        }

        // Replace the exact blur class with "backdrop-blur-none md:the-blur-class"
        const newClasses = classes.replace(blurClass, `backdrop-blur-none md:${blurClass}`);
        return `className=${quote1}${newClasses}${quote2}`;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Disabled mobile glassmorphism in: ' + file);
    }
});
