const urlAPI = 'https://www.greenfiber.net.br/api'

const getCEP = async (cep,num) => {
    const url = `${urlAPI}/consulta/${cep}/${num}`
    const res = await fetch(url)
    const clientList = await res.json()
    if(clientList) return clientList.existe
    else return 'false'
}

const getPessoa = async (login,cpf) => {
    const url = `${urlAPI}/login/${login}/${cpf}`
    const res = await fetch(url)
    const response = await res.text()
    if(JSON.parse(response).error == 'cpf') return 'Erro de CPF'
    if(JSON.parse(response).error == 'login') return 'Erro de Login'
    return JSON.parse(response)

}
