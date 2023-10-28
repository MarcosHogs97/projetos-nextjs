import Filho from "../direta/Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho nome="Carlos" familia="Albuquerque" />
      <Filho nome="Pedro" familia="Santos" />
      <Filho nome="Joana" familia="Albuquerque" />
      <Filho nome="Maria" familia="Santos" />
    </div>
  );
}