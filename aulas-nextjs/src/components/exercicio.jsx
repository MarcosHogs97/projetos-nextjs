export default function Exercicio(props) {
  const negrito = [
    <strong>
      {props.n1}
      {props.n2}
      {props.n3}
    </strong>,
  ];
  return (
    <>
      <section>
        {props.section}
        <p>
          {props.p1}
          {negrito}
          {props.p2}
        </p>
      </section>
    </>
  );
}
