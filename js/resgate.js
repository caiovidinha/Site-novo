const selectMenu = document.querySelector('.select-menu'),
        selectBtn = selectMenu.querySelector('.select-btn'),
        options = selectMenu.querySelectorAll('.option'),
        btnText = selectMenu.querySelector('.btn-text'),
        optionMenu = selectMenu.querySelector('.options'),
        arrow = selectMenu.querySelector('.arrow')

const price = document.querySelector('#price')
const assinar = document.querySelector('#assinar')

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("hidden")
    arrow.classList.toggle("rotate-180")
})

options.forEach(option => {
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector('.option-txt').innerText

        btnText.innerText = selectedOption
        
    })
    
})

const btnResg = document.querySelector('#btnResg')
btnResg.addEventListener('click',() => {
    const conteudo = document.querySelector('.container').innerHTML 
    
    let estilo = "<style>"
    estilo += ".cupom {width: 600px;height: 300px;position: relative;display: flex;flex-direction: row;background-repeat: no-repeat;background-size: contain;}"
    estilo += ".direita{background-color: rgb(255 251 235);border-top-left-radius: 0.75rem;border-bottom-left-radius: 0.75rem;width: 400px;position: relative;display: flex;flex-direction: column;justify-content: center;align-items: center;}"
    estilo += ".logo{width: 90px;}"
    estilo += ".codigo{font-size: 3rem;line-height: 1;text-align: center;font-weight:900;}"
    estilo += ".valido{text-align: center;padding-left: 1.25rem;padding-right: 1.25rem;}"
    estilo += ".validade{margin-top: 1rem;font-size: 10pt;color: gray;}"
    estilo += ".esquerda{display: flex;flex-direction: column;align-items: center;justify-content: center;border-top-right-radius: 0.75rem;border-bottom-right-radius: 0.75rem;border-left-width: 2px;	border-style: dotted;border-color: black;width: 200px;background-color: darkgreen;}"
    estilo += ".desconto{font-size:50px;padding-left: 1.5rem;padding-right: 1.5rem;line-height: 1; color: white; font-weight: 900;text-align: center;}"
    estilo += "</style>"

    const win = window.open('', '', 'height=700, width=700')

    win.document.write('<html><head>')
    win.document.write('<title>Cupom de desconto</title>')
    win.document.write(estilo)
    win.document.write('</head>')
    win.document.write('<body>')
    win.document.write(conteudo)
    win.document.write('</body></html>')

    win.print()


    let first = Math.random()       // Gera um valor randômico
                .toString(36)   // Utiliza a Base36
                .substr(-4)     // Captura os 4 últimos números
                .toUpperCase(); // Converte para maiúscula 
                
    let last = Math.floor((Math.random() * (9999 - 1000)) + 1000); // Gera um valor entre 999 e 10000


    console.log( `${first}-${last}` )
})