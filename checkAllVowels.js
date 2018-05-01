function checkAllVowels(string) {
  var vocal = 'aiueo';
  for (var i = 0; i < string.length; i++) {
    var status = false;
    for (var j = 0; j < vocal.length; j++) {
      if (string[i].toLowerCase()==vocal[j]) {
        status = true;
      }
    }
    if(status==false){
      return status;
    }
  }
  return status;
}
console.log(checkAllVowels('aUiueOAiu'));
console.log(checkAllVowels('akUiueOAiu'));
