function Objetivos(props){
    return(
        <div className="Objetivos">
            
            <img src={props.img} alt="cat"/>
            <div className="apadrinar-body">
                <h4>{props.text}</h4>

            </div>
        </div>
    );
}

export default Objetivos;
