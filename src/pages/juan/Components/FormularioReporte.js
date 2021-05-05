import '../Styles/StyleFormularioReporte.css';

export default function Formulario({titulo, texto, perfilimg, icon, colorboton}){

    return(
        <div>
            <div className="o-FormContainer">

                <div className="o-TitleContainer">
                    <h2>{titulo}</h2>
                    <label>{texto}</label>
                </div>

                <div className="o-SelectContainer">
                    <div className="o-ImgContainer">
                        <img src={perfilimg} alt="imagen" className="o-Image"></img>
                        <img src={icon} alt="imagen" className="o-Image" id="addfileIcon"></img>
                    </div>
                

                    <div className="o-Infopet">
                        <label>Especie *</label>
                        <select className="o-Species" id="Species">
                            <option></option>
                            <option>Gato</option>
                            <option>Perro</option>
                            <option>Otro</option>
                        </select>

                        <label>Raza *</label>
                        <select className="o-Species" id="Species">
                            <option></option>
                            <option>Criollo</option>
                            <option>Sabueso fino colombiano</option>
                            <option>Golden</option>
                        </select>
                    </div>
                </div>

                <div className="o-Form">

                    <div className="o-Left">

                        <label>Fecha de hallazgo (D / M / A) *:</label>
                        <input type="date" className="o-Text" id="Fecha"></input>


                        <label>Departamento: *</label>
                        <select className="o-State" id="state">
                            <option>Amazonas</option>
                            <option>Valle del cacua</option>
                            <option>Cauca</option>
                            <option>Nariño</option>
                        </select>

                    </div>

                    <div className="o-Rigth">

                        <label>Sexo:</label>

                        <div className="o-Sex">
                            <label>Hembra</label>
                            <input type="checkbox" id="sex" value="H"></input>
                            <label>Macho</label>
                            <input type="checkbox" id="sex" value="M"></input>
                        </div>


                        <label>Ciudad: *</label>
                        <input type="text" className="o-City"></input>

                    </div>

                </div>

                <div className="o-Description">
                    <label>Descripción: *</label>

                    <div className="o-SendForm">
                        <textarea type="text" id="textArea"></textarea>
                        <button style={{backgroundColor:colorboton}}>Enviar</button>
                    </div>

                </div>



            </div>
        </div>
    );
}