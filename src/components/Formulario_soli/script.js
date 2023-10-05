
function EnviarFormulario() {
   
const button = document.querySelector('#submitform')

button.addEventListener("click", function(event) {
    event.preventDefault()

    const nome = document.querySelector('#nome').value
    const cpf = document.querySelector('#cpf').value
    const telefone = document.querySelector('#telefone').value
    const email = document.querySelector('#email').value
    // const plano = document.querySelector('#plano').value
    // const horario = document.querySelector('#horario').value

    console.table(nome,cpf,telefone,email)

});
}

    export default function EnviarFormulario();