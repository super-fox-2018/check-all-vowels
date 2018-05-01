function checkAllVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (var i = 0; i < str.length; i++){
        for (var j = 0; j < vowels.length; j++){
            if (str[i].toLowerCase() === vowels[j]){
                count++;
                break;
            }
        }
    }
    if (str.length === count)return true;
    return false;
}

console.log(checkAllVowels('aueoaiu'));
console.log(checkAllVowels('auekuai'));
console.log(checkAllVowels('eEeoooi'));
console.log(checkAllVowels('eEeoAoJ'));
console.log(checkAllVowels('eUeOAoi'));