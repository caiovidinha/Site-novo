//500
const selectMenu500 = document.querySelector('.select-menu500'),
        selectBtn500 = selectMenu500.querySelector('.select-btn500'),
        options500 = selectMenu500.querySelectorAll('.option500'),
        btnText500 = selectMenu500.querySelector('.btn-text500'),
        optionMenu500 = selectMenu500.querySelector('.options500'),
        arrow500 = selectMenu500.querySelector('.arrow500')

const price500 = document.querySelector('#price500')
const assinar500 = document.querySelector('#assinar500')

selectBtn500.addEventListener("click", () => {
    optionMenu500.classList.toggle("hidden")
    arrow500.classList.toggle("rotate-180")
})

options500.forEach(option => {
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector('.option-txt').innerText
        switch(selectedOption){
            case 'GreenFiber TV Light (+R$14,90)':
                price500.innerText = `R$ ${(+99.99 + +14.90).toFixed(2).toString().replace('.',',')}`
                assinar500.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Combo%20500%20MEGA%20%2B%20%20%20GreenFiber%20TV%20Light!"
                break

            case 'GreenFiber TV Plus (+R$21,90)':
                price500.innerText = `R$ ${(+99.99 + +21.90).toFixed(2).toString().replace('.',',')}`
                assinar500.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Combo%20500%20MEGA%20%2B%20%20%20GreenFiber%20TV%20Plus!"
                break

            case 'GreenFiber TV Plus + HBOMax (+R$50,90)':
                price500.innerText = `R$ ${(+99.99 + +50.90).toFixed(2).toString().replace('.',',')}`
                assinar500.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Combo%20500%20MEGA%20%2B%20%20%20GreenFiber%20TV%20Plus%20%20%2B%20HBO%20Max!"
                break
                
            default:
                price500.innerText = `R$ 99,90`
                assinar500.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20plano%20de%20500%20MEGA%20de%20internet%20com%20a%20Green%20Fiber!"
            break
        }
        optionMenu500.classList.add("hidden")
        btnText500.innerText = selectedOption
        
    })
    
})


//600
const selectMenu600 = document.querySelector('.select-menu600'),
        selectBtn600 = selectMenu600.querySelector('.select-btn600'),
        options600 = selectMenu600.querySelectorAll('.option600'),
        btnText600 = selectMenu600.querySelector('.btn-text600'),
        optionMenu600 = selectMenu600.querySelector('.options600'),
        arrow600 = selectMenu600.querySelector('.arrow600')

const price600 = document.querySelector('#price600')
const assinar600 = document.querySelector('#assinar600')

selectBtn600.addEventListener("click", () => {
    optionMenu600.classList.toggle("hidden")
    arrow600.classList.toggle("rotate-180")
})

options600.forEach(option => {
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector('.option-txt').innerText
        switch(selectedOption){
            case 'GreenFiber TV Light (+R$10,00)':
                price600.innerText = `R$ ${(+124.99 + +10.00).toFixed(2).toString().replace('.',',')}`
                assinar600.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Combo%20600%20MEGA%20%2B%20%20%20GreenFiber%20TV%20Light!"
                break

            case 'GreenFiber TV Plus (+R$16,00)':
                price600.innerText = `R$ ${(+124.99 + +16.00).toFixed(2).toString().replace('.',',')}`
                assinar600.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Combo%20600%20MEGA%20%2B%20%20%20GreenFiber%20TV%20Plus!"
                break

            case 'GreenFiber TV Plus + HBOMax (+R$46,00)':
                price600.innerText = `R$ ${(+124.99 + +46).toFixed(2).toString().replace('.',',')}`
                assinar600.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Combo%20600%20MEGA%20%2B%20%20%20GreenFiber%20TV%20Plus%20%20%2B%20HBO%20Max!"
                break

            default:
                price600.innerText = `R$ 124,99`
                assinar600.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20plano%20de%20600%20MEGA%20de%20internet%20com%20a%20Green%20Fiber!"
            break
        }
        optionMenu600.classList.add("hidden")
        btnText600.innerText = selectedOption
        
    })
    
})


//800
const selectMenu800 = document.querySelector('.select-menu800'),
        selectBtn800 = selectMenu800.querySelector('.select-btn800'),
        options800 = selectMenu800.querySelectorAll('.option800'),
        btnText800 = selectMenu800.querySelector('.btn-text800'),
        optionMenu800 = selectMenu800.querySelector('.options800'),
        arrow800 = selectMenu800.querySelector('.arrow800')

