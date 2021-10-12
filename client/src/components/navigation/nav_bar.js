import Links from "./Links";
import style from "../../styles/navigation/nav_bar.module.css";
import icon from "../../images/logto.png";
import { Link } from "react-router-dom";
function NavigationBar(props) {
  return (
    <div className={style.layout} style={{backgroundColor:props.backgroundColor}}>
      <Link to='/'><img className={style.img} src={icon} alt="icon"></img></Link>
      <div className={style.linksDiv}>
        <Links></Links>
      </div>
    </div>
  );
}
export default NavigationBar;
