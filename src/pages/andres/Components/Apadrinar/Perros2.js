function Perros2(props){
    return(
        <div className="Card2">
            <img src={props.img} alt="Doggo"/>
            <div className="apadrinar-body">
                <h4>{props.text}</h4>

            </div>

        </div>
    );
}

export default Perros2;