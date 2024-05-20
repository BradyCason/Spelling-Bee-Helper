export default class SpellingBeeHelper{
    constructor(){
        this.wordsPromise = fetch('src/20k.txt')
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

    // async solve(letters, centerIndex, maxLen, setSolutions){
    //     await this.wordsPromise;
    //     if (letters.length != 7){
    //         return("Not enough letters")
    //     }

    //     let solutions = ""
    //     let start = performance.now();
    //     for (let i = 0; i < 7 ** maxLen; i++){
    //         // convert i to base 7 number. Then each digit represents a letter
    //         const base7 = i.toString(7);
    //         const word = base7.replaceAll("0",letters[0]).replaceAll("1",letters[1]).replaceAll("2",letters[2]).replaceAll("3",letters[3]).replaceAll("4",letters[4]).replaceAll("5",letters[5]).replaceAll("6",letters[6]);
            
    //         if(this.words.includes(word) && word.includes(letters[centerIndex])){
    //             if (solutions.length == 0){
    //                 solutions = word
    //             }
    //             else{
    //                 solutions += ", " + word
    //             }
    //             setSolutions(solutions)

    //             await new Promise(resolve => setTimeout(resolve, 0));
    //         }
    //     }
    //     let end = performance.now();
    //     console.log((end - start)/1000);
    // }

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