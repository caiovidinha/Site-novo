function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('cep').onkeyup = function(){
  mascara( this, mtel );
}
}


const submit = document.querySelector('button')

submit.addEventListener('click', (e)=>{
  const cep = document.querySelector('#cep').value
  const numero = document.querySelector('#numero').value
  e.preventDefault()
  console.log(cep + ',' + numero)
  if(cep.length === 8 && numero.length !== 0) console.log('sim')
  else console.log('nao')
})






$(document).ready(function () {
    
    // Desabilita todos os campos, exceto o CEP
    $('#endereco, #numero, #bairro, #estado, #cidade').prop('disabled', true);
    // Consulta o CEP e preenche os campos de endereço
    $('#cep').blur(function () {
      $('#cep').removeClass('border-red-700')
      $('#errorCEP').addClass('hidden')
      $.getJSON('https://viacep.com.br/ws/' + this.value + '/json/', function (data) {
        if (!data.erro) {
          $('#endereco').val(data.logradouro);
          $('#bairro').val(data.bairro);
          $('#cidade').val(data.localidade);
          $('#estado').val(data.uf);

          // Habilita os campos restantes
          $('#endereco, #numero, #bairro, #estado, #cidade').prop('disabled', false);
        } else {
          $('#cep').addClass('border-red-700')
          $('#errorCEP').removeClass('hidden')
        }
      });
    });
 });