let cekVowels = function(str){
    let vowels = 'aiueo';
    let count = 0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(str[i].toLowerCase()===vowels[j]){
                count++;
            }
        }
    }
    if(str.length === count){
        return true;
    }else{
        return false;
    }
}

console.log(cekVowels('aiEEEueo')) //true
console.log(cekVowels('aiu')) //true
console.log(cekVowels('budi')) //false
console.log(cekVowels('asep')) //false