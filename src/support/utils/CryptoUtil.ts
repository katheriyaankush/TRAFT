import CryptoJS from "crypto-js";

export class CryptoUtil {
    decryptWithAES = (cipherText: string): string => {
        const passphrase = "123";
        const bytes = CryptoJS.AES.decrypt(cipherText, passphrase);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
    };
    encryptWithAES = (originalText: string, passphrase = "123") => {
        return CryptoJS.AES.encrypt(originalText, passphrase).toString();
    }
}
