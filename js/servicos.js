$(document).ready(function () {
    $(".carousel").carousel();
});

const carouselItems = document.querySelectorAll(".carousel-item");
const serviceTitle = document.querySelector(".serviceTitle");
const serviceDesc = document.querySelector(".serviceDesc");
const fundoServ = document.querySelector(".fundoServ");
const buttonServ = document.querySelector("#assinarServ");

setInterval(() => {
    const activeCarousel = document.querySelector(".active");
    if (activeCarousel.classList.contains("item2")) {
        serviceTitle.innerText = "Green Fiber TV";
        serviceDesc.innerText =
            "Desfrute de uma experiência cinematográfica com a Green Fiber TV. Acesso ilimitado a filmes e séries através do nosso serviço de streaming. Escolha entre pacotes exclusivos que oferecem opções da Watch, Paramount+ e HBO Max, trazendo entretenimento para toda a família diretamente para a sua tela.";
        fundoServ.style.cssText =
            "background-image: url(/img/bannerFundoServ1.png);";
        buttonServ.href =
            "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20a%20Green%20Fiber%20TV!";
    } else if (activeCarousel.classList.contains("item3")) {
        serviceTitle.innerText = "Hospedagem de Sites";
        serviceDesc.innerText =
            "Simplificamos a gestão do seu site. Tenha seu espaço online conosco sem complicações. Conte com uma infraestrutura confiável e suporte técnico para manter sua presença digital sempre ativa e acessível.";
        fundoServ.style.cssText =
            "background-image: url(/img/bannerFundoServ2.png);";
        buttonServ.href =
            "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20a%20Hospedages%20de%20Sites%20com%20a%20Green%20Fiber!";
    } else if (activeCarousel.classList.contains("item4")) {
        serviceTitle.innerText = "Registro de Domínios";
        serviceDesc.innerText =
            "Dê vida à sua identidade online. Registramos e gerenciamos seu domínio na internet para assegurar sua presença digital, garantindo a representação da sua marca de forma confiável e acessível para seus clientes.";
        fundoServ.style.cssText =
            "background-image: url(/img/bannerFundoServ3.png);";
        buttonServ.href =
            "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Registro%20de%20Dom%C3%ADnio%20com%20a%20Green%20Fiber!";
    } else if (activeCarousel.classList.contains("item5")) {
        serviceTitle.innerText = "Cobertura Wireless (Site Survey)";
        serviceDesc.innerText =
            "Maximize sua cobertura wireless. Criamos projetos personalizados para otimizar sua rede, garantindo uma conexão estável e de qualidade em toda a sua área de atuação.";
        fundoServ.style.cssText =
            "background-image: url(/img/bannerFundoServ4.png);";
        buttonServ.href =
            "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Projeto%20de%20Cobertura%20Wireless%20com%20a%20Green%20Fiber!";
    } else if (activeCarousel.classList.contains("item6")) {
        serviceTitle.innerText = "Cabeamento Estruturado";
        serviceDesc.innerText =
            "Infraestrutura sólida para seu negócio. Oferecemos projetos de cabeamento de acordo com suas necessidades, seguindo padrões e normas internacionais, garantindo não apenas uma conexão confiável, mas também a segurança e qualidade necessárias para sua empresa.";
        fundoServ.style.cssText =
            "background-image: url(/img/bannerFundoServ5.png);";
        buttonServ.href =
            "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Projeto%20de%20Cabeamento%20Estruturado%20com%20a%20Green%20Fiber!";
    } else if (activeCarousel.classList.contains("item7")) {
        serviceTitle.innerText = "Outsourcing de Equipamentos";
        serviceDesc.innerText =
            "Solução sem investimento inicial. Não deseja investir em equipamentos de rede? Nossa área comercial oferece a opção de colocação dos equipamentos por uma taxa mensal, além do suporte necessário para garantir o funcionamento contínuo do seu ambiente de trabalho.";
        fundoServ.style.cssText =
            "background-image: url(/img/bannerFundoServ6.png);";
        buttonServ.href =
            "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20realizar%20Outsourcing%20de%20Equipamento%20com%20a%20Green%20Fiber!";
    } else if (activeCarousel.classList.contains("item8")) {
        serviceTitle.innerText = "Monitoramento e Diagnóstico";
        serviceDesc.innerText =
            "Prevenção é a chave para o seu negócio. Monitoramos ativamente seus equipamentos, desde computadores e impressoras até telefonia, proporcionando previsibilidade ao identificar e notificar sobre falhas iminentes. Isso otimiza o tempo de resposta da sua equipe, tornando-a mais proativa e eficiente.";
        fundoServ.style.cssText =
            "background-image: url(/img/bannerFundoServ7.png);";
        buttonServ.href =
            "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20contratar%20o%20Monitoramento%20e%20diagn%C3%B3stico%20dos%20meus%20equipamentos%20com%20a%20Green%20Fiber!";
    } else if (activeCarousel.classList.contains("item9")) {
        serviceTitle.innerText = "Green Fiber Max";
        serviceDesc.innerText =
            "Conectividade sem limites. Desenvolvemos projetos personalizados para maximizar a cobertura do seu Wi-Fi, garantindo que todos os cantos da sua casa tenham acesso à internet de alta velocidade. Elimine pontos cegos e desfrute de uma conexão estável em cada ambiente, proporcionando uma experiência online perfeita para toda a sua família.";
        fundoServ.style.cssText =
            "background-image: url(/img/bannerFundoServ8.png);";
        buttonServ.href = "/planosMax";
    } else if (activeCarousel.classList.contains("item1")) {
        serviceTitle.innerText = "Câmeras de Segurança";
        serviceDesc.innerText =
            "Proteção além da conexão. Oferecemos serviços profissionais de instalação de câmeras de segurança para fortalecer a segurança do seu espaço. Embora não realizemos o monitoramento de imagens, garantimos a configuração eficiente do sistema, proporcionando tranquilidade e controle sobre a segurança do seu ambiente residencial ou comercial.Realizamos projeto de acordo com a sua necessidade e com foco no maior nível de segurança.";
        fundoServ.style.cssText =
            "background-image: url(/img/bannerFundoServ9.png);";
        buttonServ.href =
            "https://api.whatsapp.com/send/?phone=5521998629274&text=Ol%C3%A1!%20Tenho%20interesse%20em%20orçar%20o%20Projeto%20de%20Câmeras%20de%20Segurança%20com%20a%20Green%20Fiber!";
        buttonServ.innerText = "Solicite um orçamento";
    }
}, 200);
