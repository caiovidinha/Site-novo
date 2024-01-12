
const getToken = async () => {
    const url = 'https://192.168.11.6/api/cliente/listagem'
    const client = 'Client_Id_8a5da52ed126447d359e70c05721a8aa'
    const secret = 'Client_Secret_9b6fa191371487f461fde8765426243ec98ce7c9'
    const b64credentials = btoa(`${client}:${secret}`)
    const res = await fetch(url, {
        headers: {
            Authorization: "Basic " + b64credentials
        }
    })
    const JWT = await res.text()
    return JWT
}

const getClientes = async () => {
    const url = 'https://192.168.11.6/api/cliente/listagem'
    const JWT = await getToken()
    const res = await fetch(url, {
        headers: {
            Authorization: "Bearer " + JWT
        }
    })
    const clientList = await res.json()
    return clientList.clientes
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

