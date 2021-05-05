import '../Styles/StyleBanner.css';

export default function Banner({perro, fondo, titulo, texto}){

    return(
        <div>
            <div className="o-HeaderContainer" style={{backgroundColor:fondo}}>
                <img src={perro} alt="imagen" className="o-LoginImage"></img>

                <div>
                    <h2>{titulo}</h2>
                    <p>{texto}</p>
                </div>

            </div>
        </div>
    );
}