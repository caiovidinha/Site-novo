const urlAPI = 'https://www.greenfiber.net.br/api'

const timeout = ms => new Promise((resolve, reject) => 
  setTimeout(reject, ms, { existe: 'false' })
)

const getCEP = async (cep,num) => {
    const url = `${urlAPI}/consulta/${cep}/${num}`
    Promise.race([fetch(url), timeout(2000)])
    .then(res => {
        fetchURL(cep,num)
    })
    .catch(err => {
        const modalNOT = document.querySelector('.modalNOT')
        modalNOT.showModal()
  });
}

const check = async(cep,num) => {
    getCEP(cep,num)
} 

const fetchURL = async(cep,num) => {
    const modalOK = document.querySelector('.modalOK')
    const modalNOT = document.querySelector('.modalNOT')
    const url = `${urlAPI}/consulta/${cep}/${num}`
    const a = await fetch(url)
    const clientList = await a.json()
    console.log(clientList)
    if (clientList.existe == 'true') {
        modalOK.showModal()
    }else if(clientList.existe == 'false'){
        modalNOT.showModal()
    }
}
const submit = document.querySelector('.consulta')
submit.addEventListener('click', async (e)=>{
    const cepCampo = document.querySelector('#cep')
    const cep = cepCampo.value
    const numeroCampo = document.querySelector('#numero')
    const numero = numeroCampo.value
    const errorNum = document.querySelector('#errorNum')
    const errorCEP = document.querySelector('#errorCEP')
    e.preventDefault()
  if(cep.length === 8 && numero.length !== 0) {
    await check(cep,numero)
  }
  else {
    if (numero.length == 0) {
        numeroCampo.classList.add('border-red-700')
        errorNum.classList.remove('hidden')
      }
    if (cep.length < 8) {
        cepCampo.classList.add('border-red-700')
        errorCEP.classList.remove('hidden')
      }
    }
})
