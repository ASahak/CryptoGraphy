export default class Playfair {
    // static isChet = false;
    // static flag = false;
    static flagX = false;
    static flagAdd = false;
    static isEnd = false;

    static doCipher = (msg, key, callback) => {
        let keyResult = this.processKey(key);
        let error = 'Warning!!! String is empty';

        let textPhrase, separator;
        msg = msg.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
        if(msg.length === 0) {
            callback(error);
            return;
        } else {
            textPhrase = msg[0];
        }
        let help = 0;
        for(let i = 1; i < msg.length; i++) {
            if(msg[i - 1] === msg[i]) {
                if(msg[i] === 'X') {
                    separator = 'Q';
                }
                else {
                    separator = 'X';
                }
                textPhrase += separator + msg[i];
                help = 1;
            }
            else {
                textPhrase += msg[i];
            }
            if(help === 1) {
                this.flagAdd = true;
            }
        }

        if(textPhrase.length % 2 !== 0) {
            if(textPhrase[textPhrase.length - 1] === 'X') {
                textPhrase += 'Q';
                this.isEnd = true;
                this.flagX = false;
            }
            else {
                textPhrase += 'X';
                this.isEnd = true;
                this.flagX = true;
            }
        }

        let enCodeStr = '';
        for(let i = 0; i < textPhrase.length; i += 2){
            let pair1 = textPhrase[i];
            let pair2 = textPhrase[i + 1];
            let p1i, p1j, p2i, p2j;
            for(let stroke = 0; stroke < keyResult.length; stroke++) {
                for(let stolbec = 0; stolbec < keyResult[stroke].length; stolbec++){
                    if (keyResult[stroke][stolbec] === pair1){
                        p1i = stroke;
                        p1j = stolbec;
                    }
                    if (keyResult[stroke][stolbec] === pair2){
                        p2i = stroke;
                        p2j = stolbec;
                    }
                }
            }
            let coord1 = '', coord2 = '';

            if(p1i === p2i) {
                if(p1j === 4) {
                    coord1 = keyResult[p1i][0];
                }
                else {
                    coord1 = keyResult[p1i][p1j + 1];
                }
                if(p2j === 4) {
                    coord2 = keyResult[p2i][0];
                }
                else {
                    coord2 = keyResult[p2i][p2j + 1]
                }
            }
            if(p1j === p2j) {
                if(p1i === 4) {
                    coord1 = keyResult[0][p1j];
                }
                else {
                    coord1 = keyResult[p1i + 1][p1j];
                }
                if(p2i === 4) {
                    coord2 = keyResult[0][p2j];
                }
                else {
                    coord2 = keyResult[p2i + 1][p2j]
                }
            }
            if(p1i !== p2i && p1j !== p2j) {
                coord1 = keyResult[p1i][p2j];
                coord2 = keyResult[p2i][p1j];
            }
            enCodeStr = enCodeStr + coord1 + coord2;
        }
        return enCodeStr;
    }

    static deCodeCipher (msg, key) {
        let text = '';
        let text1 = this.doCipher(msg, key);
        let keyResult = this.processKey(key);
        for(let i = 0; i < text1.length; i += 2){
            let pair1 = text1[i];
            let pair2 = text1[i + 1];
            let p1i, p1j, p2i, p2j;
            for(let stroke = 0; stroke < keyResult.length; stroke++) {
                for(let stolbec = 0; stolbec < keyResult[stroke].length; stolbec++){
                    if (keyResult[stroke][stolbec] === pair1){
                        p1i = stroke;
                        p1j = stolbec;
                    }
                    if (keyResult[stroke][stolbec] === pair2){
                        p2i = stroke;
                        p2j = stolbec;
                    }
                }
            }
            let coord1 = '', coord2 = '';

            if(p1i === p2i) {
                if(p1j === 0) {
                    coord1 = keyResult[p1i][4];
                }
                else {
                    coord1 = keyResult[p1i][p1j - 1];
                }
                if(p2j === 0) {
                    coord2 = keyResult[p2i][4];
                }
                else {
                    coord2 = keyResult[p2i][p2j - 1]
                }
            }
            if(p1j === p2j) {
                if(p1i === 0) {
                    coord1 = keyResult[4][p1j]
                }
                else {
                    coord1 = keyResult[p1i - 1][p1j];
                }
                if(p2i === 0) {
                    coord2 = keyResult[4][p2j];
                }
                else {
                    coord2 = keyResult[p2i - 1][p2j]
                }
            }
            if(p1i !== p2i && p1j !== p2j) {
                coord1 = keyResult[p1i][p2j];
                coord2 = keyResult[p2i][p1j];
            }
            text = text + coord1 + coord2;
        }
        text = text.split('');

        for(let i = 0; i < text.length; i++) {
            let count;
            if (this.flagAdd) {
                if(text[i] === text[i + 2] && (text[i + 1] === 'X' || text[i + 1] === 'Q')) {
                    count = i + 1;
                    text.splice(count, 1);
                }
            }
            else if(this.flagAdd && this.isEnd && (this.flagX || !this.flagX)) {
                if(text[i - 2] === text[i] && (text[i - 1] === 'X' || text[i - 1] === 'Q'))
                    count = i + 1;
                text.splice(count, 1);
            }
            else if(!this.flagAdd) {
                break;
            }
        }
        if(this.flagX) {
            text.pop();
        }
        if(this.isEnd && !this.flagX) {
            text.pop();
        }
        text = text.join('');
        return text;
    }

    static processKey (key) {
        let _key = key;
        _key = _key.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
        let temp = '';
        let alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
        for(let i = 0; i < _key.length; i++) {
            if (alphabet.indexOf(_key[i]) !== -1) {
                alphabet = alphabet.replace(_key[i], '');
                temp += _key[i];
            }
        }
        temp += alphabet;
        const result = [];
        temp = temp.split('');
        while(temp[0]) {
            result.push(temp.splice(0,5));
        }
        return result;
    }
}