import style from "../../styles/images_styles/header_img_style.module.css";
import Img1 from "../../images/57e5d2424d52ae14f6da8c7dda793678153bdee757596c48732f78dd914cc45eb0_1280.jpg";
function HeaderImage(props) {
  return (
    <div>
      {/* <iframe
        className={style.video}
        allow="autoplay"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        title="video"
        frameBorder="0"
        allowFullScreen
      ></iframe> */}
      <img src={Img1} className={style.video}></img>
    </div>
  );
}

export default HeaderImage;
