import Slider from "react-elastic-carousel";
import Cards from "./Card";
export default function Carousel({ title, pets }) {
  return (
    <div className="o-container-carousel">
      <div className="o-min-Nav">{title}</div>
      <Slider itemsToShow={5} pagination={false} showArrows={true}>
        {pets.map((ele, i) => (
          <div>
            <Cards img={ele.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
