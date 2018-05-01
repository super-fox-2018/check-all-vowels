
function checkVowels(str){
    var vocal='aiueo'
    var kecil=str.toLowerCase()
    var count =0
    for(let i=0;i<kecil.length;i++){   
        for(let j=0;j<vocal.length;j++){
            if(kecil[i] === vocal[j]){
                count++
               
            }
           
        }     
    }
    if(count === kecil.length){
        return true
    }
        return false


}
console.log(checkVowels('aio'))
console.log(checkVowels('abc'))
console.log(checkVowels('AoaIeOo'))
console.log(checkVowels('AIuTP'))