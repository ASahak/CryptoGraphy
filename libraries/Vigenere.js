"use strict";
export default class Vigenere {

    static doCryptVigenere (isDecrypt, value, key, callback) {
        if (key.length === 0) {
            callback("Key is empty");
            return;
        }
        let keyDouble = this.filterKey(key);
        if (keyDouble.length === 0) {
            callback("Key has no letters");
            return;
        }
        if (isDecrypt) {
            for (let i = 0; i < keyDouble.length; i++)
                keyDouble[i] = (26 - keyDouble[i]) % 26;
        }
        return this.crypt(value, keyDouble);
    }
    /*
     * Returns the result the Vigenere encryption on the given text with the given key.
     */
    static crypt(input, key) {
        let output = "";
        for (let i = 0, j = 0; i < input.length; i++) {
            let c = input.charCodeAt(i);
            if (this.isUppercase(c)) {
                output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
                j++;
            } else if (this.isLowercase(c)) {
                output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
                j++;
            } else {
                output += input.charAt(i);
            }
        }
        return output;
    }
    /*
     * Returns an array of numbers, each in the range [0, 26), representing the given key.
     * The key is case-insensitive, and non-letters are ignored.
     * Examples:
     * - filterKey("AAA") = [0, 0, 0].
     * - filterKey("abc") = [0, 1, 2].
     * - filterKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
     */
    static filterKey(key) {
        let result = [];
        for (let i = 0; i < key.length; i++) {
            let c = key.charCodeAt(i);
            if (this.isLetter(c))
                result.push((c - 65) % 32);
        }
        return result;
    }

    // Tests whether the specified character code is a letter.
    static isLetter(c) {
        return this.isUppercase(c) || this.isLowercase(c);
    }

    // Tests whether the specified character code is an uppercase letter.
    static isUppercase(c) {
        return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
    }

    // Tests whether the specified character code is a lowercase letter.
    static isLowercase(c) {
        return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
    }
}
