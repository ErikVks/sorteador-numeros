let quantidade;
let min;
let max;
let lista = [];


function exibicaoDeTexto(seletor, texto) {
    let campo = document.getElementById(seletor);
    campo.innerHTML = `<label class="texto__paragrafo">${texto}</label>`;
}

function buscarParametros(){
    quantidade = parseInt(document.getElementById('quantidade').value);
    min = parseInt(document.getElementById('de').value);
    max = parseInt(document.getElementById('ate').value);

    if (isNaN(min) || isNaN(max) || isNaN(quantidade) || min < 1 || max < 1 || quantidade < 1){
        exibicaoDeTexto('resultado', 'Digite um número inteiro maior que 0.');
        return false;
    } else {
        if (min >= max){
            exibicaoDeTexto('resultado', 'O mínimo da lista deve ser menor que o máximo.')
            return false;
        }else {
            if(quantidade > (max - min)){
                exibicaoDeTexto('resultado', 'A quantidade sorteios não pode ser maior que a lista de números.');
                return false;
            }
        }
    }
    return true;
}

function gerarLista(){
    lista = [];
    for (let i = min ; i < max + 1 ; i++){
        lista.push(i);
    }
}

function sortear(){
    if (!buscarParametros()) return;
    gerarLista();
    let sorteados = [];
    for (let i = 0; i < quantidade; i++){
        let numero = lista[parseInt(Math.random() * lista.length)];
        while (sorteados.includes(numero)){
            numero = lista[parseInt(Math.random() * lista.length)];
        }
        sorteados.push(numero);
    }
    exibicaoDeTexto('resultado',`Lista dos números sorteados: ${sorteados}`)
}