const price800 = document.querySelector('#price800')
const assinar800 = document.querySelector('#assinar800')

selectBtn800.addEventListener("click", () => {
    optionMenu800.classList.toggle("hidden")
    arrow800.classList.toggle("rotate-180")
})

options800.forEach(option => {
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector('.option-txt').innerText
        switch(selectedOption){
            case 'GreenFiber TV Light (+R$10,00)':
                price800.innerText = `R$ ${(+149.99 + +10.00).toFixed(2).toString().replace('.',',')}`
                assinar800.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Combo%20800%20MEGA%20%2B%20%20%20GreenFiber%20TV%20Light!"
                break

            case 'GreenFiber TV Plus (+R$16,00)':
                price800.innerText = `R$ ${(+149.99 + +16.00).toFixed(2).toString().replace('.',',')}`
                assinar800.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Combo%20800%20MEGA%20%2B%20%20%20GreenFiber%20TV%20Plus!"
                break

            case 'GreenFiber TV Plus + HBOMax (+R$46,00)':
                price800.innerText = `R$ ${(+149.99 + +46).toFixed(2).toString().replace('.',',')}`
                assinar800.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Combo%20800%20MEGA%20%2B%20%20%20GreenFiber%20TV%20Plus%20%20%2B%20HBO%20Max!"
                break

            default:
                price800.innerText = `R$ 149,99`
                assinar800.href = "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20plano%20de%20800%20MEGA%20de%20internet%20com%20a%20Green%20Fiber!"
            break
        }
        optionMenu800.classList.add("hidden")
        btnText800.innerText = selectedOption
        
    })
    
})
//modal500
const modalBtn = document.querySelector('#modalBtn')
const modal = document.querySelector("dialog")
const modalBtnClose = document.querySelector('#close')

modalBtn.onclick = function () {
    modal.showModal()
}

modalBtnClose.onclick = function () {
    modal.close()
}

//modal600
const modalBtn600 = document.querySelector('#modalBtn600')
const modal600 = document.querySelector(".modal600")
const modalBtnClose600 = document.querySelector('#close600')

modalBtn600.onclick = function () {
    modal600.showModal()
}

modalBtnClose600.onclick = function () {
    modal600.close()
}

//modal800
const modalBtn800 = document.querySelector('#modalBtn800')

modalBtn800.onclick = function () {
    modal600.showModal()
}


//toggle familia -> empresa
const toggle = document.querySelector('#toggle')
const toggleBtn = document.querySelector('#toggleBtn')
const toggleIcon = document.querySelector('#toggleIcon')
const textEmpresa = document.querySelector('#pEmp')
const textFamilia = document.querySelector('#pInd')
const itemsIndividuais = document.querySelectorAll('.ind')
const assinar500Emp = document.querySelector('#assinar500Emp')
const assinar600Emp = document.querySelector('#assinar600Emp')
const sobMedida = document.querySelector('#sobMedida')

const urlParams = new URLSearchParams(window.location.search);
const planType = urlParams.get('type')


const changeType = () => {
    toggle.classList.toggle("bg-green-700")
    toggle.classList.toggle("bg-gray-600")
    toggleBtn.classList.toggle("translate-x-8")
    textEmpresa.classList.toggle('hidden')
    textFamilia.classList.toggle('hidden')
    if(toggle.classList.contains("bg-gray-600")){
        toggleIcon.classList.add("fa-user-group")
        toggleIcon.classList.remove("fa-building")
        toggleIcon.classList.remove("text-green-700")
    }else {
        toggleIcon.classList.add("fa-building")
        toggleIcon.classList.add("text-green-700")
        toggleIcon.classList.remove("fa-user-group")
    }
    itemsIndividuais.forEach(item => {
        item.classList.toggle('hidden')
    })
    assinar500.classList.toggle('hidden')
    assinar600.classList.toggle('hidden')
    assinar500Emp.classList.toggle('hidden')
    assinar600Emp.classList.toggle('hidden')
    sobMedida.classList.toggle('hidden')
}

const checkEmpresa = () => {
    if(planType==="empresa") {
        changeType()
    }
}

toggleBtn.addEventListener("click", () => {
    changeType()
})

