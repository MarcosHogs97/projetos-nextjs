import style from "../../styles/compsDev/descricao.module.css";
import { Noto_Sans } from 'next/font/google'

const inter = Noto_Sans({ subsets: ['latin'], weight: ['400'] })

export default function descricao() {
    return(
        <div className={`${style.descricao} ${inter.className}`}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et vero, id molestias laboriosam placeat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et vero, id molestias laboriosam placeat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et vero, id molestias laboriosam placeat.</p>
        </div>
    );
}