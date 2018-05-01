function checkAllVowels(str) {
	var vokals = ["a","i","u","e","o"]
	for(var i=0;i<str.length;i++) {
		var status=false;
		for(var j=0;j<vokals.length;j++) {
			if(str[i].toLowerCase() == vokals[j]) {
				status = true
				return status
			}
		}
	}
	return status
}

console.log(checkAllVowels("HAlls"))
console.log(checkAllVowels("Hslls"))