export default class Livro {
    nome;
    preco;
    desconto;
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
//# sourceMappingURL=livro.js.map