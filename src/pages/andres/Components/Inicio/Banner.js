export default function Banner({ imgbanner, info }) {
  return (
    <div className="o-container-banner">
      <div className="o-container-banner-info">
        <div className="o-banner-info">
          <div className="o-info-title">{info.title}</div>
          <div className="o-info-body">{info.body}</div>
        </div>
      </div>
      <img
        src={imgbanner}
        alt="logo"
        style={{ width: "100%", height: "600px" }}
      />
    </div>
  );
}
