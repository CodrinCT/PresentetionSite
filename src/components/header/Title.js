import style from "../../styles/header/title.module.css";
import MoreButton from "./Button";
export default function Title() {
  return (
    <div className={style.Title}>
      <h1 className={style.h}>
        SOLUTII, REZULTATE, CALITATE! SERVICII SOFTARE TYRBUL.
      </h1>
      <h3 className={style.h3}>PENTRU CA NE PASA!</h3>
      <MoreButton></MoreButton>
    </div>
  );
}
