import SomentePar from "../../components/somentePar";

export default function condicional1() {
  function numeros() {
    const itens = [];
    for (let i = 1; i <= 10; i++) {
      itens.push(
        <div key={i}>
          <SomentePar numero={i} />
        </div>
      );
      
    }
    return itens;
  }
  return <div>{numeros()}</div>;
}
