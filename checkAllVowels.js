function checkvokal(kata) {
  var vokal = ['a', 'i', 'u', 'e', 'o'];

  for (let i = 0; i < kata.length; i++) {
    var cek = false;
    for (let j = 0; j < vokal.length; j++) {
      if (kata[i].toLowerCase() === vokal[j]) {
        cek = true;
      }
    }

    if (!cek) {
      return false;
    }
  }

  return true;
}
console.log(checkvokal('AUiOe'));
console.log(checkvokal('oAiude'));
