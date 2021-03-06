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

    let menuArrows = document.querySelectorAll('.menu__arrow');

    if (menuArrows.length > 0) {
        for (let i = 0; i < menuArrows.length; i++) {
            const menuArrow = menuArrows[i];

            menuArrow.addEventListener('click', () => {
                menuArrow.parentElement.classList.toggle('_active');
            })
        }
    }

} else {
    document.body.classList.add('_pc');
}


// плавный переход по страницам

// тест 
let elements = document.getElementById('__fullpage_3');
console.log(elements);

const myClasses = document.getElementsByClassName('pavlova_1');

if (myClasses.length > 0) {
    for (const iterator of myClasses) {
        console.log(iterator);
        iterator.dataset.goto = '__fullpage_3';
    }

}

// конец теста

const menuLinks = document.querySelectorAll('.li_menu [data-goto]');
// const menuLinks = document.querySelectorAll('div [data-goto]');

if (menuLinks.length > 0) {

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick(e) {

        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {

            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlackValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.sticky_menu').offsetHeight;


            window.scrollTo({
                top: gotoBlackValue,
                behavior: 'smooth',
            });

        }

    }

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


<<<<<<< HEAD
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

=======

// console.log(Math.floor(Math.random() * 15));

// let arr = [];

// for (let index = 0; index < 15; index++) {
//     arr.push(Math.floor(Math.random() * 15));

// }

// console.log(arr);

let canvas = document.getElementById("canvas");
// console.log(canvas);
let ctx = canvas.getContext('2d');
// console.log(ctx);
ctx.fillStyle = 'rgba(251, 25, 25, 0.8)';
ctx.fillRect(0, 0, 300, 150);
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(80, 60);
ctx.lineTo(180, 160);
ctx.closePath();
ctx.stroke();
>>>>>>> 3c99428be8238302febeb54dd0290c8a6e90e3c7
