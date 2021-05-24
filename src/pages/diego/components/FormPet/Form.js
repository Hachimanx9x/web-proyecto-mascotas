import Button from "@material-ui/core/Button";
import "./form.css";
export default function Form({ img, data, url }) {
  return (
    <div className="o-form">
      <div className="o-container-form">
        <div className="o-form-img">
          <img src={img} alt={data.name} />
        </div>
        <div className="o-form-info">
          <h3>{data.name}</h3>
          <fieldset className="o-form-date">
            <legend>Sexo:</legend>
            <p>{data.sex}</p>
          </fieldset>

          <fieldset className="o-form-date">
            <legend>Edad:</legend>
            <p>{data.age}</p>
          </fieldset>

          <fieldset className="o-form-date">
            <legend>Raza:</legend>
            <p>{data.race}</p>
          </fieldset>

          <fieldset className="o-form-date">
            <legend>Tamaño:</legend>
            <p>{data.size}</p>
          </fieldset>

          <fieldset className="o-form-date">
            <legend>Peso:</legend>
            <p>{data.weight}</p>
          </fieldset>

          <fieldset className="o-form-date">
            <legend>Caracter:</legend>
            <p>{data.character}</p>
          </fieldset>
          <div className="o-form-active">
            <Button
              className="o-button"
              variant="contained"
              color="primary"
              href={url}
            >
              Adoptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
