import Links from "./Links";
import style from "../../styles/navigation/nav_bar.module.css";
function NavigationBar() {
  return (
    <div className={style.layout}>
      <img
        className={style.img}
        src="http://tyrbul.com/images/LOGOTRYBUL2.png"
        alt="icon"
      ></img>
      <Links></Links>
    </div>
  );
}

export default NavigationBar;
