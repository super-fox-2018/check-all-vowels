function checkVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let isVowel = false;
  for (var i = 0; i < str.length; i++) {
    isVowel = false;
    for (var j = 0; j < vowels.length; j++) {
      if (str[i].toLowerCase() === vowels[j].toLowerCase()) {
        isVowel = true;
        break;
      }
    }
    if (isVowel === false) {
      return false;
    }
  }
  return true;
}

console.log(checkVowels('aBEoi'));
console.log(checkVowels('aoEUi'));
