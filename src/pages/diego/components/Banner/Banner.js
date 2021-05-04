import "./banner.css";
export default function Adopt({ imgbanner, pet, info, direction }) {
  if (direction === undefined) {
    direction = "left";
  }

  let orden = () => {
    if (direction === "left") {
      return (
        <div className="o-container-banner-info">
          <div className="o-banner-info">
            <div className="o-info-title">{info.title}</div>
            <div className="o-info-body">{info.body}</div>
          </div>
          <img src={pet} alt="mascota" />
        </div>
      );
    }
    if (direction === "right") {
      return (
        <div className="o-container-banner-info">
          <img src={pet} alt="mascota" />
          <div className="o-banner-info">
            <div className="o-info-title">{info.title}</div>
            <div className="o-info-body">{info.body}</div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="o-container-banner">
      {orden()}
      <img src={imgbanner} alt="logo" />
    </div>
  );
}
