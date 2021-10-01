import style from "../../styles/images_styles/header_img_style.module.css";
function HeaderBackground(props) {
  return (
    <div className={style.background}>
      {props.children}
      {/* <iframe
        className={style.video}
        allow="autoplay"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        title="video"
        frameBorder="0"
        allowFullScreen
      ></iframe> */}
      {/* <img src={Img1} className={style.video}></img> */}
    </div>
  );
}

export default HeaderBackground;
