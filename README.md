# Sorteador de Números

Aplicação que sorteia uma quantidade escolhida de números dentro de um intervalo definido pelo usuário, sem repetir nenhum valor. Foi feita como exercício de prática de JavaScript proposto pela [Alura](https://www.alura.com.br).

O `index.html` e o `style.css` foram disponibilizados pela Alura já prontos, junto com as imagens. Todo o `app.js` foi programado por mim do zero, e é nele que está a lógica de validação, geração do intervalo e sorteio. A proposta do exercício é exatamente essa: receber a interface montada e resolver o comportamento da aplicação sozinho.

## Acesse o projeto

A aplicação está publicada em duas plataformas diferentes e pode ser acessada por qualquer um dos links abaixo, já que ambos exibem a mesma versão.

**GitHub Pages:** [erikvks.github.io/sorteador-numeros](https://erikvks.github.io/sorteador-numeros/)

**Vercel:** [sorteador-numeros-ashen.vercel.app](https://sorteador-numeros-ashen.vercel.app)

## Como funciona

O usuário informa quantos números quer sortear e o intervalo em que o sorteio deve acontecer, preenchendo os campos de número inicial e final. Ao clicar em "Sortear", a aplicação valida os dados, monta a lista completa de números do intervalo e escolhe aleatoriamente a quantidade pedida, garantindo que nenhum valor se repita. O resultado aparece logo abaixo dos botões e o botão "Reiniciar" é habilitado, permitindo limpar os campos e começar um novo sorteio.

## Estrutura de arquivos

```
sorteador-numeros/
├── index.html
├── style.css
├── app.js
└── img/
    ├── ia.png
    ├── code.png
    └── Ruido.png
```

## O que foi aprendido no JavaScript

### Validação da entrada do usuário

Antes de sortear qualquer coisa, a função `buscarParametros` confere se os três campos foram preenchidos com números inteiros válidos e maiores que zero, usando `isNaN` para detectar campos vazios ou conteúdo que não é número. Além disso, ela verifica duas regras de coerência: o valor mínimo precisa ser menor que o máximo, e a quantidade pedida não pode exceder o tamanho do intervalo, já que seria impossível sortear mais números distintos do que existem na faixa escolhida.

### Funções que retornam valores

A validação devolve `true` ou `false` em vez de apenas exibir uma mensagem, o que permite que a função `sortear` interrompa a execução logo na primeira linha com `if (!buscarParametros()) return;` quando algo está errado. É uma forma enxuta de separar a responsabilidade de validar da responsabilidade de sortear, mantendo cada função com um único propósito.

### Laços de repetição

A função `gerarLista` usa um `for` que percorre todos os valores do intervalo e os adiciona ao array com `push`, construindo a lista de candidatos ao sorteio. O sorteio em si usa outro `for`, que roda tantas vezes quanto a quantidade pedida, e dentro dele um `while` que repete a escolha enquanto o número já tiver saído, garantindo o resultado sem repetição.

### Arrays e o método includes

A lista de números do intervalo e a lista de sorteados são arrays. O método `includes` é o que permite verificar se um número já foi escolhido, e é exatamente essa checagem que alimenta a condição do `while`. O array de sorteados também é interpolado direto na mensagem final, já que o JavaScript converte o array em texto separando os valores por vírgula.

### Números aleatórios

A escolha de cada número usa `Math.random`, que gera um decimal entre zero e um. Multiplicando pelo tamanho da lista e aplicando `parseInt` para descartar a parte decimal, o resultado se torna um índice válido do array, usado para acessar o número correspondente.

### Manipulação de classes do CSS

O botão "Reiniciar" alterna entre habilitado e desabilitado por meio de classes, e não pelo atributo `disabled`. A função `alterarStatusBotao` usa `classList.contains` para descobrir o estado atual e `classList.add` com `classList.remove` para trocar entre `container__botao` e `container__botao-desabilitado`, que no CSS definem cores e cursores diferentes. Essa mesma função serve tanto para habilitar depois do sorteio quanto para desabilitar no reinício, porque sempre inverte o estado.

### Manipulação do DOM

Os elementos são acessados por `getElementById`, que combina com os identificadores já definidos no HTML da Alura. A leitura dos campos acontece pela propriedade `value`, e a exibição do resultado pela `innerHTML`, dentro da função `exibicaoDeTexto`, que centraliza a escrita na tela e já monta o parágrafo com a classe de estilo correta.

### Variáveis globais e escopo

A quantidade, os limites do intervalo e a lista ficam declaradas no topo do arquivo, fora das funções, de modo que a validação possa preenchê-las e as demais funções possam consultá-las sem precisar passar os valores como parâmetro a cada chamada.

### Template strings

As mensagens de resultado são montadas com acento grave e a sintaxe `${}`, inserindo os números sorteados direto no texto e também envolvendo o conteúdo na tag de parágrafo estilizada.

## Como executar

Não é necessária nenhuma instalação. Basta clonar ou baixar o repositório e abrir o `index.html` no navegador, ou acessar um dos links de publicação acima. É preciso estar conectado à internet apenas para carregar as fontes do Google Fonts.

```bash
git clone https://github.com/erikvks/sorteador-numeros.git
cd sorteador-numeros
```

## Tecnologias

HTML5 e CSS3 fornecidos pela Alura, JavaScript e Google Fonts (Inter e Chakra Petch).

## Créditos

Exercício proposto pela [Alura](https://www.alura.com.br), que disponibilizou o layout, o HTML, o CSS e as imagens. A implementação do JavaScript é minha, feita do zero.
