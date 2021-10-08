import style from "../../styles/images_styles/header_img_style.module.css";
function HeaderBackground(props) {
  return (
    <div className={style.background} onClick={props.handleClose}>
      {props.children}
    </div>
  );
}

export default HeaderBackground;
