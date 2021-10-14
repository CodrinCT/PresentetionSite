import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { Animated } from "react-animated-css";
import { useEffect, useState } from "react";
import style from "../styles/home/header.module.css";
import img1 from "../images/featured-1.jpg";
import img2 from "../images/featured-2.jpg";
import img3 from "../images/featured-3.jpg";
import Contact from "../components/overlay/Contact";
import { useHistory } from "react-router";
import { red } from "@mui/material/colors";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import CookiePopUp from "../components/CookiePopUp";
<style>
  @import
  url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
</style>;

function Home() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.3,
  });
  const [ref3, inView3] = useInView({
    threshold: 1,
  });

  const history = useHistory();
  function redirectAbout() {
    history.push("/");
  }
  function redirectServicii() {
    history.push("/servicii");
  }
  function redirectSolutii() {
    history.push("/solutii");
  }

  return (
    <>
      <CookiePopUp></CookiePopUp>
      <Animated
        animationIn="slideInDown"
        animationInDuration={800}
        animationInDelay={200}
      >
        <Header iconColor='black'></Header>
      </Animated>

      <div className={style.row} ref={ref}>
        {inView && (
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
            animationInDuration={800}
            animationOutDuration={800}
            className={style.animationContainer}
          >
            <div className={style.imagesDiv}>
              <div className={style.singleImgDiv} onClick={redirectAbout}>
                <p
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "2rem",
                    margin: "1rem",
                    fontFamily: "Roboto",
                  }}
                >
                  Despre Noi
                </p>
              </div>
              <div className={style.manyImgDiv}>
                <div
                  className={style.multipleImgOne}
                  onClick={redirectServicii}
                >
                  <p
                    style={{
                      textAlign: "right",
                      color: "white",
                      fontSize: "2rem",
                      margin: "1rem",
                      fontFamily: "Roboto",
                    }}
                  >
                    Servicii
                  </p>
                </div>
                <div className={style.multipleImgTwo} onClick={redirectSolutii}>
                  <p
                    style={{
                      textAlign: "right",
                      color: "white",
                      fontSize: "2rem",
                      margin: "1rem",
                      fontFamily: "Roboto",
                    }}
                  >
                    Solutii
                  </p>
                </div>
              </div>
            </div>
          </Animated>
        )}
        {!inView && (
          <Animated
            // animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={false}
            animationInDuration={800}
            animationOutDuration={800}
            className={style.animationContainer}
          >
            <div className={style.imagesDiv}>
              <div className={style.singleImgDiv} onClick={redirectAbout}>
                <p
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "2rem",
                    margin: "1rem",
                  }}
                >
                  Despre Noi
                </p>
              </div>

              <div className={style.manyImgDiv}>
                <div
                  className={style.multipleImgOne}
                  onClick={redirectServicii}
                >
                  <p
                    style={{
                      textAlign: "left",
                      color: "white",
                      fontSize: "2rem",
                      margin: "1rem",
                    }}
                  >
                    Servicii
                  </p>
                </div>

                <div className={style.multipleImgTwo} onClick={redirectSolutii}>
                  <p
                    style={{
                      textAlign: "left",
                      color: "white",
                      fontSize: "2rem",
                      margin: "1rem",
                      fontFamily: "Roboto",
                    }}
                  >
                    Solutii
                  </p>
                </div>
              </div>
            </div>
          </Animated>
        )}
      </div>
      <section ref={ref2}>
        {inView2 ? (
          <Animated animationIn="fadeIn" animationInDuration={400}>
            <Contact></Contact>
          </Animated>
        ) : (
          <Animated
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={false}
          >
            <Contact></Contact>
          </Animated>
        )}
      </section>

      <Animated
        innerRef={ref3}
        animationIn="slideInUp"
        animationInDuration={700}
      >
        {inView3 ? <Footer></Footer> : <Footer></Footer>}
      </Animated>
    </>
  );
}

export default Home;
