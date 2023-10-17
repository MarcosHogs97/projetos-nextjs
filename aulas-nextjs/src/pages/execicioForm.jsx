function cadastrarProduto() {
    // Coletar os dados do formulário
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;
    const categoria = document.getElementById('categorias').value;

    // Obter a data e hora atual
    const dataHora = new Date().toLocaleString();

    // Criar um objeto com os dados e a data/hora
    const produto = {
        nome,
        descricao,
        preco,
        categoria,
        dataHora,
    };

    // Ler os dados existentes (se houver)
    let produtos = [];
    const produtosJSON = localStorage.getItem('produtos');
    if (produtosJSON) {
        produtos = JSON.parse(produtosJSON);
    }

    // Adicionar o novo produto à lista de produtos
    produtos.push(produto);

    // Salvar a lista de produtos atualizada no armazenamento local
    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert("Produto cadastrado com sucesso")

    // Limpar o formulário
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('categorias').value = '';
}

export default function form() {
    return (
        <div className="flex w-full min-h-screen bg-gray-700 justify-center items-center">
            <div className="flex w-2/4 min-h-full items-center justify-between">
                <form
                    action=""
                    className="flex w-full items-center flex-col gap-4 text-justify font-semibold rounded-md bg-slate-950 px-5 py-4"
                >
                    <h2>Cadastro de produtos</h2>
                    <label className="flex items-center w-3/6" htmlFor="nome">
                        Nome:
                        <input
                            className="text-black px-2 rounded-md ms-9 w-5/6"
                            type="text"
                            name="nome"
                            id="nome"
                        />
                    </label>

                    <label className="flex items-center w-3/6" htmlFor="descricao">
                        Descrição:
                        <textarea
                            className="text-black px-2 rounded-md ms-3 w-5/6"
                            name="descricao"
                            id="descricao"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </label>

                    <label className="flex items-center w-3/6" htmlFor="preco">
                        Preço:
                        <input
                            className="text-black px-2 rounded-md ms-9 w-5/6"
                            type="text"
                            name="preco"
                            id="preco"
                        />
                    </label>

                    <label className="flex items-center w-3/6" htmlFor="categorias">
                        Categorias:
                        <select
                            className="text-black px-2 rounded-md ms-3 w-5/6"
                            name="categorias"
                            id="categorias"
                        >
                            <option className="text-black px-2 rounded-md" value="eletronico">
                                Eletrônicos
                            </option>
                            <option className="text-black px-2 rounded-md" value="Roupas">
                                Roupas
                            </option>
                            <option className="text-black px-2 rounded-md" value="Alimentos">
                                Alimentos
                            </option>
                            <option className="text-black px-2 rounded-md" value="Outros">
                                Outros
                            </option>
                        </select>
                    </label>
                    <button
                        type="button"
                        onClick={cadastrarProduto}
                        className="px-3 py-2 w-3/6 rounded-md bg-white text-black"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}