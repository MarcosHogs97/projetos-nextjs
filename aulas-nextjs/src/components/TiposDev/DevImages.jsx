import Image from "next/image";
import backEnd from "./Img/back-end.png";
import frontEnd from "./Img/front-end.png";
import fullStack from "./Img/full-stack.jpg";
import style from "../../styles/compsDev/devImages.module.css";

export default function Imagens() {
  return (
    <>
      <div className={style.devImages}>
          <div>
            <Image src={backEnd} width={300} height={300} />
          </div>
          <div>
            <Image src={frontEnd} width={300} height={300} />
          </div>
          <div>
            <Image src={fullStack} width={300} height={300} />
          </div>
      </div>
    </>
  );
}
