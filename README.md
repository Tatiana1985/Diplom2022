# Diplom2022
### Описание проекта
"Пекарня-кондитерская"

  Для работы с формой авторизации вводим данные пользователей:
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

  При переходе по адресу https://diplom-ashy.vercel.app/ пользователь попадает на главную страницу сайта, на которой в шапке расположено меню для перехода на другие страницы веб ресурса. Активная вкладка выделяется. На главной странице расположены блоки с рекламной информацией о пекарне. Реализована карусель-слайдер из нескольких фотографий, которые меняются со временем, либо по нажатию клавиши. Реализованы карточки, аналоги которых в дальнейшем могут быть использованы для описания конкретного торта. Далее контакты, форма обратной связи и часы работы. Добавлена интерактивная карта маршрута от ближайшего метро до пекарни.
  
  Страница Вход/Авторизация
При нажатии на кнопку «Вход/Авторизация», появляется страница ввода email и пароля для входа на сайт. На данной странице реализована форма, выполняющая ajax-запрос, при ответе сервера об успехе пользователь пересылается на страницу тортов, в случае отказа отображается сообщение. На фоне реализован градиент(Данные пользователей даны выше).

  Страница Торты
Переход на страницу торты происходит при авторизации, на странице реализована анимация и подпись, что она находится в разработке. Анимация построена на основе библиотек jquery и  sparticles.js. Она имитирует снегопад из тортиков, происходящий на фоне. Проведена настройка библиотеки и запуск анимацииъ.

  Веб-сервер
Веб-сервер реализован на Node.js с применением фреймворка express. На сервере реализованы пути GET для трех страниц сайта, ‘/’ для index.html, /reg для Входа/авторизации и /cakes для страницы с анимацией. Также реализован POST метод для пути /user для обработки ajax-запроса с целью проверки подлинности пользователя. Пользователи на сервере хранятся в виде массива объектов, среди которых производится поиск нужного пользователя. В случае успеха отправляется ответ, что пользователь успешно найден, в случае провала, что не найден.

  Основной функционал веб-ресурса на данный момент активен и работает. На данном этапе планируемый функционал реализован не полностью. Далее будет создана форма регистрации, обработка формы обратной связи. Доработана страница тортов. Список пользователей будет перенесен в отдельный json-файл или базу данных.
