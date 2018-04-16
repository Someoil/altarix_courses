function isArrContainStr(arr, str) {
  return arr.some(function isStringsEqual(element) {
    return String(element).toLowerCase() == String(str).toLowerCase();
  });
}
console.log(isArrContainStr([22, 5, "sW", 1, 74], "Sw"));
// или так
function isArrContainStr1(arr, str) {
  for (var i = 0; i < arr.length; i++) {
    if (String(arr[i]).toLowerCase() == String(str).toLowerCase()) {
      return true;
    }
  }
  return false;
}
console.log(isArrContainStr1(["sW2", "5F", 8, 1, 74], "5f"));
