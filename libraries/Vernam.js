export default class Vernam {
    static letters = [];
    static abc = [];

    static generateRandomStringByAmount(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static doEncrypt (msg, callback) {
        const sum = [];
        const enc = [];
        this.letters = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

        let input = msg.toUpperCase();
        let key = this.generateRandomStringByAmount(msg.length).toUpperCase();
        let inputIndex;
        callback(key);
        for(let i = 0;i < msg.length; i++)
        {

            inputIndex= this.letters.indexOf(input[i]);
            let keyIndex = this.letters.indexOf(key[i]);
            sum[i] = inputIndex+keyIndex;
            if(sum[i]>=26)
            {
                sum[i]=sum[i]%26;
            }

        }
        for(let j = 0; j < msg.length; j++){
            enc[j] = this.letters[sum[j]];
            this.abc[j] = sum[j];

        }
        const encr = enc.toString();
        const encrypt = encr.split(",").join("");
        return encrypt
    }
    static doDecrypt (msg, key) {
        const arr = [];
        const dec = [];
        // const enter = msg.toUpperCase();
        const keyD = key.toUpperCase();
        for(let k = 0; k < keyD.length; k++){
            let xyz= this.letters.indexOf(keyD[k]);
            arr[k] = this.abc[k]-xyz;
            if(arr[k]<0)
            {
                arr[k]+=26;
            }
        }
        for(let m = 0; m < keyD.length; m++)
        {
            dec[m] = this.letters[arr[m]];
        }
        const decr = dec.toString();
        const decrypt = decr.split(",").join("");
        return decrypt;
    }
}