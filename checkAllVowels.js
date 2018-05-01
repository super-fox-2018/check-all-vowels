function checkVowels(data) {
  var vowels = ['a', 'i', 'u', 'e', 'o']
  var lowerCaseData = data.toLowerCase().split('')
  var counter =0
  for (var i = 0; i < lowerCaseData.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (vowels[j] === lowerCaseData[i]) {
        counter++
      }
    }
  }
  if (counter === lowerCaseData.length) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkVowels('aAAAiiUUUEE')); //true
console.log(checkVowels('aiueo')); //true
console.log(checkVowels('aaaiiiieeooo')); //true
console.log(checkVowels('aiuuetooo')); //false
console.log(checkVowels('aaiiuetoo')); //false
