window.onload = function() {
// Função para Cadastrar Ônibus
const formFrota = document.getElementById('formFrota');

formFrota.addEventListener('submit', (e) => {
    e.preventDefault();

    const novoOnibus = {
        prefixo: document.getElementById('prefixo').value,
        placa: document.getElementById('placa').value,
        modelo: document.getElementById('modelo').value,
        motorizacao: document.getElementById('motorizacao').value,
        status: 'Disponível', // Status inicial padrão
        dataCadastro: new Date()
    };

    // Salva no Firestore na coleção "frota"
    db.collection("frota").doc(novoOnibus.prefixo).set(novoOnibus)
    .then(() => {
        alert("Ônibus " + novoOnibus.prefixo + " cadastrado com sucesso!");
        formFrota.reset();
    })
    .catch((error) => {
        console.error("Erro ao cadastrar: ", error);
    });
});

// Função para Listar a Frota em Tempo Real
function listarFrota() {
    db.collection("frota").onSnapshot((querySnapshot) => {
        const tabela = document.getElementById('tabelaFrota');
        tabela.innerHTML = ""; // Limpa a tabela antes de atualizar

        querySnapshot.forEach((doc) => {
            const bus = doc.data();
            tabela.innerHTML += `
                <tr class="hover:bg-gray-50">
                    <td class="p-2 border font-bold">${bus.prefixo}</td>
                    <td class="p-2 border">${bus.placa}</td>
                    <td class="p-2 border">${bus.modelo}</td>
                    <td class="p-2 border">
                        <span class="px-2 py-1 rounded text-white text-xs ${bus.status === 'Disponível' ? 'bg-green-500' : 'bg-yellow-500'}">
                            ${bus.status}
                        </span>
                    </td>
                </tr>
            `;
        });
    });
}

// Inicia a listagem ao carregar a página
listarFrota();
};
