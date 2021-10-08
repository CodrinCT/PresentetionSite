import { Link } from "react-router-dom";
import style from "../../styles/navigation/list.module.css";
import { Dropdown } from "react-bootstrap";
export default function Links() {
  return (
    <>
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
      <Dropdown className={style.Dropdown}>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className={style.btn}
        >
          Pagini
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/">
            Home
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/servicii">
            Servicii
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/solutii">
            Solutii
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/despre_noi">
            Despre Noi
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/contact">
            Contact
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
