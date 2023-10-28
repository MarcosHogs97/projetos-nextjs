export default function Filho(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <section className="px-2">
        {props.nome} {props.familia}
      </section>
    </div>
  );
}