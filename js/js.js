'use strict';


// Проверка на мобильное устройство
const isMobile = {

    Android: function() {
        return navigator.userAgent.match(/Android/i)

    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)

    },
    iOS: function() {
        return navigator.userAgent.match(/iPone|iPad|iPod/i);

    },
    Opera: function() {
        return navigator.userAgent.match(/Opera mini/i);

    },
    Windows: function() {
        return navigator.userAgent.match(/IEmobile/i);

    },




    any: function() {

        return isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows();


    }

};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

// Конец проверки на мобильное устройство - добавили класс в body





const button_burger = document.getElementById('burger_menu_btn');
const buttons = document.getElementsByClassName("burger_menu_btn");


function showMenu(e) {
    e.preventDefault();

    if (this.curBtn) {

        this.curBt.classList.toggle('burger_menu_' + this.curBtn);

    }


    // if (params = 1) {


    // } else {
    //     this.classList.toggle('burger_menu_btn_2_active');
    // }

}

function showBurger(e) {
    e.preventDefault();


    this.classList.toggle('burger_menu_btn_1_active');


}


// console.log(buttons);
// buttons.forEach(button => {
//     button.addEventListener('click', showMenu);
// });

// for (const button of buttons) {

//     if (button.classList.contains('btn_1')) {
//         button.addEventListener('click', { handleEvent: showMenu, curBtn: 'btn_1_active', curBt: button });
//     } else {
//         button.addEventListener('click', { handleEvent: showMenu, curBtn: 'btn_2_active', curBt: button });
//     }

//     showBurger

// }

button_burger.addEventListener('click', showBurger);


function showMessage(num, text, name) {

    console.log(`${num} текст ${text} имя ${name}` );
    
   
    let timeId = setTimeout(() => {
        showMessage(++num, '11', '23');
    }, 1000); 
    if (num === 6) {
        clearTimeout (timeId);
    }

    
}

// setTimeout (showMessage, 3000, 1, 'Привет',"Дмитрий");
setTimeout(() => {
    showMessage(1, '11', '23');
}, 1000);

