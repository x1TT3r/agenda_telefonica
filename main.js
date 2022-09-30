const form = document.getElementById('add-numero');
const nomeContato =[]
const numeroTelefone =[]

let linhas ='';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone= document.getElementById('numero-telefone');

    if(nomeContato.includes(inputNomeContato.value)) {
        alert(`O Nome :${inputNomeContato.value} já esta na Lista de Contatos`)
    } else {
        nomeContato.push(inputNomeContato.value);

            let linha ='<tr>';
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputNumeroTelefone.value}</td>`;
            linha += '</tr>'; 

            linhas += linha;
    }

    inputNomeContato.value ='';
    inputNumeroTelefone.value ='';

}
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

const tel = document.getElementById('numero-telefone');

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value));
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value));
const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor;
}