const navlinks = document.querySelector('.nav-links')
const selectMenu = document.querySelector('.select-menu'),
        selectBtn = selectMenu.querySelector('.select-btn'),
        options = selectMenu.querySelectorAll('.option'),
        btnText = selectMenu.querySelector('.btn-text')

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active")
})

options.forEach(option => {
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector('.option-txt').innerText
        btnText.innerText = selectedOption
    })
    
})


function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navlinks.classList.toggle('left-0')
    navlinks.classList.toggle('-left-[100%]')
}