// Comentário

// console.log("Olá mundo!");

// Variável: let / const

// let message = "Olá mundo!";

// console.log(message);

// Estruturas de dados: Array & Objeto

// Array

// const metas = ["estudar JS", "estudar CSS"];

/*
    console.log(metas[0]);  Acessando o primeiro indíce
    console.log(metas[1]);  Acessando o segundo indíce
    console.log("meta 1: " + metas[0]);
*/

// Objeto

let meta = {
  descricao: "Fazer a primeira aula do NLW Pocket",
  checked: true, // Booleano: true ou false
};

console.log("Meta: " + meta.descricao);

// Função

// Arrow function

// const criarMeta = () => {};

function criarMeta() {
  console.log("Meta criada com sucesso!");
}

criarMeta();

const metas = [
  meta,
  {
    descricao: "Estudar bastante",
    checked: false,
  },
];

console.log(metas);
