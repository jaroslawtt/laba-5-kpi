module.exports = {
    punctuationChars(string = ``){
        let arr = [];
        for (let char of string) {
            if(char === `.` || char === `!` || char === `?`) arr.push(char);
        }
        return arr;
    },
    getSentences(string = ``){
        let arr = string.split(/[!.?]/);
        arr.splice(arr.length - 1, 1);
        return arr;
    },
    sentenceFinished(sentence){
        let char = sentence.charAt(sentence.length - 1);
        if(char !== `!` && char !== `?` && char !== `.`) {
            sentence += `.`
        }
        return sentence;
    },
    dotRemove(sentence = ``){
        let char = sentence.charAt(sentence.length - 1);
        if(char === `.` || char === `!` || char === `?`) sentence = sentence.substring(0,sentence.length - 1);
        return sentence;
    }
}
