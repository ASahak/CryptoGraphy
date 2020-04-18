export default function ROT13 (string) {
    let messageArray = string.split('');
    let messageInNumbers = messageArray.map(function(char) {
        if (!char) {
            return char;
        } else return char.charCodeAt(0);
    });

    const messageNumbersShifted = messageInNumbers.map(function(charCode) {
        let translatedCharCode;
        //caps
        if (charCode >= 65 && charCode <= 90) {
            if (charCode > 'M'.charCodeAt(0)) {
                translatedCharCode = charCode - 13;
            } else {
                translatedCharCode = charCode + 13;
            }

            return String.fromCharCode(translatedCharCode);

        }
        //lower case
        else if (charCode >= 97 && charCode <= 122) {
            if (charCode > 'm'.charCodeAt(0)) {
                translatedCharCode = charCode - 13;
            } else {
                translatedCharCode = charCode + 13;
            }
            return String.fromCharCode(translatedCharCode);
        }
        //characters that are left alone
        else {
            return String.fromCharCode(charCode);
        }
    });

    return messageNumbersShifted.join('');

}