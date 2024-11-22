window.addEventListener('load', function() {
    const alertMensagem = document.querySelector('.alert');

    setTimeout(function() {
        alertMensagem.remove();
    }, 3900);
});


const novaTrans = document.getElementById('novaTransacaoBtn')
const modal = document.getElementById('modalNovaTransacao')
const closeBtn = document.getElementById('closeModal')

const modalEdit = document.getElementById('modalEditaTransacao')
const closeEdit = document.getElementById('closeModalEdita')

novaTrans.addEventListener('click', () => {
    modal.style.display = 'flex';
})
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

closeEdit.addEventListener('click', () => {
    modalEdit.style.display = 'none'  
})
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

document.getElementById('saidaBtn').addEventListener('click', function(event) {
    event.preventDefault();  // Impede o envio imediato
    document.getElementById('transacaoForm').action = "/nova_transacao/saida";  // Define a ação para 'Saída'
    document.getElementById('transacaoForm').submit();  // Submete o formulário
});

document.getElementById('entradaBtn').addEventListener('click', function(event) {
    event.preventDefault();  // Impede o envio imediato
    document.getElementById('transacaoForm').action = "/nova_transacao/entrada";  // Define a ação para 'Entrada'
    document.getElementById('transacaoForm').submit();  // Submete o formulário
});



function selectListaDespesa() {
    const listaReceita = document.getElementById('lista-receita');
    const listaDespesa = document.getElementById('lista-despesa');

    const divSelectReceita = document.getElementById('div-select-receita')
    const divSelectDespesa = document.getElementById('div-select-despesa')

    if (window.getComputedStyle(listaDespesa).display == 'none') {
        listaDespesa.style.display = 'block';
        listaReceita.style.display = 'none';
        divSelectReceita.style.backgroundColor = '#302F36'; // Cinza
        divSelectDespesa.style.backgroundColor = '#ff546b'; // Vermelho
    }
}

function selectListaReceita() {
    const listaReceita = document.getElementById('lista-receita');
    const listaDespesa = document.getElementById('lista-despesa');

    const divSelectReceita = document.getElementById('div-select-receita')
    const divSelectDespesa = document.getElementById('div-select-despesa')

    if (window.getComputedStyle(listaReceita).display == 'none') {
        listaDespesa.style.display = 'none';
        listaReceita.style.display = 'block';
        divSelectReceita.style.backgroundColor = '#00B27E';
        divSelectDespesa.style.backgroundColor = '#302F36';
    }
}
