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
