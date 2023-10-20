import styles from '../styles/integracao02.module.css';
import { Noto_Sans } from 'next/font/google';
const font = Noto_Sans({ subsets: ['latin'], weight: ['500'] });

export default function integracao02() {
  return (
    <>
    <div className={`${font.className} text-xl`}>    
        <div className={styles.roxo}>Texto #1</div>
        <div className={styles.amarelo}>Texto #2</div>
        <div className={styles.cinza}>Texto #3</div>
    </div>
    </>
  );
};