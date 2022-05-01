const addition = require(`./helpers`);
class Text{
    #value = ``;
    constructor(sentence = ``) {
        sentence = addition.sentenceFinished(sentence.trim());
        this.#value += sentence;
    }
    addSentence(sentence = ``){
        sentence = addition.sentenceFinished(sentence.toString().trim());
        this.#value += sentence
    }
    deleteSentence(number){
        let counter = -1;
        let sentences = addition.getSentences(this.#value);
        let marks = addition.punctuationChars(this.#value);
        sentences.splice(number - 1, 1);
        marks.splice(number - 1, 1);
        this.#value = sentences.reduce((previousValue, currentValue) => {
            if(counter <= sentences.length){
                counter++;
                return previousValue + currentValue + marks[counter];
            }
        }, ``)
    }
    get value(){
        return this.#value;
    }
    exists(sentence){
        sentence = addition.dotRemove(sentence.trim());
        for (let sentenceElement of this.#value.split(/[.?!]/)) {
            if(sentenceElement === sentence) return true;
        }
        return  false;
    }
    insertSentence(sentence = ``, number){
        let counter = -1;
        let sentences = addition.getSentences(this.#value);
        let marks = addition.punctuationChars(this.#value);
        sentence = addition.sentenceFinished(sentence.trim());
        marks.splice(number, 0,sentence.charAt(sentence.length - 1));
        sentences.splice(number, 0, addition.dotRemove(sentence));
        this.#value = sentences.reduce((previousValue, currentValue) => {
                counter++;
                return previousValue + currentValue + marks[counter];
        }, ``)
    }
    get sentencesNumber(){
        return addition.getSentences(this.#value).length;
    }
    get lettersNumber(){
        return this.#value.split(/[,.!?;:()\s]/).join(``).length;
    }
    get wordsNumber(){
        return this.#value.split(/[\s!.?]/).length - 1;
    }
    static equals(obj1,obj2){
        return obj1?.#value === obj2?.#value; // Порівнюємо два екземпляри за властивістю
    }
}
let text1 = new Text(`Hello, world!`);
console
    .log(text1.value);
text1.addSentence(`How are u?`);
console.log(text1.value);
text1.deleteSentence(1);
console.log(text1.value)
/*text1.insertSentence(`Fine.`, 1);
console.log(text1.value);
let text3 = new Text(`Hello, world!`);
let text4 = new Text(`Hello, world!`);
console.log(Text.equals(text3,text4));
console.log(Text.equals(text1,text4));
console.log(text1.lettersNumber);
console.log(text1.sentencesNumber);
console.log(text1.wordsNumber);
text1.addSentence(`Mama`);
text1.insertSentence(`Woah`,1);
console.log(text1.value);
console.log(text1.lettersNumber);
console.log(text1.sentencesNumber);
console.log(text1.wordsNumber);*/
