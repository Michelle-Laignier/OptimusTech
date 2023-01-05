const icone = document.querySelector('.menu_icone')
const menu = document.querySelector('.menu_lateral')

icone.addEventListener('click', () => {
    menu.classList.toggle('menu_lateral-ativo')
})