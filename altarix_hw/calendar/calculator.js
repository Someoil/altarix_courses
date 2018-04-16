function calculate(num1, sign, num2) {
  try {
    if ((!isNaN(parseFloat(num1)) && isFinite(num1)) && ((!isNaN(parseFloat(num2)) && isFinite(num2)))) {
      try {
        if (sign == "+") return num1 + num2;
        if (sign == "-") return num1 - num2;
        if (sign == "*") return num1 * num2;
        if (sign == "/") return num1 / num2;
        else {
          throw new Error("некорректный оператор");
        }
      } catch (e) {
        alert("Ошибка: " + e.message);
      }
    } else {
      throw new Error("некорректный операнд");
    }
  } catch (e) {
    alert("Ошибка: " + e.message);
  }
}

console.log(calculate("-12", "/", "3"));
