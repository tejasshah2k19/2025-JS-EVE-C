console.log("This is my external JS ");

let a = 10; 
let x = [] 
let y = 'a'; //string 
let z = "royal";//string 

// console.log(typeof(a));
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));

//strcmp strcpy strlen 


let str = "royal";

console.log(str);

//how many chacaters you have in string ?
//length 
console.log("length : "+ str.length);


//merge two string 
let s1 = "rock ";
let s2 = "star";

// let s3 = s1.concat(s2);//immutable 
// console.log(s1);
// console.log(s2);
// console.log(s3);

let s4 = "star";
console.log(s1 == s2);
console.log(s2 == s4);

//you want to access particular character from string 
str = "jony jony yes papa";//indexing  => 0 start 
console.log(str[0]);
console.log(str.charAt(0)) ;
console.log(str.at(0));

//single character print 
console.log("all characters: ");

for(let i=0;i < str.length ; i++){
    console.log(str.charAt(i)); 
}

//----------------------------------------------------------------




