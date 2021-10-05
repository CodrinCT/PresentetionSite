import { Link } from "react-router-dom";
import styled from "styled-components";
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
      {/* <DropDown>
        <option>
          <Link to="/home">Home</Link>
        </option>
        <option>
          <Link to="/servicii">Servicii</Link>
        </option>
        <option>
          <Link to="/solutii">Solutii</Link>
        </option>
        <option>
          <Link to="/despre_noi">Despre Noi</Link>
        </option>
        <option>
          <Link to="/contact">Contact</Link>
        </option>
      </DropDown> */}

      <Dropdown className={style.Dropdown}>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className={style.btn}
        >
          Pages
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
