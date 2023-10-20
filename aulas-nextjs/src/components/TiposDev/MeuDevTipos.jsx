import Image from "next/image";
import style from "../../styles/compsDev/meuDev.module.css"

export default function MeuDevTipo(props) {
    const imageStyle = {
        objectFit: 'contain'
    }
    return (
        <div className={`${style.conteudo}`}>
                <h3>{props.subtitulos}</h3>       
                <Image src={props.Image} width={props.width} height={props.height} style={imageStyle} />       
                <p>{props.descricao}</p>       
        </div>
    )

}