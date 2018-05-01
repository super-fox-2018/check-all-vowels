
var vowelChecker = (x) =>{
    var comparator = 'bcdfghjklmnpqrstvwxyz'.split('')
    for(i=0;i<x.length;i++){
        for(j=0;j<comparator.length;j++){
            if(x.charAt(i)==comparator[j]) return false
        }
    }
    return true
}


console.log(vowelChecker("aaaaa"))
console.log(vowelChecker('aaaaaab'))