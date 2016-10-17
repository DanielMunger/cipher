var sentence =  prompt("Enter a sentence:");

var first = function(sentence) {
  var capital_sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1,-1) + sentence.slice(-1).toUpperCase();
  return capital_sentence;
};
alert(first(sentence));
