function getWeekDay(year, month) {
  var date = new Date(year, month - 1);
  if (date.getDay() == 0) return 7;
  else return date.getDay();
}

function getCalendar(year, month) {
  var date = new Date(year, month - 1);
  var calendar = document.getElementById("calendar");
  var table = '<table><tr><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr><tr>';
  if (month < 1 || month > 12) alert("enter the correct month");
  else {
    for (var i = 1; i < getWeekDay(year, month); i++) {
      table += '<td></td>';
    }
    for (; date.getMonth() == month - 1; date.setDate(date.getDate() + 1)) {
      table += '<td>' + date.getDate() + '</td>';
      if (date.getDay() == 0) {
        table += '</tr><tr>';
      }
    }
  }
  table += '</tr></table>';
  calendar.innerHTML = table;
}
getCalendar(2018, 4);
