$(document).ready(function(){
    $('.carousel').carousel();
  });

const carouselItems = document.querySelectorAll('.carousel-item')
const serviceTitle = document.querySelector('.serviceTitle')
const serviceDesc = document.querySelector('.serviceDesc')

const clickItem = (item) => {
  switch(item) {
    case 1:
      serviceTitle.innerText = "Green Fiber TV"
      serviceDesc.innerText = "Desfrute de uma experiência cinematográfica com a Green Fiber TV. Acesso ilimitado a filmes e séries através do nosso serviço de streaming. Escolha entre pacotes exclusivos que oferecem opções da Watch, Paramount+ e HBO Max, trazendo entretenimento para toda a família diretamente para a sua tela."
      break

    case 2:
      serviceTitle.innerText = "Hospedagem de Sites"
      serviceDesc.innerText = "Green Fiber TV"
      break
    
    case 3:
      serviceTitle.innerText = "Registro de Domínios"
      serviceDesc.innerText = "Green Fiber TV"
      break

    case 4:
      serviceTitle.innerText = "Cobertura Wireless (Site Survey)"
      serviceDesc.innerText = "Green Fiber TV"
      break

    case 5:
      serviceTitle.innerText = "Cabeamento Estruturado"
      serviceDesc.innerText = "Green Fiber TV"
      break
      
    case 6:
      serviceTitle.innerText = "Outsourcing de Equipamentos"
      serviceDesc.innerText = "Green Fiber TV"
      break

    case 7:
      serviceTitle.innerText = "Monitoramento e Diagnóstico"
      serviceDesc.innerText = "Green Fiber TV"
      break
      
  }
}