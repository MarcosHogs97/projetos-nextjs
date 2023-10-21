export default function repeticao(){
    const listaAprovados = [
        'Ana',
        'Roberto',
        'Flavia',
        'Ricardo',
        'Antônio',
        'Debora',
    ];

    function renderizarLista(){
        const itens = [];
        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li>{listaAprovados[i]}</li>);
        }
        return itens;
    }













    return(
        <ul>{renderizarLista()}</ul>
    );
};