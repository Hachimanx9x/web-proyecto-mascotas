export default function Adopt({ imgbanner, info }) {
    return (
      <div className="o-container-banner">
        <div className="o-container-banner-info">
          <div className="o-banner-info">
            <div className="o-info-title">{info.title}</div>
            <div className="o-info-body">{info.body}</div>
          </div>
          
        </div>
        <img src={imgbanner} alt="logo" />
      </div>
    );
  }
  