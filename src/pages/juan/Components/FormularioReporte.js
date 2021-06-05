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
                        <label>Especie <label className="o-Required">*</label></label>
                        <select className="o-InputText" id="Species">
                            <option></option>
                            <option>Gato</option>
                            <option>Perro</option>
                            <option>Otro</option>
                        </select>

                        <label>Raza <label className="o-Required">*</label></label>
                        <select className="o-InputText" id="Species">
                            <option></option>
                            <option>Criollo</option>
                            <option>Sabueso fino colombiano</option>
                            <option>Golden</option>
                        </select>
                    </div>
                </div>

                <div className="o-Form">

                    <div className="o-Left">

                        <label>Fecha de hallazgo  <label className="o-Required">(D / M / A)*</label>:</label>
                        <input type="date" className="o-InputText" id="Fecha"></input>

                        <label>Departamento: <label className="o-Required">*</label></label>
                        <select className="o-InputText" id="state">
                            <option>Amazonas</option>
                            <option>Valle del cacua</option>
                            <option>Cauca</option>
                            <option>Nariño</option>
                        </select>

                    </div>

                    <div className="o-Rigth">

                        <label>Sexo: <label className="o-Required">*</label></label>

                        <div className="o-Sex">
                            <div id="Hembra">
                                <label>Hembra
                                <input className="o-InputRadio" type="radio" name="H" id="sex" value="H"></input></label>
                            </div>

                            <div id="Macho">
                            <label>Macho
                            <input className="o-InputRadio" type="radio" name="H" id="sex" value="M"></input></label>
                            </div>


                        </div>

                        <div className="o-City">
                            <label>Ciudad: <label className="o-Required">*</label></label>
                            <input type="text" className="o-InputText"></input>
                        </div>

                    </div>

                </div>

                <div className="o-Description">
                    <label>Descripción: <label className="o-Required">*</label></label>

                    <div className="o-SendForm">
                        <textarea type="text" id="textArea"></textarea>
                        <button style={{backgroundColor:colorboton}}>Enviar</button>
                    </div>

                </div>



            </div>
        </div>
    );
}