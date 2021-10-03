import Links from "./Links";
import style from "../../styles/navigation/nav_bar.module.css";
import icon from "../../images/ligig.png";
function NavigationBar() {
  return (
    <div className={style.layout}>
      <img className={style.img} src={icon} alt="icon"></img>
      <div className={style.linksDiv}>
        <Links></Links>
      </div>
    </div>
  );
}

export default NavigationBar;
