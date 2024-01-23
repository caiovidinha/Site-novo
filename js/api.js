const getCEP = async (cep,num) => {
    const url = `https://www.greenfiber.net.br/api/consulta/${cep}/${num}`
    const res = await fetch(url)
    const clientList = await res.json()
    return clientList.existe
}

const getPessoa = async (login,cpf) => {
    const url = `https://www.greenfiber.net.br/api/login/${login}/${cpf}`
    const res = await fetch(url)
    const response = await res.text()
    if(JSON.parse(response).error == 'cpf') return 'Erro de CPF'
    if(JSON.parse(response).error == 'login') return 'Erro de Login'
    return JSON.parse(response)

}
