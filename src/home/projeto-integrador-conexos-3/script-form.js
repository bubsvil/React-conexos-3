document.addEventListener("DOMContentLoaded", function(){
    var formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("Teste");



// function enviarFormulario() {
    // Coleta os valores do formulário
   /*era tudo const ex: const nome, passei para var */

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value
    var cpf = document.getElementById("cpf").value
    var plano = document.getElementById("plano").value
    var horario = document.getElementById("horario").value
    var status = "Pendente"

    // Crie um objeto com os dados do formulário
    var formData = {
      nome: nome,
      email: email,
      telefone: telefone,
      cpf: cpf,
      plano: plano,
      horario: horario,
      status: status
    };
//}  
    // console.table{(nome,cpf,telefone,email)}
    
    
    //Faça uma solicitação POST Axios para o servidor
    axios.post('http://localhost:3000/order', formData)
    .then(function (response) {
      console.log("Resposta da API:", response.data);
    })
    .catch(function (error) {
      console.error("Erro na solicitação:", error);
    });
});
axios.post();   
});






    // var nome = document.querySelector('#nome').value
    // var cpf = document.querySelector('#cpf').value
    // var telefone = document.querySelector('#telefone').value
    // var email = document.querySelector('#email').value
    // var plano = document.querySelector('#plano').value
    // var horario = document.querySelector('#horario').value

    // var formData = {
    //     nome:nome,
    //     cpf:cpf,
    //     telefone:telefone,
    //     email:email,
    //     plano: plano,
    //     horario: horario
    // };