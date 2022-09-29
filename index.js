const express = require('express')

const app = express();
app.use('/static', express.static(__dirname));
// создаем парсер для данных в формате json
const jsonParser = express.json();

const users = [
    {
        email: 'AAA@rr',
        password: 'AAA',
    },
    {
        email: 'BBB@B',
        password: 'BBB',
    },
    {
        email: 'CCC@rr',
        password: 'CCC',
    }
]
// Сюда приходят логин и пароль пользователя на проверку
app.post("/user", jsonParser, function (request, response) {
    let data = request.body;
    if(!request.body) return response.sendStatus(400);
    let answer = {
        validUser: false
    }
    users.forEach(user => {
        if (user.email === data.email && user.password === data.pass) {
            answer.validUser = true;
        }
    })
    response.json(answer); // отправляем пришедший ответ обратно
});


app.get("/cakes", function(request, response){
    console.log('редирект прошел')
    response.sendFile(__dirname + "/views/cakes.html");
});


app.get("/", function(request, response){

    response.sendFile(__dirname + "/views/index.html");
});

app.get("/reg", function(request, response){
    response.sendFile(__dirname + "/views/reg_28.09.html");
});

app.listen(3000);
