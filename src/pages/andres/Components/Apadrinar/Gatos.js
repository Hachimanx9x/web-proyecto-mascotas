function Gatos(props){
    return(
        <div className="Card3">
            <img src={props.img} alt="cat"/>
            <div className="apadrinar-body">
                <h4>{props.text}</h4>

            </div>

        </div>
    );
}

export default Gatos;