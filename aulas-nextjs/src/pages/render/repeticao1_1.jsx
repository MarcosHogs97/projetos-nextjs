export default function repeticao1() {
    const listaAprovados = [
        'Maria',
        'Carlos',
        'Flavia',
        'Fernando',
        'Antônio',
        'Debora',
    ];

    function renderizarLista() {
        return listaAprovados.map((nome, index) => (
            <li key={index}>{nome}</li>
        ));
    }

    return (
        <ul>{renderizarLista()}</ul>
    );
};