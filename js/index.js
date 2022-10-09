const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')



function showMemu() {
    burger.onclick = function() {
        burger.classList.toggle('burgerActive')
        menu.classList.toggle('menuActive')


    }
}

showMemu()