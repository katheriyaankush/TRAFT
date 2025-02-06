import Chance from 'chance';

const chance = new Chance();

interface IRandomData {
    pool?: string;
    alpha?: boolean;
    casing?: 'upper' | 'lower';
    symbol?: boolean;
}

export class DataGeneratorUtil {

    /**
    * Generates string based on the input length
    * @param length number format
    * @returns
    */
    public static generateRandomString(length: number, options : IRandomData): string {
        if (options.casing === 'upper') {
            return chance.string({ length, casing: 'upper' });
        }
        return chance.string({ length });
    }

    /**
    * select string from the given array
    * @param length number format
    * @returns
    */
    public static pickOne(arr: string[]): string {
        return chance.pickone(arr);
    }

    /**
    * Generates Number based on the input max value and min value is 0
    * @param max number format
    * @returns
    */
    public static generateRandomNumber(min: number = 0, max: number): number {
        return chance.integer({ min: min, max });
    }

    /**
    * Generates Email based on the domain name
    * @param domainName string format
    * @returns
    */
    public static generateRandomEmailId(domainName: string): string {
        return chance.email({ domainName });
    }

    /**
    * Generates url based on the domain name
    * @param domain string format
    * @returns
    */
    public static generateRandomUrl(domain: string): string {
        return chance.url({ domain });
    }

    /**
    * Generates phone number
    * @param country string format
    * @returns
    */
    public static generateRandomPhoneNumber(country: string = "in", mobile: boolean = true, formatted: false): string {
        return chance.phone({ country, mobile, formatted });
    }

    /**
    * Generates sentence based on the word count
    * @param wordCount number format
    * @returns
    */
    public static generateRandomSentence(wordCount: number): string {
        return chance.sentence({ wordCount });
    }

    /**
    * Generates paragraph based on the sentence count
    * @param sentenceCount number format
    * @returns
    */
    public static generateRandomParagraph(sentenceCount: number): string {
        return chance.sentence({ sentenceCount });
    }

    /**
    * Generates word with Alpha numeric format based on the input length
    * @param length number format
    * @returns
    */
    public static generateRandomAlphaNumericCharacters(length: number): string {
        return chance.word({ length, alpha: true, numeric: true });
    }

    /**
    * Capitalize the first letter based on the input string
    * @param input string format
    * @returns
    */
    public static capitalizeFirstLetter(input: string): string {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

    /**
    * Generates the reverse string based on the input string
    * @param input string format
    * @returns
    */
    public static reverseString(input: string): string {
        return input.split('').reverse().join('');
    }

    /**
    * Shuffles the string based on the input string
    * @param input string format
    * @returns
    */
    public static shuffleString(input: string): string {
        const arr = input.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }
}