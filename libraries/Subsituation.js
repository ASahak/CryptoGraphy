export default function Substitution (message) {
    const symbolsUpper = [['~~'], ['!!'], ['##'], ['$$'], ['%%'], ['^^'], ['**'], ['&&'], ['(-'], ['-)'], ['=='], ['[='], ['=]'], ['=\\='], [';;'], ['::'], ['>>'], ['<<'], ['//'], [',,'], ['..'], ['@@'], ['{{'], ['}}'], ['-('], ['-)']];
    const symbolsLower = [['~'], ['!'], ['@'], ['#'], ['$'], ['%'], ['^'], ['*'], ['&'], ['('], [')'], ['='], ['/'], [';'], [':'], ['>'], ['<'], ['?'], [','], ['.'], ['<>'], ['<{'], ['}>'], [':;'], ['|'], ['~]']];
    const upper        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower        = 'abcdefghijklmnopqrstuvwxyz';

    return message.split('').reduce((acc, letter) => {
        if (lower.indexOf(letter) !== -1) {
            acc.encrypt += symbolsLower[lower.indexOf(letter)];
            acc.decrypt += letter
        } else if (upper.indexOf(letter) !== -1) {
            acc.decrypt += letter
            acc.encrypt += symbolsUpper[upper.indexOf(letter)]
        } else {
            acc.encrypt += letter;
            acc.decrypt += letter;
        }
        return acc
    }, {encrypt: '', decrypt: ''});

}