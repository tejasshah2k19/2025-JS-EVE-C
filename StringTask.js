let str = "RoyAL123";
//count vowels in a string 

console.log("str => "+str);

str = str.toLowerCase(); 

let vowelCounter = 0;
let digitCounter = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'o' || str[i] == 'i' || str[i] == 'u') {
        vowelCounter++;
    }

    if(str[i] >= 0 && str[i] <= 9){
        digitCounter++;
    }

}

console.log("Total Vowels => "+vowelCounter);
console.log("Total Digits => "+digitCounter);


let rev = "";
for(i = str.length -1  ;  i >= 0   ; i--){
     rev = rev + str[i];
}
console.log(rev);

