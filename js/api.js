const getClientes = async () => {
    const url = 'http://localhost:3000/consulta'
    const res = await fetch(url)
    const clientList = await res.json()
    return clientList.lista
}

const getPessoa = async (login,cpf) => {
    const url = 'http://localhost:3000/login'
    const bodyJSON = {
        login: login,
        cpf: cpf
    }
    const headers = {
        "Content-Type": "application/json" 
    }
    const res = await fetch(url,{
        headers: headers,
        method:"POST",
        body: JSON.stringify(bodyJSON)
    })
    const response = await res.text()
    if(JSON.parse(response).error == 'login') return 'Erro de Login'
    else if(JSON.parse(response).error == 'cpf') return 'Erro de CPF'
    return JSON.parse(response)

}

const checkCEP = (lista,cep,num) => {
    for(let i = 0;i<lista.length;i++){
        let checkCEP = lista[i].cep.toString().replace('-','')
        if(cep == checkCEP && num == lista[i].numero) {
            return true
        }
    }
    return false
}   

