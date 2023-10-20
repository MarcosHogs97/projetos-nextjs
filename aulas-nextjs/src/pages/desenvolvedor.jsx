import Descricao from "../components/TiposDev/DevDescricao";
import Titulos from "../components/TiposDev/devTitulo";
import Subtitulos from "../components/TiposDev/devSubTitulo";
import Imagens from "../components/TiposDev/DevImages";
import style from "../styles/compsDev/tiposDesenvolvedor.module.css";

export default function tiposDev(){
    return (
        <div className={style.TiposDesenvolvedor}>
            <Titulos/>
            <Subtitulos/>
            <Imagens/>
            <Descricao/>
        </div>
    );

}