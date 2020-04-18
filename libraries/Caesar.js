export default class Caesar {
    static doCrypt (isDecrypt, msg, shift, callback) {
        if (!/^-?\d+$/.test(shift)) {
            callback("Shift is not an integer");
            return;
        }
        let _shift = parseInt(shift, 10);
        if (_shift < 0 || _shift >= 26) {
            callback("Shift is out of range! (please include 1 - 25 digits only)");
            return;
        }
        if (isDecrypt) {
            _shift = (26 - _shift) % 26;
        }
        return  this.caesarShift(msg, _shift);
    }

    /*
     * Returns the result of having each alphabetic letter of the given text string shifted forward
     * by the given amount, with wraparound. Case is preserved, and non-letters are unchanged.
     * Examples:
     * - caesarShift("abz",  0) = "abz".
     * - caesarShift("abz",  1) = "bca".
     * - caesarShift("abz", 25) = "zay".
     * - caesarShift("THe 123 !@#$", 13) = "GUr 123 !@#$".
     */
    static caesarShift (text, shift) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let c = text.charCodeAt(i);
            if      (65 <= c && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
            else if (97 <= c && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
            else                          result += text.charAt(i);  // Copy
        }
        return result;
    }
}





