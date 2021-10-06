import NavigationBar from "../components/navigation/nav_bar";
import "../styles/solutii/animated.css";
import "../styles/solutii/fontawesome.css";
import "../styles/solutii/owl.css";
import "../styles/solutii/templatemo-space-dynamic.css";
import imageBannerRight from "../images/banner-right-image.png";
import style from "../styles/solutii/solutii.module.css";
import native from "../images/pexels-negative-space-97077.jpg";
import hybrid from "../images/xps-TxXuh_hAFd8-unsplash.jpg";
import automation from "../images/alex-knight-2EJCSULRwC8-unsplash.jpg";
import optimisation from "../images/ffff-min.jpg";
import styled from "styled-components";
function Solutii() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div
        class="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6 align-self-center">
                  <div
                    class="left-content header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <h6 style={{color:'black'}}>Preia initiativa a oricărei provocari IT</h6>
                    <h2>
                      Tu aduci problema, noi venim cu<em> solutia</em> &amp;{" "}
                      tot ce trebuie sa faci este sa ne  <span>contactezi</span>{" "}
                    </h2>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={imageBannerRight} alt="team meeting" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" class="our-portfolio section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div
                class="section-heading  wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h2>
                  Unele dintre <em>SOLUTIILE</em> noastre
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <a href="#hybridCloud">
                <div
                  class="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <div class="hidden-content">
                    <h4>TREBUIE SA LUCREZ IN CLOUD</h4>
                    <p>
                      În cloud-ul nostru hibrid, aplicațiile și datele se
                      deplasează fluid între medii: cloud public, cloud privat,
                      la nivel local și virtualizat.
                    </p>
                  </div>
                  <div class="showed-content">
                    <img src={hybrid} alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-sm-6">
              <a href="#cloud">
                <div
                  class="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div class="hidden-content">
                    <h4>CLOUD-NATIVE DEVELOPMENT</h4>
                    <p>
                      Tehnologia potrivită este doar un pas într-o călătorie
                      nativă în cloud.
                    </p>
                  </div>
                  <div class="showed-content">
                    <img src={native} alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-sm-6">
              <a href="#automation">
                <div
                  class="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div class="hidden-content">
                    <h4>AUTOMATION</h4>
                    <p>
                      Sarcinile repetitive ocupa timpul pe care echipa dvs l-ar
                      putea petrce pentru munca inovatoare.
                    </p>
                  </div>
                  <div class="showed-content">
                    <img src={automation} alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-sm-6">
              <a href="#IToptimization">
                <div
                  class="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div class="hidden-content">
                    <h4>I.T. OPTIMIZATION</h4>
                    <p>
                      Este posibil ca sistemele care susțin organizația dvs. să
                      nu-i susțină viitorul.
                    </p>
                  </div>
                  <div class="showed-content">
                    <img src={optimisation} alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="w3-card-4 w3-margin w3-white" id='hybridCloud' className={style.div}>
        <img src={hybrid} alt="Norway" className={style.solutionsImg} />

        <div class="w3-container">
          <p className={style.solutionsText}>
            Tehnologia potrivită este doar un pas într-o călătorie nativă în
            cloud. Cu instrumentele și abordările noastre deschise, vă puteți
            aranja procesele, platformele și echipele pentru a prospera în
            cloud.
          </p>
          <div class="w3-row"></div>
        </div>
      </div>
      <div class="w3-card-4 w3-margin w3-white" id='cloud' className={style.div}>
        <img src={native} alt="Norway" className={style.solutionsImg} />

        <div class="w3-container">
          <p className={style.solutionsText}>
            În cloud-ul nostru hibrid, aplicațiile și datele se deplasează fluid
            între medii: cloud public, cloud privat, la nivel local și
            virtualizat.
          </p>
          <div class="w3-row"></div>
        </div>
      </div>
      <div class="w3-card-4 w3-margin w3-white" id='automation' className={style.div}>
        <img src={automation} alt="Norway" className={style.solutionsImg} />

        <div class="w3-container">
          <p className={style.solutionsText}>
            Sarcinile repetitive ocupa timpul pe care echipa dvs. l-ar putea petrece pentru munca inovatoare. Instrumentele noastre de automatizare si gestionare deschise va permit sa va reorientati si sa reluati controlul.
          </p>
          <div class="w3-row"></div>
        </div>
      </div>
      <div class="w3-card-4 w3-margin w3-white" id='IToptimization' className={style.div}>
        <img src={optimisation} alt="Norway" className={style.solutionsImg} />
        <div class="w3-container">
          <p className={style.solutionsText}>
            Este posibil ca sistemele care susțin organizația dvs. să nu-i
            susțină viitorul. Portofoliul nostru de instrumente de
            infrastructură deschisă vă va ajuta să profitați mai mult de ceea ce
            aveți în timp ce construiți ceea ce veți avea nevoie.
          </p>
          <div class="w3-row"></div>
        </div>
      </div>
      <Footer >
        <p style={{ color: "white", fontSize: "20px", margin: "0" }}>
          {"TYRBUL SOLUTIONS SRL "}
        </p>
        <p style={{ color: "white", fontSize: "20px", margin: "0" }}>
          RO39758389
        </p>
        @2020 ALL RIGHTS RESERVED TO TYRBUL SOLUTIONS
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background-color: rgb(34, 30, 30);
  color: white;
  padding: 50px 0;
  height: 250px;

`

export default Solutii;
