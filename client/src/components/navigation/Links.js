import { Link } from "react-router-dom";
import style from "../../styles/navigation/list.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import DropdownMenu from "@restart/ui/esm/DropdownMenu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { MenuList, Popper } from "@mui/material";
import { Animated } from "react-animated-css";
export default function Links() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ul className={style.layout}>
        <li className={style.li}>
          <Link className={style.link} to="/">
            Acasa
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

      <FontAwesomeIcon
        icon={faBars}
        className={style.Dropdown}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
      </FontAwesomeIcon>
      <Animated animationIn='fadeIn'
      animationInDuration={600}
      animationOut="fadeOut"
      animationOutDuration={300}>
      <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        tabIndex={-1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal:'right',
        }}
      >
        <MenuItem>
          <Link to="/" className={style.menuLink}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/servicii" className={style.menuLink}>
            Servicii
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/solutii" className={style.menuLink}>
            Solutii
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/despre_noi" className={style.menuLink}>
            Despre Noi
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact" className={style.menuLink}>
            Contact
          </Link>
        </MenuItem>
      </Menu>
      </Animated>
     
      {/* <FontAwesomeIcon
        icon={faHamburger}
        className={style.Dropdown}
        onClick={burgerHandler}
      ></FontAwesomeIcon> */}
      {/* <Dropdown>
        <Dropdown.Menu className={style.DropMenu}>
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
      </Dropdown> */}

      {/* <button className={style.Dropdown}>
        <span>
          <FontAwesomeIcon icon={faHamburger} className={style.btn}>
            Pagini
          </FontAwesomeIcon>
        </span>

       
      </button> */}
    </>
  );
}
