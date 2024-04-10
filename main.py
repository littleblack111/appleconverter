from sys import argv
from stdlib import *

"""
map: Dictionary mapping single character keys to special characters to use for "fancy font".
"""
map = {
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
    'l': '¬',
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
}

def main():
    if len(argv) == 1: # no arguments
        transmode = keepasks("What is the transfer mode?(normal or reverse)", inputter=askinput)
    else:
        if "normal" not in argv[1] and "reverse" not in argv[1]:
            printerror("Please input normal or reverse")
            exit(1)
        else:
            transmode = argv[1]

    if "normal" in transmode.lower():
        transmode = 0
        normalMode(in_data)
    elif "reverse" in transmode.lower():
        transmode = 1
        reverseMode(in_data)


def normalMode(data: str):
    """
    normalMode takes a string data as input, iterates through each character, 
    looks up the corresponding substitution character in the map, 
    and concatenates the substituted characters to build the output string out_data.

    It prints a message indicating normal mode was selected, 
    performs the character substitution,
    and calls the outputter function to print the output string.

    This implements a simple letter substitution cipher in normal mode.
    """
    global in_data
    aprintf("Mode selected: Normal Mode")
    for i in data:
        try:
            tmp = list(map.keys())[list(map.values()).index(i)]
        except ValueError:
            tmp = i
        printf(tmp)


def reverseMode(data: str):
    global in_data 
    aprintf("Mode selected: Reverse Mode")
    for i in data:
        try:
            tmp = map[i]
        except KeyError:
            tmp = i
        printf(tmp)

if __name__ == '__main__':
    in_data = keepasks("What is the data you want to transfer?", inputter=askinput)
    main()
