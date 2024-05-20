import textContent from './20k.txt';

export default class SpellingBeeHelper{
    constructor(){
        this.wordsPromise = fetch(textContent)
        .then(response => response.text())
        .then(data => {
            // Split the text into words
            const words = data.split(/\s+/);
            // Remove punctuation
            const noPunctuationWords = words.map(word => word.replace(/[^\w\s]/g, ''));
            // Remove empty strings
            this.words = noPunctuationWords.filter(word => word.length > 3);
        })
        .catch(error => console.error('Error reading file:', error));
    }

    validWord(letters, centerIndex, word){
        if (!word.includes(letters[centerIndex])){
            return false;
        }
        for (let i = 0; i < word.length; i++){
            if (!letters.includes(word[i])){
                return false;
            }
        }
        return true;
    }

    async solve(letters, centerIndex, setSolutions){
        await this.wordsPromise;
        if (letters.length != 7){
            return("Not enough letters")
        }
        
        let words1 = [...this.words]

        let words2 = words1.filter(word => this.validWord(letters, centerIndex, word))

        setSolutions(words2.join(', '))
    }
}