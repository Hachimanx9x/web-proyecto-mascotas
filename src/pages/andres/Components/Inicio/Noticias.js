import NoticiaCarusel from "./NoticiaCarusel";
import Slide from "react-elastic-carousel";

function Noticia(props){
    return(
        <div className="Carusel">
            
            <Slide itemsToShow={1} pagination={false} showArrows={true}>
                {props.img.map((ele, i) => (
                    <NoticiaCarusel key={i} img={ele.img}  />
                ))}
                


            </Slide>
        </div>
    );
}

export default Noticia;