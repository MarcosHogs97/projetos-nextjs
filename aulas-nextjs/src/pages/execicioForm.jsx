import { useState } from "react";

export default function Form() {
    const [form, setForm] = useState({
        nome: "",
        descricao: "",
        preco: 0,
        categoria: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
        console.log(form);
    }

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
                            onChange={handleChange}
                            placeholder="Nome do produto"
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
                            onChange={handleChange}
                            placeholder="Informações sobre o produto"
                        ></textarea>
                    </label>

                    <label className="flex items-center w-3/6" htmlFor="preco">
                        Preço:
                        <input
                            className="text-black px-2 rounded-md ms-9 w-5/6"
                            type="text"
                            name="preco"
                            id="preco"
                            onChange={handleChange}
                            placeholder="0.00"
                        />
                    </label>

                    <label className="flex items-center w-3/6" htmlFor="categorias">
                        Categorias:
                        <select
                            className="text-black px-2 rounded-md ms-3 w-5/6"
                            name="categoria"
                            id="categorias"
                            onChange={handleChange}
                            required
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
                        className="px-3 py-2 w-3/6 rounded-md bg-white text-black"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
