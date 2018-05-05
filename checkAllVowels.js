function checkAllVowels(string) {
    const vowels = 'aeiou';
    let counter = 0;
    for(var z= 0; z < string.length; z++){
        for(var k = 0; k < vowels.length; k++){
            if(string[z].toLowerCase() === vowels[k]){
                counter++
            }
        }
    }

    return counter === string.length
    
  }
  
  console.log(checkAllVowels('uoiauai')); // true
  console.log(checkAllVowels('hacktiv8')); // false
