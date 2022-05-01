const fs = require(`fs`);
const path = `C:\\Users\\38066\\WebstormProjects\\programmingbasics\\laba1\\1.2\\input.json`;
function getMap(path) {
   return new Map(JSON.parse(fs.readFileSync(path,`utf8`,(err)=>{console.log(err)})));
}
function serializeToJSON(path,map) {
    return fs.writeFileSync(path,JSON.stringify(Array.from(map)),(err)=>{console.log(err)});
}
let m = getMap(path);
let sum = 0;
console.log(m);
for (let value of [...m.values()]) {
    sum += value;
}
for (let key of [...m.keys()]) {
    m.set(key, sum);
}
console.log(m);
serializeToJSON(path,m);



