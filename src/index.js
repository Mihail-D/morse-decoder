const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr)
{
    let decodedLetters = [];
    let encodedPhrases = [];

    for (let i = 0; i < expr.length; i += 2)
    {
        decodedLetters.push(expr.slice(i,i + 2));
    }

    for (let k = 0; k < decodedLetters.length; k++)
    {
        if (decodedLetters[k] == '10')
        {
            decodedLetters.splice(k,1,'.')
        } else if (decodedLetters[k] == '11')
        {
            decodedLetters.splice(k,1,'-')
        }
    }

    for (let i = 0; i < decodedLetters.length; i += 5)
    {
        encodedPhrases.push(decodedLetters.slice(i,i + 5).join(''))
    }

    for (let i = 0; i < encodedPhrases.length; i++)
    {
        if (encodedPhrases[i][0] === '*') continue
        encodedPhrases[i] = encodedPhrases[i].split('');
        encodedPhrases[i] = encodedPhrases[i].splice(encodedPhrases[i].lastIndexOf('0') + 1);
        encodedPhrases[i] = encodedPhrases[i].join('');
        encodedPhrases[i] = MORSE_TABLE[encodedPhrases[i]]
    }

    return encodedPhrases.join('').split('**********').join(' ')
}

module.exports = {
    decode
}