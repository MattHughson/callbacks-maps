var words = ["ground", "control", "to", "major", "tom"];

var map = function(array, callBack){
    //console.log("test array", array, "test Callback", callBack )
    var newArray = [];
    for(var i = 0; i < array.length; i++){
    newArray.push(callBack(array[i]));
    }
   // console.log("test callback", callBack)

      return console.log(newArray)
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
   return word.toUpperCase();
 });

 map(words, function(word) {
   return word.split('').reverse().join('');
 });
