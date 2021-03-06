import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./footer.css";
export default function Footer({ numers, email, redso }) {
  if (numers === undefined) {
    numers = "123456789";
  }
  if (email === undefined) {
    email = "corre@gmail.com";
  }
  if (redso === undefined) {
    redso = [
      { red: "Facebook", url: "#" },
      { red: "Instagram", url: "#" },
    ];
  }
  return (
    <div className="o-container-footer">
      <div className="o-footer">
        <div className="o-footer-numers">
          <PhoneInTalkIcon
            className="o-svg"
            htmlColor="#FFFFFF"
            fontSize="inherit"
          />
          <div className="o-footer-num">{numers}</div>
        </div>
        <div className="o-footer-email">
          <MailOutlineIcon className="o-svg" />
          {email}
        </div>
        <div className="o-footer-red">
          {redso.map((ele, i) =>
            ele.red === "Facebook" ? (
              <a key={i} href={ele.url}>
                <FacebookIcon className="o-svg" />
              </a>
            ) : ele.red === "Instagram" ? (
              <a key={i} href={ele.url}>
                <InstagramIcon className="o-svg" />
              </a>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
