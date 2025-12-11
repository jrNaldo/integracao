import $ from 'jquery'
import Livro from "./modelo/livro.js";

const livro = new Livro('Dom Quixote', 100, 0.10)
$('body').append(`<h1>Nome: ${livro.nome}</h1>`)
$('body').append(`<h2>Preço: R$${livro.precoComDesconto()}</h2>`)
// console.log(livro.precoComDesconto())