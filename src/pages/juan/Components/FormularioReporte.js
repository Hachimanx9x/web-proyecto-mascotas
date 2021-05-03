import '../Styles/StyleFormularioReporte.css';

export default function Formulario({titulo, texto, perfilimg, colorboton}){

    return(
        <div>
            <div className="o-FormContainer">
                <h2>{titulo}</h2>
                <label>{texto}</label>

                <img src={perfilimg} alt="imagen" className="o-Image"></img>
                <img src="" alt="imagen" className="o-Image"></img>
                <img src="" alt="imagen" className="o-Image"></img>

                <div className="o-Infopet">
                    <label>Especie *</label>
                    <select className="o-Species o-Text" id="Species">
                        <option></option>
                        <option>Gato</option>
                        <option>Perro</option>
                        <option>Otro</option>
                    </select>

                    <label>Raza *</label>
                    <select className="o-Species o-Text" id="Species">
                        <option></option>
                        <option>Criollo</option>
                        <option>Sabueso fino colombiano</option>
                        <option>Golden</option>
                    </select>
                </div>

                <div>
                    <label>Fecha de hallazgo (D / M / A) *:</label>
                    <input type="date" className="o-Text" id="Fecha"></input>

                    <label>Sexo:</label>

                    <label>Hembra</label>
                    <input type="checkbox" id="sex" value="H"></input>
                    <label>Macho</label>
                    <input type="checkbox" id="sex" value="M"></input>

                    <label>Departamento: *</label>
                    <select className="o-State" id="state">
                        <option>Amazonas</option>
                        <option>Valle del cacua</option>
                        <option>Cauca</option>
                        <option>Nariño</option>
                    </select>

                    <label>Ciudad: *</label>
                    <input type="text" className="o-City"></input>

                </div>

                <div className="o-Description">
                    <label>Descripción: *</label>
                    <textarea type="text"></textarea>
                </div>

                <button style={{backgroundColor:colorboton}}>Enviar</button>

            </div>
        </div>
    );
}