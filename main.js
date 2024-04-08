const inputArea = document.getElementById('input');
const outputDiv = document.getElementById('output');
const convertButton = document.getElementById('convert');
const modeSelect = document.getElementById('mode');


const map = {
    '`': '`',
    '~': '`',
    '1': '¡',
    '!': '⁄',
    '2': '™',
    '@': '€',
    '3': '£',
    '#': '‹',
    '4': '¢',
    '$': '›',
    '5': '∞',
    '%': 'ﬁ',
    '6': '§',
    '^': 'ﬂ',
    '7': '¶',
    '&': '‡',
    '8': '•',
    '*': '°',
    '9': 'ª',
    '(': '·',
    '0': 'º',
    ')': '‚',
    '-': '−',
    '_': '—',
    '=': '≠',
    '+': '±',
    'q': 'œ',
    'Q': 'Œ',
    'w': '∑',
    'W': '„',
    'e': '´',
    'E': '´',
    'r': '®',
    'R': '‰',
    't': '†',
    'T': 'ˇ',
    'y': '¥',
    'Y': 'Á',
    'u': '¨',
    'U': '¨',
    'i': 'ˆ',
    'I': 'ˆ',
    'o': 'ø',
    'O': 'Ø',
    'p': 'π',
    'P': '∏',
    '[': '“',
    '{': '”',
    ']': '‘',
    '}': '’',
    '\\': '«',
    '|': '»',
    'a': 'å',
    'A': 'Å',
    's': 'ß',
    'S': 'Í',
    'd': '∂',
    'D': 'Î',
    'f': 'ƒ',
    'F': 'Ï',
    'g': '©',
    'G': '˝',
    'h': '˙',
    'H': '',
    'j': '∆',
    'J': 'Ô',
    'k': '˚',
    'K': '',
    'l': '…',
    'L': 'Ò',
    ';': '…',
    ':': 'Ú',
    'z': 'Ω',
    'Z': '¸',
    'x': '≈',
    'X': '˛',
    'c': 'ç',
    'C': 'Ç',
    'v': '√',
    'V': '◊',
    'b': '∫',
    'B': 'ı',
    'n': '˜',
    'N': '˜',
    'm': 'µ',
    'M': 'Â',
    ',': '≤',
    '<': '≤',
    '.': '≥',
    '>': '˘',
    '/': '÷',
    '?': '¿'
};

convertButton.addEventListener('click', () => {
    const mode = modeSelect.value;
    const inputText = inputArea.value;
    let outputText = '';

    if (mode === 'normal') {
        outputText = convertNormal(inputText, map);
    } else if (mode === 'reverse') {
        outputText = convertReverse(inputText, map);
    }

    outputDiv.textContent = outputText;
});

function convertNormal(data, map) {
    return data.split('').map(char => {
        return Object.keys(map).find(key => map[key] === char) || char;
    }).join('');
}

function convertReverse(data, map) {
    return data.split('').map(char => map[char] || char).join('');
}
