document.addEventListener('DOMContentLoaded', () => {
    var openModalButton = document.getElementById('open-modal-button');
    var statusModal = new bootstrap.Modal(document.getElementById('statusModal'));
    var statusContent = document.getElementById('status-content');
    var codigoSolInput = document.getElementById('codigoSol');

    openModalButton.addEventListener('click', () => {
        var codigoSol = codigoSolInput.value;

        if (!codigoSol) {
            alert('Por favor, insira o código do pedido.');
            return;
        }

        axios.get(`http://localhost:3000/order/${codigoSol}`)
            .then(response => {
                var status = response.data.status;

                statusContent.textContent = `Status do pedido ${codigoSol}: ${status}`;
                statusModal.show();
            })
            .catch(error => {
                console.error('Erro na requisição GET:', error);
            });
    });
});
