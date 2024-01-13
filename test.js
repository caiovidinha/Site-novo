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

function dataFormatada(data){

  let dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
  return diaF+"/"+mesF+"/"+anoF;
}

const btnResg = document.querySelector('#btnResg')

btnResg.addEventListener('click', () => {

  const cpf = document.querySelector('.cpf').value.replaceAll('.','').replaceAll('-','')
  const btnText = selectMenu.querySelector('.btn-text').innerText

  const pessoa = {
    nome: 'Caio',
    cpf: cpf
  }

  let img,codigo,descricao,criacao,validade,desconto,nomeCupom,cpfCupom
  nomeCupom = pessoa.nome
  cpfCupom = pessoa.cpf
  criacao = new Date()
  validade = new Date()
  validade.setDate(criacao.getDate() + 30)
  criacao = dataFormatada(criacao)
  validade = dataFormatada(validade)


  let first = Math.random()       // Gera um valor randômico
  .toString(36)   // Utiliza a Base36
  .substr(-4)     // Captura os 4 últimos números
  .toUpperCase() // Converte para maiúscula 
  let last = Math.floor((Math.random() * (9999 - 1000)) + 1000)
  codigo = `${first}${last}`

  //TODO

  
  switch(btnText) {
    case 'Bem Me Quer (5% OFF)':
      img = 'img/logos_clube/bemequer.png'
      descricao = 'Válido para todos os produtos, exceto os que estão em promoção.'
      desconto = '5% OFF'
      break

    case 'BF Tosa e Banho (10% OFF)':
      img = 'img/logos_clube/bf.png'
      descricao = 'Válido para rações e remédios de segunda a sábado. Para Tosa higienica e hidratação somente terças e quartas.'
      desconto = '10% OFF'
      break

    case 'CSA Corretora de Seguros (10% OFF)':
      img = 'img/logos_clube/csa.png'
      descricao = 'Válido para o primeiro boleto do plano de saúde. Para planos individuais e empresariais.'
      desconto = '10% OFF'
      break

    case 'Evolution Fit Studio (5% OFF)':
      img = 'img/logos_clube/evolution.png'
      descricao = 'Válido para Spinning, Aulas em grupo ou individuais e Personal Trainer. Aplicado na mensalidade.'
      desconto = '5% OFF'
      break

    case 'CT Nação de Lutas (10% OFF)':
      img = 'img/logos_clube/nacao.png'
      descricao = 'Válido para Jiu-jitsu segunda quarta e sexta, MMA De segunda a sexta e o Box. Aplicado na mensalidade.'
      desconto = '10% OFF'
      break

    case 'Niterói Barbecue (5% OFF)':
      img = 'img/logos_clube/bbq.png'
      descricao = 'oi'
      desconto = '10% OFF'
      break

    case 'Pilates Pendotiba (10% OFF)':
      img = 'img/logos_clube/pilates.png'
      descricao = 'Válido para pilates. Desconto aplicado na mensalidade.'
      desconto = '10% OFF'
      break

    case 'Salgados Vó Regina (10% OFF)':
      img = 'img/logos_clube/regina.png'
      descricao = 'Válido para todos os pedidos.'
      desconto = '10% OFF'
      break

  }

  const win = window.open('', '', 'height=700, width=700')

win.document.write(`<!DOCTYPE html>`)
win.document.write(`<html lang="pt">`)
win.document.write(`<head>`)
win.document.write(`<meta charset="UTF-8">`)
win.document.write(`<meta name="viewport" content="width=device-width, initial-scale=1.0">`)
win.document.write(`<link rel="preconnect" href="https://fonts.googleapis.com">`)
win.document.write(`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`)
win.document.write(`<link rel="icon" type="image/x-icon" href="/img/logo-gf.png">`)
win.document.write(`<link rel="stylesheet" href="css/cupom.css">`)
win.document.write(`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">`)
win.document.write(`<title>Cupom</title>`)
win.document.write(`<script src="https://cdn.tailwindcss.com"></script>`)
win.document.write(`<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`)
win.document.write(`<script src="https://kit.fontawesome.com/3b4cbac4e0.js" crossorigin="anonymous"></script>`)
win.document.write(`</head>`)
win.document.write(`<body class="h-screen flex items-center justify-center flex-col">`)
win.document.write(`<div class="container flex flex-col items-center justify-center">`)
win.document.write(`<div class="cupom flex items-center justify-center">`)
win.document.write(`<div class="direita rounded-l-xl bg-amber-50 w-[70%] h-72 flex flex-col items-center">`)
win.document.write(`<img src="/${img}" class="logoCupom w-20 mt-2" alt="">`)
win.document.write(`<h1 class="codigo font-black text-4xl">${codigo}</h1>`)
win.document.write(`<p class="valido text-center text-sm w-[90%]">${descricao}</p>`)
win.document.write(`<div class="bg-white flex flex-col justify-center items-center p-2 rounded-xl mt-1">`)
win.document.write(`<p class="text-gray-600 text-sm">Cupom pessoal e intransferível de:</p>`)
win.document.write(`<p class="text-gray-600 text-sm mt-1 font-bold"><span class="nomeCupom">${nomeCupom}</span> | CPF: <span class="cpfCupom">${cpfCupom}</span></p>`)
win.document.write(`<p class="validade text-xs text-gray-600">Válido somente até ${validade}.</p>`)
win.document.write(`</div>`)
win.document.write(`<p class="text-gray-600 text-[7pt] my-2 md:my-1 text-center w-[90%] md:w-[70%]">A Green Fiber se isenta de qualquer problema decorrente dos serviços oferecidos pelos parceiros.</p>`)
win.document.write(`</div>`)
win.document.write(`<div class="esquerda rounded-r-xl bg-green-900 flex items-center w-[30%] h-72">`)
win.document.write(`<h1 class="desconto font-black text-5xl text-white text-center">${desconto}</h1>`)
win.document.write(`</div>`)
win.document.write(`</div>`)
win.document.write(`<button class="btnDown w-48 bg-gray-200 hover:bg-gray-400 rounded-md font-semibold text-md p-3 mt-10">Baixar seu cupom!</button>`)
win.document.write(`</div>`)
win.document.write(`<script src="js/resgate.js"></script>`)
win.document.write(`<script src="js/pdf.js"></script>`)
win.document.write(`<script src="test.js"></script>`)
win.document.write(`</body>`)
win.document.write(`</html>`)

})