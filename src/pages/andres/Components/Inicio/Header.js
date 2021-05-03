function Header(props) {
    return(
        <div className="Header">
            <span>
                <img src={props.img} alt="paw-logo"/>
            </span>
        
            <p>{props.option1}</p>
            <p>{props.option2}</p>
            <p>{props.option3}</p>
            <p>{props.option4}</p>
            <p>{props.option5}</p>

            <div className="Header2">
                <button>Iniciar Sesión</button>
            </div>

        </div>

        
    )
}

export default Header;