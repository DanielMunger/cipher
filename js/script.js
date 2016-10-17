var sentence =  prompt("Enter a sentence:");

var first = function(param) {
  var capital_sentence = param.charAt(0).toUpperCase() + param.slice(1,-1) + param.slice(-1).toUpperCase();
  return capital_sentence;
};


var second = function(param) {
  var reverse = param.slice(-1) + param.slice(1,-1) + param.charAt(0);
  return reverse;
};


var third = function(someSentence) {
  var someVar = first(someSentence);
  return second(someVar);
};

alert(third(sentence));
