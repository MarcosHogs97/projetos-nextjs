import listaProdutos from "../../../data/listaProdutos";
import style from "../../styles/produtos.module.css";

export default function repeticao2() {
  function renderizarProdutos() {
    return listaProdutos.map((produto) => (
      <tr key={produto.id}>
        <td className={style.tabela}>{produto.id}</td>
        <td className={style.tabela}>{produto.nome}</td>
        <td className={style.tabela}>{produto.preco}</td>
      </tr>
    ));
  }

  return (
    <div>
      <table className={style.tabelaBox}>
        <thead>
          <tr>
            <th className={style.tabela}>Código</th>
            <th className={style.tabela}>Nome</th>
            <th className={style.tabela}>Preço</th>
          </tr>
        </thead>
        <tbody>{renderizarProdutos()}</tbody>
      </table>
    </div>
  );
}
