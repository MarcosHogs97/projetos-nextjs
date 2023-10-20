import Image from "next/image";
import backEnd from "./Img/back-end.png";
import frontEnd from "./Img/front-end.png";
import fullStack from "./Img/full-stack.jpg";
import style from "../../styles/compsDev/imagens.module.css";

export default function Imagens() {
  const imageStyle = {
    objectFit: 'contain'
  }
  return (
    <>
      <div className={style.devImages}>
          <div>
          <Image src={frontEnd} width={300} height={300} style={imageStyle}/>
          </div>
          <div>
          <Image src={backEnd} width={300} height={300} style={imageStyle} />
          </div>
          <div>
          <Image src={fullStack} width={300} height={300} style={imageStyle} />
          </div>
      </div>
    </>
  );
}
