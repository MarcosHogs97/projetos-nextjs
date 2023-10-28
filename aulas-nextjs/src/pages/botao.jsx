function acao1() {
  console.log("acao1");
}
export default function botao(params) {
  function acao2() {
    console.log("acao2");
  }
  function acao5(e) {
    console.log(e);
  }

  return (
    <div className="flex gap-4 p-4">
      <button className="px-2 py-4 rounded-md bg-slate-400" onClick={acao1}>
        Click #01
      </button>
      <button className="px-2 py-4 rounded-md bg-slate-400" onClick={acao2}>
        Click #02
      </button>

      {/*Funcao anônima*/}
      <button
        className="px-2 py-4 rounded-md bg-slate-400"
        onClick={function () {
          console.log("acao3");
        }}
      >
        Click #03
      </button>

      {/* Funcao anônima arrow */}
      <button
        className="px-2 py-4 rounded-md bg-slate-400"
        onClick={() => console.log("acao4")}
      >
        Click #04
      </button>

      <button className="px-2 py-4 rounded-md bg-slate-400" onClick={acao5}>
        Click #05
      </button>
    </div>
  );
}
