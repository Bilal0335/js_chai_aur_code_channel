const name = "Bilal";
const repoCount = 34;
console.log(name + repoCount);

console.log(`my name is ${name} and ${repoCount}`);

const gameName = new String("akmal Jutt");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto___);
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(0)); //indexing number 0 = 'a'
console.log(gameName.indexOf("a")); // character 'a' = 0

const newString = gameName.substring(0, 3); //(start,end) //end mean not include (0,2) = (0 ,1 2) 2 not included ,gr yaha pr negative valu nhi dy saktyh hy q ky ignore kry ka strting 0 sy kry ka
console.log("newString: ", newString);

const anotherSTring = gameName.slice(-3, 2);

console.log("anotherSTring: ", anotherSTring);

let a = "          bilal            ";
console.log("Trim remove: ", a.trim());

let url = "htpps://bilal%20code/";
console.log(url.replace("%20", "-"));
console.log(url.includes("bilal")); //true
console.log(url.includes("hussain")); //false
console.log(gameName.split(" "));

const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
console.log(`${string1} and ${string2} is ${string3}`);

const newStrings = new String(`my name is Bilal`);
console.log(newStrings);
console.log(newStrings.charAt(1)); //[0] = m ,[1]= y

console.log(newStrings[0])  //[0] = m

console.log(typeof newStrings) //object
console.log(typeof string1) //string
let b = '3'
let c = '2'
let d = b + c
console.log(d.valueOf())
console.log(eval(d.valueOf()))
console.log(d.valueOf())
