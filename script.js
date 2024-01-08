// Карточки
// Двумерный массив из названий блюд (используется для карточек)
foods = [
    ["Салат Цезарь",650, "static/img/cezar.jpg", "Описание Цезаря", "cezar-card","descr_food_cezar.html"],
    ["Салат Греческий", 550, "static/img/grech.jpg", "Описание Греческого", "grech-card", "descr_food_grech.html"],
    ["Салат фруктовый", 600,"static/img/fruits.jpg", "Описание фруктового", "fruit-card", "descr_food_fruit.html"],
    ["Салат Нисуаз", 550, 'static/img/nisuaz.jpg', 'Описание Нисуаза', 'nizuaz-card', 'descr_food_nisuaz.html']]

const form = document.querySelector('.form')
console.log

// Появление карточек на главном экране
foods.forEach(element => {
    if (document.querySelector(".cards")) {
        document.querySelector(".cards").innerHTML += `<div class="${element[4]} card">

    <div class="${element[4]} food_img">
        <img src=${element[2]} alt="" class="${element[4]}">
    </div>
    
    <a href="${element[5]}"><h3 class="${element[4]} name_food">${element[0]}</h3></a>
    <div class="price">
        <p class="old_price"><span>${element[1]}</span> руб</p>
        <p class="new_price"><span>${element[1]*0.8}</span> руб</p>
    </div>
    <a href="${element[5]}"><div class="${element[4]} btn_more">
        <p>Читать далее</p>
    </div></a>

</div>`;
    }
    
});

timer = document.querySelector(".timer")
days = document.querySelector(".days")
hours = document.querySelector(".hours")
minutes=document.querySelector(".minutes")
seconds=document.querySelector(".seconds")

// Таймер
setInterval(function() {
    now = Date.now()
    t = Date.UTC(2024,0,31,23,59,59,0) - now
    d = Math.floor(t / (1000 * 60 * 60 * 24)),
    h = Math.floor((t / (1000 * 60 * 60) % 24)),
    m = Math.floor((t / 1000 / 60) % 60),
    s = Math.floor((t / 1000) % 60);
    days.innerHTML = `<p><span>${d}</span>Дней</p>`;
    hours.innerHTML = `<p><span>${h}</span>Часов</p>`;
    minutes.innerHTML = `<p><span>${m}</span>Минут</p>`;
    seconds.innerHTML = `<p><span>${s}</span>Секунд</p>`;
},1000)

// Форма
form.addEventListener('submit', e => {
    e.preventDefault();
    name_form = form.querySelector('[name="name"]');
    phone_form = form.querySelector('[name="phone"]')
    data = {'name': name_form.value,
    'phone':phone_form.value}
    form.innerHTML+=`<div class="data_form">
    <p>Ваши данные</p>
    <p>Ваше имя: ${data['name']}</p>
    <p>Ваш номер телефона: ${data['phone']}</p>
    <p>Мы скоро Вам перезвоним</p>
</div>`
})

