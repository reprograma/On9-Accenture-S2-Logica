# On9-Accenture-S2-Logica

Lógica - Variáveis, Operadores e Condicional

## Objetivos

Entender os princípios básicos de lógica de programação utilizando a linguagem JavaScript

## Quem é o JavaScript na fila do pão?

JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido. É a terceira camada do bolo das tecnologias padrões da web, duas das quais (HTML e CSS) nós falamos com muito mais detalhes em outras partes da Área de Aprendizado.

[referência: MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript)

A linguagem JavaScript também é utilizada para criar aplicações backend (que é o foco do nosso curso). O Node.js é um ambiente de execução Javascript server-side
Você pode aprender um pouco mais sobre o que é o Node e como ele funciona [aqui](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introdu%C3%A7%C3%A3o).

> Dica 💡
>
> HTML e CSS são linguagens de marcação.
> Linguagens de marcação são usadas para descrever e definir elementos dentro de um documento.
> JavaScript é uma linguagem de programação.
> Linguagens de programação são usadas para comunicar instruções a uma máquina.
> Elas podem ser usadas para controlar o comportamento de uma máquina e expressar algoritmos.

## História do JavaScript

[HipstersPontoTube](https://www.youtube.com/watch?v=NaVSbnnV75Q)

## Navegadores e ferramentas de desenvolvimento

#### Google Chrome

As ferramentas do desenvolvedor do Chrome são um conjunto de ferramentas de autoria e depuração internas do Google Chrome. Use as ferramentas do desenvolvedor para iterar, depurar e analisar seu site. Para saber mais, [clique aqui](https://developers.google.com/web/tools/chrome-devtools/).

Para abrir as ferramentas do desenvolvedor do Chrome, clique com o botão direito do mouse em qualquer elemento da página e selecione Inspect ou abra o menu do Chrome, no canto superior direito da janela de seu navegador, e selecione More Tools > Developer Tools. Como alternativa, você pode usar os seguintes atalhos:

`Command (⌘)` + `Option` + `i` (Mac)

`Ctrl` + `Shift (⇧)` + `i` (Windows/Linux).

[Atalhos de teclado das ferramentas de desenvolvedor do Chrome](https://developers.google.com/web/tools/chrome-devtools/shortcuts)

### Mozilla Firefox

As ferramentas do desenvolvedor do Firefox permitem que você examine, edite e depure HTML, CSS e JavaScript no desktop e no celular. Além disso, você pode baixar uma versão do Firefox chamada Firefox Developer Edition, que é personalizada para desenvolvedores, apresentando os últimos recursos do Firefox e ferramentas do desenvolvedor experimentais. Para saber mais, [clique aqui](https://developer.mozilla.org/en-US/docs/Tools).

Para abrir as ferramentas do desenvolvedor do Firefox, clique com o botão direito do mouse em qualquer elemento da página e selecione Inspect Element ou abra o menu do Firefox, no canto superior direito da janela de seu navegador, e selecione Developer. Como alternativa, você pode usar os seguintes atalhos:

`Command (⌘)` + `Option` + `i` (Mac)

`Ctrl` + `Shift (⇧)` + `i` (Windows/Linux).

### console.log

`console.log` é um comando usado para exibir conteúdo para o console do JavaScript. Rode o seguinte código no console:

```
console.log("Olá mundo!");
```

Parabéns! Você realizou a ação de log no console de depuração.

A mensagem que você registrou é **"Olá mundo!"**. `Olá mundo!` é uma _string_ (uma sequência de caracteres).

---

### O que é um Algoritmo?

A resposta para essa pergunta é mais simples do que parece algoritmos são uma sequência de ações finitas que levam a determinado um resultado.

Ou seja, é uma forma automática de fazer as coisas, como, por exemplo, levantar da cama e se preparar para então começar um dia de trabalho ou seguir todos os dias o mesmo caminho e pegar o mesmo ônibus para chegar a um determinado ponto. É um passo a passo de ações. Assim funciona um algoritmo.

Algoritmo básico para assar um pão:

![Fluxograma](https://leiautdicas.files.wordpress.com/2016/01/113.png?w=840)

> Dica 💡
>
> Jogo para treinar algoritmos: [Lighbot](https://play.google.com/store/apps/details?id=com.lightbot.lightbothoc&hl=en).
> Faça o robozinho andar e acender a luzinha. Você vai perceber que o computador faz apenas aquilo que você manda.😼

💡[Ada Lovelace, a primeira programadora de todos os tempos](https://canaltech.com.br/curiosidades/mulheres-historicas-ada-lovelace-a-primeira-programadora-de-todos-os-tempos-71395/)

---

### Tipos de dados e variáveis

#### Números

Definir um número em JavaScript é, na verdade, bem simples. O tipo de dado number inclui qualquer inteiro positivo ou negativo, bem como decimais. Inserir um número no console fará com que o mesmo valor seja retornado para você

##### Operações aritméticas

Você também pode fazer cálculos com números de maneira bem fácil. Basicamente, digite uma expressão da mesma maneira que você a digitaria em uma calculadora.

`3 + 2.1`

> **Returns**: _5.1_

##### Agora é sua vez!

Insira as expressões (uma de cada) no console e determine o resultado de cada uma.

`2 + 10 - 19 + 4 - 90 + 1`

`-20 + -19 - (-10) - (-1) + 24`

`(10/5) \* 4 - 20`

`4096 % 12`

##### Comparando números

E quanto à comparação de números? Você consegue fazer isso? Mas é claro que consegue!

Assim como na matemática, você pode comparar dois números para verificar se um é maior, menor ou igual ao outro.

`5 > 10`

> Returns: _false_

`5 < 10`

> Returns: _true_

`5 == 10`

> Returns: _false_

Comparações entre números irá resultar em verdadeiro ou falso. Veja na tabela abaixo outros exemplos de comparações que podemos fazer:

##### Operadores lógicos

| Operador | Significado      |
| -------: | ---------------- |
|        < | Menor que        |
|        > | Maior que        |
|       <= | Menor ou igual a |
|       >= | Maior ou igual a |
|       == | Igual a          |
|       != | Diferente de     |

##### Agora é com você

**Quizz**: https://app.sli.do/event/mh6zxmqx

#### String

**String** é uma sequência de caracteres usados para representar texto.

```javascript
"Variáveis em Javascript são uma forma para se salvar dados";

"Reprograma";

"1 é um número ímpar";
```

##### Concatenação de strings

Strings são uma coleção de caracteres agrupados entre aspas simples ou duplas. Você pode utilizar strings para representar dados como frases, nomes, endereços e mais.

Você sabia que é possível até mesmo somar strings? Em JavaScript, isso é chamado de **concatenação**. Concatenar duas strings é, na verdade, bem simples!

`"Hello," + " New York City"`

> Retorna: "Hello, New York City"

Você verá outras maneiras de fazer concatenação e fazer até mais coisas com strings mais adiante neste curso.
Mas, por agora, pratique utilizando o operador de adição `+`.

[**Quizz**](https://forms.gle/vAXGQygafDya8Jte7)

#### Boolean

é um tipo de dado lógico que pode ter apenas um de dois valores possíveis: verdadeiro ou falso.

```javascript
false;
true;
```

#### Null

representa um valor nulo ou "vazio".

```javascript
var y = null;
console.log(y);
```

> `null`

#### Variáveis

Uma variável é um **container para um valor**, como um número que podemos usar em uma operação de adição, ou uma sequência de texto que possamos usar como parte de uma frase. Mas uma coisa especial a respeito das variáveis é que **seu conteúdo pode mudar**.

![Três caixas azuis. Cada uma tem algo dentro. A primeira, o nome Bob. A segunda, o falor true. A terceira o número 35.](assets/variables.png)

Toda vez que precisarmos armezanar e recuperar dados utilizaremos variáveis.

No Javascript temos 3 maneiras de usar variáveis:

- `var` (no console vamos usar essa)
- `let`
- `const`

```javascript
var numero = 1;
var texto = "Vamos reprogramar o mundo no domingo.";
```

##### Convenções de nomenclatura

Quando cria uma variável, você escreve o nome da variável utilizando **camelCase** (a primeira palavra em minúsculo e as palavras seguintes, em maiúsculo).

Também tente utilizar um nome de variável que, de maneira precisa, porém sucinta, descreve do que aquele dado se trata.

```javascript
var totalAfterTax = 53.03; // utiliza camelCase se o nome da variável tiver múltimas palavras
var tip = 8; // utiliza letras minúsculas se o nome da variável tiver somente uma palavra
var firstName = "Pabllo";
var counter = 1;
```

Não utilizar camelCase no nome de suas variáveis não vai, necessariamente, danificar alguma coisa em JavaScript.

Porém, existem guias de estilo recomendados para todas as linguagens de programação que ajudam a manter o código consistente, limpo e fácil de ser lido.

Isso é especialmente importante quando trabalhamos com projetos maiores, que serão acessados por diversas pessoas desenvolvedoras.

Você pode ler mais sobre o Guia de Estilo JavaScript do Google [aqui](https://google.github.io/styleguide/jsguide.html).

##### Declarando variáveis

Um identificador JavaScript deve começar com:

- uma letra
- underline (\_)
- cifrão (\$)

Os caracteres subsequentes podem também ser

- números (0-9)
- letras incluem caracteres de "A" a "Z" (maiúsculos)
- caracteres de "a" a "z" (minúsculos)

Uma variável não pode ser uma palavra reservada, [clique aqui para saber quais são](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)

---

### Ferramentas para receber dados de maneira interativa

O `alert` mostra uma mensagem na tela como um pop-up.

```javascript
var mensagem = "Mensagem que vai aparecer no nosso alerta";
alert(mensagem);
```

O confirm é um pop-up que oferece uma lógica através de dois botões - o Ok (`true`) e o Cancel (`false`)`

```javascript
var mensagem = "Aperte o botão ok";
confirm(mensagem);
// Se o usuário apertar Ok vai retornar true, se apertar Cancel vai retornar false
```

O prompt é um pop-up que nos oferece um input para coletarmos variáveis.

```javascript
var pergunta = "Digite o seu nome";
prompt(pergunta);
```

```javascript
// TODO - por que o prompt retorna string e como fizemos para tratar isso
```

##### Exercício guiado

Vamos fazer um programa que peça dois números e imprima no console a soma desses dois números.

##### Agora é com você

Escreva um programa que receba um valor em metros e o exiba no `console` convertido em milímetros

---
