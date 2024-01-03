foods = [
    ["Салат Цезарь",650, "static/img/cezar.jpg", "Описание Цезаря", "cezar-card","descr_food_cezar.html"],
    ["Салат Греческий", 550, "static/img/grech.jpg", "Описание Греческого", "grech-card", "descr_food_grech.html"],
    ["Салат фруктовый", 600,"static/img/fruits.jpg", "Описание фруктового", "fruit-card", "descr_food_fruit.html"],]

const form = document.querySelector('.form')
console.log
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
    <div class="${element[4]} btn_more">
        <a href="#"><p>Читать далее</p></a>
    </div>

</div>`;
    }
    
});

cards = document.querySelectorAll('.card');
console.log(cards[0].ParentNode);

cnt_card = 0;

if (cards){
    cards.forEach(e => {
    e.addEventListener('click',event => {
        console.log(event.target.classList[0]);
        food_class = event.target.classList[0];
        for (let i = 0; i < foods.length; i++) {
            if (i[6] == food_class){
                document.querySelector(".descr_container").innerHTML += 
                `<div class="descr">
                <img src="static/img/cezar.jpg" alt="">
                <div class="descr_text">
                    <h1>Название салата</h1>
                    <p>Описание салата</p>
                </div>
                </div>`;
            };
            
        }
    });
    cnt_card ++;
});
}


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

