function checkVowels(str){
  var arr = ["a","i","u","e","o"];
  str = str.toLowerCase();
  str = str.split("");
  var count = 0;


    for(var i = 0; i < str.length; i++){
      for(var k = 0; k < arr.length; k++){
        if(str[i] === arr[k]){
          count++;
          // console.log(arr[k]);
          // console.log(str[i]);
        }
      }
    }


    if(count === str.length){
      return true;
    }
    else{
      return false;
    }


}

console.log(checkVowels("AioUe")); //true
console.log(checkVowels("AnbUiOe")); //false
console.log(checkVowels("AbbbbA")); //false
console.log(checkVowels("jaodijnwNWNw")); //false
console.log(checkVowels("IiOooOIEeUuei")); //true
