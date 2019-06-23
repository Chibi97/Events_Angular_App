import { FormControl } from '@angular/forms';

export function restrictedWords(words) {
    return (control: FormControl): {[key: string]: any} => {
        if (!words) { return null; }
        const invalidWords = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);
        return invalidWords && invalidWords.length > 0
            ? { restrictedWords: invalidWords.join(', ') } : null;
        // restrictedWords must match with html field.errors.restrictedWords
    };
}

/**
 *  We are returning a fucntion that returns object that contains an array
 *  From the array of words, we are checking if input value includes the word
 *  If we find it, it is returned, if not its null
 *  and then we filter out nulls so that array is empty if everything's okay
 *
 *  If there are invalid words and array is not empty
 *  we return object with key "restrictedWords" that has a string of forbbiden words
 *  separated by comma.
 */
