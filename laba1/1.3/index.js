import Enumerable from 'linq'
let people = ["Tom", "Bob", "Sam", "Tim", "Tomas", "Bill"];
function getLinqSorted(arr,letter){
    return Enumerable.from(arr)
        .where(person => person && person.toUpperCase().startsWith(letter) && person.toUpperCase().endsWith(letter))
        .select(person => person)
        .toArray();
}
console.log(getLinqSorted(people,`T`).length);