import style from "../../styles/compsDev/titulo.module.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function titulos() {
  return(
    <div className={`${style.titulo} ${roboto.className}`}>
    <h1>Tipos de desenvolvedor: Front-End, Back-End e Full-Stack</h1>
    </div>
  );  
}