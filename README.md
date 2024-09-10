# NLW Pocket

Projeto construído durante o evento **NLW Pocket** da Rocketseat. Aprendendo sobre os fundamentos da linguagem Javascript.

## Conteúdo

Conteúdos fundamentaiss para aprender a lógica de programação que será apresentado durante o evento.

- [x] Comentário
- [x] Variáveis (const, let)
- [x] Tipos de dados
- [ ] Operadores
- [ ] Estruturas de Dados
- [ ] Controle (IF/ELSE)
- [ ] Loop (for/while)
- [ ] Função

## Tipos de dados

- String
- Number
- Boolean
- Array
- Object
- null / undefined

```javascript
// String
console.log("Isso é uma string!");

// Number
console.log(1);
```

## Variávéis

Declaração:

```javascript
const message = "Hello!";
console.log(message);

let name = "Eduardo";
console.log(name);
```

- `const` - não pode ser alterada durante a execução.

- `let` - pode ser alterado o seu valor

### Escopo

- Local onde a variável/função é definida

```javascript
const message = "Hello";
{
  // Escopo de bloco

  const message = "Hello World";
}

console.log(message); // Será impresso: 'Hello'
```

## Estruturas de dados

- `Array`: conjunto de diferentes tipos de dados

- `Objeto`: conjunto de atributos e métodos

**Exemplo**:

```javascript
// Array

const array = [1, 2, 3, 4];

// Acessando um elemento do Array

console.log(array[0]); // array[0] = 1
```

## Função

Funções são blocos de construção fundamentais em JavaScript.

Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor.

**Exemplo**

```javascript
// Declaração de função

function saudacao() {
  console.log("Boa noite!");
}

// Chamando a função

saudacao();
```
