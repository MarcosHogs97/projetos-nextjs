import Descricao from "../components/TiposDev/DevDescricao";
import Titulos from "../components/TiposDev/DevTitulo";
import DevSubtitulos from "../components/TiposDev/DevSubTitulo";
import Imagens from "../components/TiposDev/DevImages";
import style from "../styles/compsDev/tiposDesenvolvedor.module.css";

export default function tiposDev(){
    return (
        <div className={style.tiposDev}>
            <Titulos/>
            <DevSubtitulos />
            <Imagens/>
            <Descricao/>
        </div>
    );

}