import Slider from "react-elastic-carousel";
import Cards from "../Card/Card";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./carousel.css";
export default function Carousel({ title, pets }) {
  if (title === undefined) {
    title = "default";
  }
  return (
    <div className="o-container-carousel">
      <AppBar className="o-bar" position="static">
        <Toolbar className="min-nav">{title}</Toolbar>
      </AppBar>
      <Slider
        itemsToShow={5}
        pagination={false}
        showArrows={true}
        outerSpacing={0}
        verticalMode={false}
      >
        {pets.map((ele, i) => (
          <Cards
            key={i}
            img={ele.img}
            name={ele.nombre}
            description={ele.descripcion}
            url={ele.url}
          />
        ))}
      </Slider>
    </div>
  );
}
