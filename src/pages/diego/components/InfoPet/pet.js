export default function info({ img, data }) {
  return (
    <div className="o-pet">
      <img src={img} alt={data.name} />
      <h3>{data.name}</h3>
      <fieldset>
        <legend>Sexo:</legend>
        <p>{data.sex}</p>
      </fieldset>

      <fieldset>
        <legend>Edad:</legend>
        <p>{data.age}</p>
      </fieldset>

      <fieldset>
        <legend>Raza:</legend>
        <p>{data.race}</p>
      </fieldset>

      <fieldset>
        <legend>Tamaño:</legend>
        <p>{data.size}</p>
      </fieldset>

      <fieldset>
        <legend>Peso:</legend>
        <p>{data.weight}</p>
      </fieldset>

      <fieldset>
        <legend>Caracter:</legend>
        <p>{data.character}</p>
      </fieldset>
    </div>
  );
}
