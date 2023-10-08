document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submitbtn");
    var codigoSolInput = document.getElementById("codigoSol");

    submitButton.addEventListener("click", function () {
        var codigoSol = codigoSolInput.value;

        // Faça uma solicitação GET Axios para obter o status com base no código inserido
        axios.get('http://localhost:3000/order/' + codigoSol)
            .then(function (response) {
                // Lide com a resposta da API (por exemplo, exiba o status)
                console.log("Status da solicitação:", response.data.status);
            })
            .catch(function (error) {
                // Lide com erros (por exemplo, exiba uma mensagem de erro)
                console.error("Erro na solicitação", error);
            });
    });
});

  
  