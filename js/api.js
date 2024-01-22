const getCEP = async (cep,num) => {
    const url = `http://localhost:3333/consulta/${cep}/${num}`
    const res = await fetch(url)
    const clientList = await res.json()
    return clientList.existe
}

const getPessoa = async (login,cpf) => {
    const url = `http://localhost:3333/login/${login}/${cpf}`
    const res = await fetch(url)
    const response = await res.text()
    if(JSON.parse(response).error == 'cpf') return 'Erro de CPF'
    if(JSON.parse(response).error == 'login') return 'Erro de Login'
    return JSON.parse(response)

}
