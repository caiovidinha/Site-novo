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

btnResg.addEventListener('click', () => {

  const cpf = document.querySelector('.cpf').value.replaceAll('.','').replaceAll('-','')
  const login = document.querySelector('.login').value
  const btnText = selectMenu.querySelector('.btn-text').innerText

  const pessoa = {
    nome: 'Caio',
    cpf: cpf
  }

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
  .toUpperCase() // Converte para maiúscula 

  let last = Math.floor((Math.random() * (9999 - 1000)) + 1000)

  //TODO

  
  switch(btnText) {
    case 'Bem Me Quer (5% OFF)':
      img.src = 'img/logos_clube/bemequer.png'
      descricao.innerText = 'oi'
      desconto.innerText = '10% OFF'
      break

    case 'BF Tosa e Banho (10% OFF)':
      img.src = 'img/logos_clube/bf.png'
      descricao.innerText = 'oi'
      desconto.innerText = '10% OFF'
      break

    case 'CSA Corretora de Seguros (10% OFF)':
      img.src = 'img/logos_clube/csa.png'
      descricao.innerText = 'oi'
      desconto.innerText = '10% OFF'
      break

    case 'Evolution Fit Studio (5% OFF)':
      img.src = 'img/logos_clube/evolution.png'
      descricao.innerText = 'oi'
      desconto.innerText = '10% OFF'
      break

    case 'CT Nação de Lutas (10% OFF)':
      img.src = 'img/logos_clube/nacao.png'
      descricao.innerText = 'oi'
      desconto.innerText = '10% OFF'
      break

    case 'Niterói Barbecue (5% OFF)':
      img.src = 'img/logos_clube/bbq.png'
      descricao.innerText = 'oi'
      desconto.innerText = '10% OFF'
      break

    case 'Pilates Pendotiba (10% OFF)':
      img.src = 'img/logos_clube/pilates.png'
      descricao.innerText = 'oi'
      desconto.innerText = '10% OFF'
      break

    case 'Salgados Vó Regina (10% OFF)':
      img.src = 'img/logos_clube/regina.png'
      descricao.innerText = 'oi'
      desconto.innerText = '10% OFF'
      break

  }

  // codigo.innerText = validar se ja existe
  // descricao.innerText = adicionar switch
  // validade.innerText = let data + 30 dias
  // desconto.innerText = adicionar switch
  // nomeCupom.innerText = pessoa.nome
  // cpfCupom.innerText = pessoa.cpf

  //REDIRECT
  // var anchor = document.createElement("a")
  // anchor.setAttribute("href", "/pdf.html")
  // anchor.setAttribute("targer","_blank")
  // anchor.click()
  // anchor.remove()

})