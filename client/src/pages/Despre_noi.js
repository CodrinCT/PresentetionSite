import NavigationBar from "../components/navigation/nav_bar";
import style from "../styles/despre_noi/about_us.module.css";
import styled from "styled-components";
import Footer from "../components/Footer";
import Team from "../components/overlay/Meet_Team";
import Objective from "../components/overlay/Obiectivul_activitatii";
import { Animated } from "react-animated-css";
import { useInView } from "react-intersection-observer";
import img1 from "../images/pexels-fauxels-3184312.jpg";
import { useTranslation } from "react-i18next";

<style>
  @import
  url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
</style>;

function Despre() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [teamref, teamView] = useInView({
    threshold: 0.4,
  });

  const [objectiveRef, objectiveView] = useInView({
    threshold: 0.3,
  });

  const [ref3, inView3] = useInView({
    rootMargin: "20%",
  });

  const { t } = useTranslation();

  return (
    <>
      <>
        <div className={style.page}>
          <NavigationBar></NavigationBar>
          <div style={{ height: "100%" }} ref={ref3}>
            {!inView3 ? (
              <Animated
                animationOut="fadeOut"
                animationOutDuration={400}
                // animationInDelay={200}
                animationInDuration={600}
                isVisible={false}
              >
                <div className={style.body}>
                  <h1 className={style.h}>{t("despre_noi.title")}</h1>
                </div>
              </Animated>
            ) : (
              <Animated
                animationIn="slideInDown"
                animationOut="slideInDown"
                animationInDuration={800}
                animationOutDuration={200}
                // animationInDelay={200}
              >
                <div className={style.body}>
                  <h1 className={style.h}>{t("despre_noi.title")}</h1>
                  <HeaderParan>{t("despre_noi.header_param.1")}</HeaderParan>
                  <HeaderParan>{t("despre_noi.header_param.2")}</HeaderParan>
                </div>
              </Animated>
            )}
          </div>

          <InformationAboutUs ref={ref}>
            <Overlay></Overlay>
            {inView && (
              <>
                <FirstInfoDiv>
                  <Animated
                    animationIn="slideInRight"
                    isVisible={true}
                    animationInDuration={600}
                    className={style.animatedParam}
                  >
                    <Param1>{t("despre_noi.despre_noi_param1")}</Param1>
                  </Animated>
                </FirstInfoDiv>

                <SecondInfoDiv>
                  <Animated
                    animationIn="slideInLeft"
                    isVisible={true}
                    animationInDuration={600}
                    className={style.animatedParam}
                  >
                    <Param2>{t("despre_noi.despre_noi_param2")}</Param2>
                  </Animated>
                </SecondInfoDiv>

                <ThirdInfoDiv>
                  <Animated
                    animationIn="slideInRight"
                    isVisible={true}
                    animationInDuration={600}
                    className={style.animatedParam}
                  >
                    <Param3>{t("despre_noi.despre_noi_param3")}</Param3>
                  </Animated>
                </ThirdInfoDiv>
              </>
            )}
            {!inView && (
              <>
                <FirstInfoDiv>
                  <Animated
                    animationOut="slideOutLeft"
                    isVisible={false}
                    animationInDuration={600}
                    className={style.animatedParam}
                  >
                    <Param1>{t("despre_noi.despre_noi_param1")}</Param1>
                  </Animated>
                </FirstInfoDiv>

                <SecondInfoDiv>
                  <Animated
                    animationOut="slideOutRight"
                    isVisible={false}
                    animationInDuration={600}
                    className={style.animatedParam}
                  >
                    <Param2>{t("despre_noi.despre_noi_param2")}</Param2>
                  </Animated>
                </SecondInfoDiv>

                <ThirdInfoDiv>
                  <Animated
                    animationOut="slideOutLeft"
                    isVisible={false}
                    animationInDuration={600}
                    className={style.animatedParam}
                  >
                    <Param3>{t("despre_noi.despre_noi_param3")}</Param3>
                  </Animated>
                </ThirdInfoDiv>
              </>
            )}
          </InformationAboutUs>
        </div>
        <div ref={objectiveRef}>
          {objectiveView && (
            <Animated
              animationIn="fadeIn"
              animationInDuration={600}
              isVisible={true}
              style={{ height: "100%" }}
            >
              <Objective></Objective>
            </Animated>
          )}
          {!objectiveView && (
            <Animated
              animationOut="fadeOut"
              animationOutDuration={600}
              isVisible={false}
            >
              <Objective></Objective>
            </Animated>
          )}
        </div>
        <div ref={teamref} style={{ height: "fit-content" }}>
          {teamView && (
            <Animated animationIn="fadeIn" animationInDuration={500}>
              <Team></Team>
            </Animated>
          )}
          {!teamView && (
            <Animated
              animationOut="fadeOut"
              isVisible={false}
              animationInDuration={500}
            >
              <Team></Team>
            </Animated>
          )}
        </div>
      </>
      <Footer></Footer>
    </>
  );
}
export default Despre;

const InformationAboutUs = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${img1});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 100%;
  }
`;
const FirstInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  /* margin-bottom: 5rem; */
  margin-top: 2rem;
  margin-bottom: 2rem;

  justify-content: left;
  align-items: center;
`;
const SecondInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;

  /* margin-bottom: 5rem;
margin-top: 5rem; */
  justify-content: right;
  align-items: center;
`;

const ThirdInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
  /* margin-top: 5rem;  */
  justify-content: left;
  align-items: center;
`;

const Param1 = styled.p`
  width: 80%;
  color: black;
  font-family: "Roboto";
  font-size: 1.2rem;
  text-indent: 15px;
  line-height: 1.5rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;
const Param2 = styled.p`
  width: 80%;
  color: black;
  font-family: "Roboto";
  font-size: 1.2rem;
  text-indent: 15px;
  line-height: 1.5rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;
const Param3 = styled.p`
  width: 80%;
  color: black;
  font-family: "Roboto";
  font-size: 1.2rem;
  text-indent: 15px;
  line-height: 1.5rem;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const HeaderParan = styled.p`
  font-family: "Roboto";
  font-size: 2rem;
  color: white;
  font-weight: 600;
  text-align: center;
`;

const Overlay = styled.div`
  background-color: black;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  height: 100vh;
  @media (max-width: 600px) {
    object-fit: cover;
  }
`;
