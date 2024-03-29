const formData = {}
const nome = document.querySelector('.nomeForm')
const tel = document.querySelector('.telForm')
const email = document.querySelector('.emailForm')
const cargo = document.querySelector('.cargoForm')
const doc = document.querySelector('.docForm')
const btn = document.querySelector('.btn')
const form = document.querySelector('.formDiv')


btn.addEventListener('click', async () =>  {
    formData.nome = nome.value
    formData.telefone = tel.value
    formData.email = email.value
    formData.cargo = cargo.value
    formData.doc = doc.value

    if(formData.nome && formData.telefone && formData.email && formData.cargo && formData.doc) {
        const url = 'https://hooks.zapier.com/hooks/catch/11052334/3g4qune/'
        btn.innerText = 'Enviando...'
        await fetch(url,{
            method: 'POST',
            mode:'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        form.innerHTML = "<h1 class='flex items-center gap-3'><img src='img/check.png' class='w-5 h-5'>Indicação Enviada!</h1>"
    }else {
        form.innerHTML = "<div class='flex flex-col justify-center items-center'><h1 class='flex items-center gap-3'><img src='img/notcheck.png' class='w-5 h-5'>Preencha todos os campos!</h1><a href='/indique' class='text-center bg-red-500 hover:bg-red-700 p-3 rounded-lg text-white w-full mt-3'>Tentar novamente</a></div>"
    }
})

