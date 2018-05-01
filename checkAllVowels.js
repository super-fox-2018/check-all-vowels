function checkAllVowel(string) {
    let vocal=['A','I','U','E','O'];

    for(let str of string){
        if(vocal.indexOf(str.toUpperCase())===-1){
            return false
        }
    }
    return true;
}

console.log(checkAllVowel('aAuE')); //true
console.log(checkAllVowel('aAruE')); //false
