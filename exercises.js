function my_max(array) {
  return Math.max.apply(null, array);
}

function vowel_count(string) {
  string = string.toLowerCase();
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    console.log(char);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "y") {
      count++;
    }
  }
  return count;
}

function reverse(string) {
  var newstr = '';
  for (var i = string.length - 1; i > -1; i--) {
    newstr += string[i];
  }
  return newstr;
}
