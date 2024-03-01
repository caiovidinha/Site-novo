const modalFood = document.querySelector('.modalFood')
const btnFood = document.querySelector('.btnFood')
const closeFood = document.querySelector('#closeFood')
const modalFit = document.querySelector('.modalFit')
const btnFit = document.querySelector('.btnFit')
const closeFit = document.querySelector('#closeFit')
const modalPet = document.querySelector('.modalPet')
const btnPet = document.querySelector('.btnPet')
const closePet = document.querySelector('#closePet')
const modalModa = document.querySelector('.modalModa')
const btnModa = document.querySelector('.btnModa')
const closeModa = document.querySelector('#closeModa')
const modalSec = document.querySelector('.modalSec')
const btnSec = document.querySelector('.btnSec')
const closeSec = document.querySelector('#closeSec')

btnFood.addEventListener('click', () => {
    modalFood.showModal()
})
closeFood.addEventListener('click', () => {
    modalFood.close()
})

btnFit.addEventListener('click', () => {
    modalFit.showModal()
})
closeFit.addEventListener('click', () => {
    modalFit.close()
})

btnPet.addEventListener('click', () => {
    modalPet.showModal()
})
closePet.addEventListener('click', () => {
    modalPet.close()
})

btnModa.addEventListener('click', () => {
    modalModa.showModal()
})
closeModa.addEventListener('click', () => {
    modalModa.close()
})

btnModa.addEventListener('click', () => {
    modalModa.showModal()
})
closeModa.addEventListener('click', () => {
    modalModa.close()
})

btnSec.addEventListener('click', () => {
    modalSec.showModal()
})
closeSec.addEventListener('click', () => {
    modalSec.close()
})