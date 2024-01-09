function onlyNumber(evt) {
 
    // Only ASCII character in that range allowed
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

$(document).ready(function () {
    
    // Desabilita todos os campos, exceto o CEP
    $('#endereco, #numero, #bairro, #estado, #cidade').prop('disabled', true);
    // Consulta o CEP e preenche os campos de endereço
    $('#cep').blur(function () {
      $.getJSON('https://viacep.com.br/ws/' + this.value + '/json/', function (data) {
        if (!data.erro) {
          $('#endereco').val(data.logradouro);
          $('#bairro').val(data.bairro);
          $('#cidade').val(data.localidade);
          $('#estado').val(data.uf);

          // Habilita os campos restantes
          $('#endereco, #numero, #bairro, #estado, #cidade').prop('disabled', false);
        } else {
          alert('CEP não encontrado.');
        }
      });
    });
 });