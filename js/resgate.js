const selectMenu = document.querySelector('.select-menu'),
        selectBtn = selectMenu.querySelector('.select-btn'),
        options = selectMenu.querySelectorAll('.option'),
        btnText = selectMenu.querySelector('.btn-text'),
        optionMenu = selectMenu.querySelector('.options'),
        arrow = selectMenu.querySelector('.arrow')
const errorOptions = document.querySelector('#errorOptions')


selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("hidden")
    arrow.classList.toggle("rotate-180")
})

options.forEach(option => {
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector('.option-txt').innerText
        errorOptions.classList.add('hidden')
        selectBtn.classList.add('bg-white')
        selectBtn.classList.remove('bg-red-500')
        optionMenu.classList.add("hidden")
        btnText.innerText = selectedOption
        
    })
    
})

const btnResg = document.querySelector('#btnResg')
const modalLogin = document.querySelector('.modalLogin')
const btnCloseLogin = document.querySelector('#closeLogin')
btnCloseLogin.addEventListener('click', () => {
    modalLogin.close()
})

const modalCPF = document.querySelector('.modalCPF')
const btnCloseCPF = document.querySelector('#closeCPF')
btnCloseCPF.addEventListener('click', () => {
    modalCPF.close()
})

btnResg.addEventListener('click',async () => {
    const login = document.querySelector('.login').value
    const btnText = selectMenu.querySelector('.btn-text').innerText
    const cpf = document.querySelector('.cpf').value.replace('.','').replace('-','')
    const pessoa = await getPessoa(login,cpf)
    const modalLogin = document.querySelector('.modalLogin')
    const modalCPF = document.querySelector('.modalCPF')
    
    if (pessoa == 'Erro de Login') {
        modalLogin.showModal()
        return
    }
    if (pessoa == 'Erro de CPF') {
        modalCPF.showModal()
        return
    }
    if(btnText == 'Escolha uma opção') {
        errorOptions.classList.remove('hidden')
        selectBtn.classList.add('bg-red-500')
        selectBtn.classList.remove('bg-white')
        return
    }
    pessoa.cpf = cpf
    console.log(pessoa)
    console.log(btnText)

    const img = document.querySelector('.logoCupom')
    const codigo = document.querySelector('.codigo')
    const descricao = document.querySelector('.valido')
    const validade = document.querySelector('.validade')
    const desconto = document.querySelector('.desconto')
    const nomeCupom = document.querySelector('.nomeCupom')
    const cpfCupom = document.querySelector('.cpfCupom')

    let first = Math.random()       // Gera um valor randômico
                .toString(36)   // Utiliza a Base36
                .substr(-4)     // Captura os 4 últimos números
                .toUpperCase(); // Converte para maiúscula 
                
    let last = Math.floor((Math.random() * (9999 - 1000)) + 1000); // Gera um valor entre 999 e 10000
    //TODO
    // img.src = adicionar switch
    // codigo.innerText = validar se ja existe
    // descricao.innerText = adicionar switch
    // validade.innerText = let data + 30 dias
    // desconto.innerText = adicionar switch
    // nomeCupom.innerText = pessoa.nome
    // cpfCupom.innerText = pessoa.cpf

})