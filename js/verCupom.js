const btnVer = document.querySelector("#btnVer")

btnVer.addEventListener('click', async () => {
    let SHEET_ID = '1f0RoktNyd1Rx2b6H8yludZm54XFAR7DyoDUP565mpiY'
    let SHEET_TITLE_MOV = 'codigos'
    let SHEET_RANGE = 'A:H'
    let FULL_URL =
    'https://docs.google.com/spreadsheets/d/' +
    SHEET_ID +
    '/gviz/tq?sheet=' +
    SHEET_TITLE_MOV +
    '&range=' +
    SHEET_RANGE
    const codigo = document.querySelector(".codigo")
    const codigoInfo = document.querySelector(".codigoInfo")
    const cupomInfo = document.querySelector(".cupomInfo")
    const status = document.querySelector(".status")
    const nome = document.querySelector(".nome")
    const cpf = document.querySelector(".cpf")
    const parceiros = document.querySelector(".parceiros")
    const desconto = document.querySelector(".desconto")
    const criacao = document.querySelector(".criacao")
    const validade = document.querySelector(".validade")
    const res = await fetch(FULL_URL)
    const txt = await res.text()
    const data = JSON.parse(txt.substr(47).slice(0, -2))
    for (let i = 0; i < data.table.rows.length; i++) {
        if(codigo.value == data.table.rows[i].c[0].v) {
            let dataCria = data.table.rows[i].c[4].v
            dataCria = dataCria.replace("Date(").replace(")","").split(",")
            let anoCria = dataCria[0]
            let mesCria = dataCria[1].length == 1 ? '0'+ (+dataCria[1] + 1).toString() : dataCria[1]
            let diaCria = dataCria[2]
            const dataDeCriacao = diaCria + '/' + mesCria + '/' + anoCria.replace("undefined","")

            let dataVal = data.table.rows[i].c[5].v
            dataVal = dataVal.replace("Date(").replace(")","").split(",")
            let anoVal = dataVal[0]
            let mesVal = dataVal[1].length == 1 ? '0'+ (+dataVal[1] + 1).toString() : dataVal[1]
            let diaVal = dataVal[2]
            const dataDeValidade = diaVal + '/' + mesVal + '/' + anoVal.replace("undefined","")

            codigoInfo.innerText = data.table.rows[i].c[0].v
            status.innerText = data.table.rows[i].c[1].v
            nome.innerText = data.table.rows[i].c[2].v
            cpf.innerText = data.table.rows[i].c[3].v
            parceiros.innerText = data.table.rows[i].c[6].v
            desconto.innerText = data.table.rows[i].c[7].v
            criacao.innerText = dataDeCriacao
            validade.innerText = dataDeValidade
            cupomInfo.classList.remove("hidden")
            return
        }
    }
    const modalCupom = document.querySelector('.modalCupom')
    cupomInfo.classList.add("hidden")
    modalCupom.showModal()

})

const modalCupom = document.querySelector('.modalCupom')
const closeCupom = document.querySelector('#closeCupom')
closeCupom.addEventListener('click', () => {
    modalCupom.close()
})

const useBtn = document.querySelector('#btnUse')
useBtn.addEventListener('click', () => {
    const cupomInfo = document.querySelector(".cupomInfo")
    cupomInfo.classList.add("hidden")
    const codigo = document.querySelector(".codigo")
    const post = {
        codigo: codigo.value
      }
      
      fetch('https://hooks.zapier.com/hooks/catch/11052334/3g4grxu/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
      codigo.value = ''
})