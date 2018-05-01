function checkAllVowels(str) {
  const vowels = 'aeiou';
  for (let i = 0; i < str.length; i += 1) {
    let isVowel = false;
    for (let j = 0; j < vowels.length; j += 1) {
      if (str[i] === vowels[j]) {
        isVowel = true;
        break;
      }
    }

    if (!isVowel) return false;
  }
  
  return true;
}

console.log(checkAllVowels('uoiauai')); // true
console.log(checkAllVowels('hacktiv8')); // false