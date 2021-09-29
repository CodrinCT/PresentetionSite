import { Link } from "react-router-dom";
import style from "../../styles/navigation/list.module.css";
export default function Links() {
  return (
    <ul className={style.layout}>
      <li className={style.li}>
        <Link className={style.link} to="/">
          Home
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to="/servicii">
          Servicii
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to="/solutii">
          Solutii
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to="/despre_noi">
          Despre Noi
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}
