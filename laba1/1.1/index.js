const path = `input.txt`;
const fs = require(`fs`);
let data = fs.readFileSync(path,`utf8`,(err)=>{
    console.log(err);
})
if(data.length === 0) throw new Error();
let arr = data.split(`,`);
let s = new Set();
for (const sElement of arr) {
    s.add(sElement);
}
console.log(s);
let s2 = new Set();
let res = ``;
let subString = ``;
s.forEach((value) => {
    value += ` ${subString}`;
    s2.add(value);
    subString = value;
})
console.log(s2);

