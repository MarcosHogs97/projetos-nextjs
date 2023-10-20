export default function Titulo(props) {
    return(
        <>
        <h1>Titulo</h1>
        <h2>Subtitulo</h2>
        <h1 className="text-red-600 text-5xl">{props.principal}</h1>
        <h2>{props.secundario}</h2>
        <p>{props.p}</p>
        <section>{props.anuncio}</section>
        </>
    )
};