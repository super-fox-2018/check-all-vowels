function checkVowels(str) {
    var countVowels=0
    for (var i=0; i<str.length; i++){
        if (str[i]==="a" || str[i]==="A"){
            countVowels+=1
        }
        else if (str[i]==="i" || str[i]==="I"){
            countVowels+=1
        }
        else if (str[i]==="u" || str[i]==="U"){
            countVowels+=1
        }
        else if (str[i]==="e" || str[i]==="E"){
            countVowels+=1
        }
        else if (str[i]==="o" || str[i]==="O"){
            countVowels+=1
        }
    }
    if (countVowels === str.length) return true
        return false
  }
  
  console.log(checkVowels('aiueo')); // true
  console.log(checkVowels('AiUEo')); // true
  console.log(checkVowels('aIUko')); // false
  