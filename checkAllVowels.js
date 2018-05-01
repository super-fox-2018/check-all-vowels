function checkAllVowels(str) {
	var vokals = ["a","i","u","e","o"]
	var count=0;
	for(var i=0;i<str.length;i++) {
		for(var j=0;j<vokals.length;j++) {
			if(str[i].toLowerCase() == vokals[j]) {
				count++
			}	
		}
	}
	if(count == str.length) {
		return true
	}else {
		return false
	}
}

console.log(checkAllVowels("UEOI"))
console.log(checkAllVowels("Hslls"))
console.log(checkAllVowels("AEIO"))
console.log(checkAllVowels("AEIS"))