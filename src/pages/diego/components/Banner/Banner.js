import "./banner.css";
export default function Adopt({ imgbanner, pet, info, direction, width }) {
  if (direction === undefined) {
    direction = "left";
  }
  if (width === undefined) {
    width = "40%";
  }

  let orden = () => {
    if (direction === "left") {
      return (
        <div className="o-container-banner-info">
          <div className="o-banner-info">
            <div className="o-info-title">{info.title}</div>
            <div className="o-info-body">{info.body}</div>
          </div>
          <img src={pet} alt="mascota" style={{ width: width }} />
        </div>
      );
    }
    if (direction === "right") {
      return (
        <div className="o-container-banner-info">
          <img src={pet} alt="mascota" style={{ width: width }} />
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
      <img
        src={imgbanner}
        alt="logo"
        style={{ width: "100%", height: "600px" }}
      />
    </div>
  );
}
