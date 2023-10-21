export default class Produto {
  // A # serve no lugar do Private do JAVA, se nao tiver fica com Public
  #id;
  #nome;
  #preco;

  //Construtor igual do JAVA
  constructor(id, nome, preco) {
    this.#id = id;
    this.#nome = nome;
    this.#preco = preco;
  }

  //Get para acessar os atributos
  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get preco() {
    return this.#preco;
  }
}
