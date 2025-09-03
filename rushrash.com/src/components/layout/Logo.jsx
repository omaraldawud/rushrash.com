// /src/components/layout/logo
//
import LogoImg from "../../assets/images/logo/rushrash-inc-logo-350-tr.png";

//
export default function Logo({ logoWidth = "200px", logoheight = "auto" }) {
  return (
    <a href="/">
      <img
        src={LogoImg}
        alt="Rushrash Inc - CCTV & Access Control Experts"
        className="img-fluid"
        style={{ maxWidth: logoWidth, height: logoheight }}
      />
    </a>
  );
}
