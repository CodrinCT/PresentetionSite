import style from "../../styles/images_styles/header_img_style.module.css";
import { Animated } from "react-animated-css";
function HeaderBackground(props) {
  return (
    <Animated 
    animationIn="fadeInDown"
    animationInDuration='6s'
    >
<div className={style.background} onClick={props.handleClose}>
      {props.children}
    </div>
    </Animated>
    
  );
}

export default HeaderBackground;
