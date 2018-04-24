function findGitLogin() {
  var login = document.getElementById("login").value;
  var list = document.getElementById("list");

  fetch('https://api.github.com/search/users?q=' + login)
    .then(function(response) {
      return response.json();
    })
    .then(function(users) {
      var arr = users.items.slice(0, 5);
      if (arr.length == 0) {
        list.innerHTML = "Пользователь с указанным логином не найден";
      } else {
        var all_logins = "";
        for (var i = 0; i < arr.length; i++) {
          all_logins += "<li>" + arr[i].login + "</li>";
        }
        list.innerHTML = all_logins;
      }
    })
    .catch(function(err) {
      list.innerHTML = "Что-то пошло не так!";
    });
}
