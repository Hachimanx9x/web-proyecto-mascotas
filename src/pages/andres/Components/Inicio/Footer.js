import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./Footer.css";


function Footer({ numbers, email, redso }){
  return (
    <div className="o-container-footer">
      <div className="o-footer">
        <div className="o-footer-numers">
          <PhoneInTalkIcon
            className="o-svg"
            htmlColor="#FFFFFF"
            fontSize="inherit"
          />
          <div className="o-footer-num">{numbers}</div>
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


export default Footer;