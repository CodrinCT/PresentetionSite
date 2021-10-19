import Links from "./Links";
import style from "../../styles/navigation/nav_bar.module.css";
import iconBlack from "../../images/logto.png";
import iconWhite from "../../images/lohoWhite.png";

import { Link } from "react-router-dom";
import LanguageChanger from "./Languagechanger";
function NavigationBar(props) {
  return (
    <div className={style.layout} style={{backgroundColor:props.backgroundColor}}>
      <Link to='/'>{props.iconColor=='black'?<img className={style.img} src={iconBlack} alt="icon"></img>:<img className={style.img} src={iconWhite} alt="icon"></img>}</Link>
      <div className={style.linksDiv}>
        <Links></Links>
        
      </div>
    </div>
  );
}
export default NavigationBar;
