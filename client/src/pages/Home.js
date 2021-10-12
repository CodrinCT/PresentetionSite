import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { Animated } from "react-animated-css";
import { useEffect, useState } from "react";
import style from "../styles/home/header.module.css";
import img1 from "../images/featured-1.jpg";
import img2 from "../images/featured-2.jpg";
import img3 from "../images/featured-3.jpg";

function useOnScreen(options) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);
  return [setRef, visible];
}
function Home() {
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });
  return (
    <>
      <Header></Header>
      <div className={style.row} ref={setRef}>
        {visible ? (
          <div className={style.imagesDiv}>
            <Animated
              animationIn="lightSpeedIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration="4s"
            >
              <div className={style.singleImgDiv}>
                <img src={img1} className={style.singleImg} alt=""></img>
              </div>
            </Animated>
            <div className={style.manyImgDiv}>
              <img src={img2} className={style.manyImg} alt=""></img>
              <img src={img3} className={style.manyImg} alt=""></img>
            </div>
          </div>
        ) : null}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
