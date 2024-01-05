const navlinks = document.querySelector('.left-bar')
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navlinks.classList.toggle('left-0')
    navlinks.classList.toggle('-left-[100%]')
}