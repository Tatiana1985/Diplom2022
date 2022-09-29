    document.getElementById("submit").addEventListener("click", function (e) {
        e.preventDefault();
       // получаем данные формы
       let registerForm = document.forms["registerForm"];
       let email = registerForm.elements["email"].value;
       let pass = registerForm.elements["pass"].value;
       // сериализуем данные в json
       let user = JSON.stringify({email: email, pass: pass});
       let request = new XMLHttpRequest();
       // посылаем запрос на адрес "/user"
        request.open("POST", "/user");   
        request.setRequestHeader("Content-Type", "application/json");
        request.addEventListener("load", function () {
            let answer = JSON.parse(request.response);
            if (answer.validUser) {
                location.href='/cakes'
            } else {
                document.getElementById('wrongUser').style.visibility = 'visible'
            }
        });
        request.send(user);
    });