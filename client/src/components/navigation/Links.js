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
import LanguageChanger from "./Languagechanger";
import { useTranslation } from "react-i18next";
export default function Links() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {t} = useTranslation()
  return (
    <>
      <ul className={style.layout}>
        <li className={style.li}>
          <Link className={style.link} to="/">
          {t('acasa.acasa_link')}
          </Link>
        </li>
        <li className={style.li}>
          <Link className={style.link} to="/servicii">
          {t('acasa.servicii_link')}
          </Link>
        </li>
        <li className={style.li}>
          <Link className={style.link} to="/solutii">
          {t('acasa.solutii_link')}
          </Link>
        </li>
        <li className={style.li}>
          <Link className={style.link} to="/despre_noi">
          {t('acasa.despre_noi_link')}
          </Link>
        </li>
        <li className={style.li}>
          <Link className={style.link} to="/contact">
          {t('acasa.contact_link')}
          </Link>
        </li>
        <li>
      <LanguageChanger></LanguageChanger>

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
          {t('acasa.acasa_link')}

          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/servicii" className={style.menuLink}>
          {t('acasa.servicii_link')}

          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/solutii" className={style.menuLink}>
          {t('acasa.solutii_link')}

          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/despre_noi" className={style.menuLink}>
          {t('acasa.despre_noi_link')}

          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact" className={style.menuLink}>
          {t('acasa.contact_link')}

          </Link>
        </MenuItem>
      </Menu>
      </Animated>
    </>
  );
}
