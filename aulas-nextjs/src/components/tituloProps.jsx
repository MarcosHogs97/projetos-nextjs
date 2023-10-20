export default function titulo({ par, par2, str, str2, titulo, subtitulo }) {
    const negrito = [<strong>{str}</strong>]
    const negrito2 = [<strong>{str2}</strong>]
    return (
        <>
            <section>
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
                <p>{par}{negrito}{par2}{negrito2}</p>              
            </section>
        </>
    )
}