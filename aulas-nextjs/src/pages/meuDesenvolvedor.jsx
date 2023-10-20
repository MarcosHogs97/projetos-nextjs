import style from "../styles/compsDev/meuDev.module.css"
import MeuDevTipo from "../components/TiposDev/MeuDevTipos";
import DevTitulo from "../components/TiposDev/DevTitulo"
import backEnd from "../components/TiposDev/Img/back-end.png";
import frontEnd from "../components/TiposDev/Img/front-end.png";
import fullStack from "../components/TiposDev/Img/full-stack.jpg";

export default function tiposDev() {
    return (
        <div>
            <div className={style.meuDevTipos}>
                <DevTitulo/>
                <div className={style.tiposBox}>
                    <MeuDevTipo titulo="Tipos de desenvolvedor: Front-End, Back-End e Full-Stack"
                        subtitulos="Back-End" Image={backEnd} width={300} height={300} descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et vero, id molestias laboriosam placeat." />
                    <MeuDevTipo titulo="Tipos de desenvolvedor: Front-End, Back-End e Full-Stack"
                        subtitulos="Front-End" Image={frontEnd} width={300} height={300} descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et vero, id molestias laboriosam placeat." />
                    <MeuDevTipo titulo="Tipos de desenvolvedor: Front-End, Back-End e Full-Stack"
                        subtitulos="Full-Stack" Image={fullStack} width={300} height={300} descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et vero, id molestias laboriosam placeat." />
                </div>
            </div>
        </div>
    );

}