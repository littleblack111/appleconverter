#!/usr/bin/env python3

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
    translate(data=in_data)

def translate(data: str):
    global in_data 
    aprintf("Mode selected: Reverse Mode")
    for i in data:
        try:
            tmp = map[i]
        except KeyError:
            tmp = list(map.keys())[list(map.values()).index(i)] 
        printf(tmp)

if __name__ == '__main__':
    in_data = keepasks("What is the data you want to transfer?", inputter=askinput)
    main()
    print()
