////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------
//INPUT: ARRAY
var simpOrSamp = function(modArray){
   var newArray = []
   for(var i = 0; i < modArray.length; i++){
      if(modArray[i].length < 6){

         var newName = modArray[i] + " Sampson"
      }
      else{
         var newName = modArray[i] + " Simpson"
      }
         newArray.push(newName)
   }


      return newArray;

}





var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var modifiedNamesList = simpOrSamp(simpList) //simpList?
console.assert( modifiedNamesList[1] === "OJ Sampson" )
console.assert( modifiedNamesList[2] === "Marge Sampson" )
console.assert( modifiedNamesList[5] === "Maggie Simpson" )


////------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
////------------------------------------------------------------------

//INPUT: ARRAY
var shortiesOnly = function(shrtRay){
   var minArray = []
   for(var i = 0; i < shrtRay.length; i++){
      if(shrtRay[i].length <= 4){
         var shrtName = shrtRay[i];
         minArray.push(shrtName)

      }
      else{}
   }
   return minArray;
}

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var shortList = shortiesOnly(allNames)
console.assert( shortList.length === 4 )
console.assert( shortList.indexOf('Fred') != -1 )
console.assert( shortList.indexOf('Wayne') === -1 )
