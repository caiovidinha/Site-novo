const btn = document.querySelector('.btnDown')
btn.addEventListener('click', () => {
    const screenshotTarget = document.querySelector('.cupom')

    html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL("image/png")
        var anchor = document.createElement("a")
        anchor.setAttribute("href", base64image)
        anchor.setAttribute("download","cupom.png")
        anchor.click()
        anchor.remove()
    }
    )
}
)
const img = document.querySelector('.logoCupom')
    const codigo = document.querySelector('.codigo')
    const descricao = document.querySelector('.valido')
    const validade = document.querySelector('.validade')
    const desconto = document.querySelector('.desconto')
    console.log(img+codigo+descricao+validade+desconto)
