const navlinks = document.querySelector('.nav-links')
// function onToggleMenu(e){
//     e.name = e.name === 'menu' ? 'close' : 'menu'
//     navlinks.classList.toggle('-top-[62%]')
//     navlinks.classList.toggle('top-[13%]')
// }
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navlinks.classList.toggle('left-0')
    navlinks.classList.toggle('-left-[100%]')
}