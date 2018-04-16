function formatNum(num) {
  var str = "";
  var index;
  if (num.indexOf(",") != -1) {
    index = num.indexOf(",");
  } else {
    index = num.length;
  }
  console.log(index);
  if (num.indexOf(",") != -1) {
    for (var i = index; i < num.length; i++) {
      str = str + num[i];
    }
  }
  console.log(index);
  for (var j = 1; j <= index; j++) {
    str = num[index - j] + str;
    if (j == index) break;
    if (j % 3 === 0) {
      str = " " + str;
    }
  }
  return str;
}
console.log(formatNum("123456,2"));
