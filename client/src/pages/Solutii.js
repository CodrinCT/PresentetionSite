import NavigationBar from "../components/navigation/nav_bar";
import "../styles/solutii/animated.css";
import "../styles/solutii/fontawesome.css";
import "../styles/solutii/owl.css";
import "../styles/solutii/templatemo-space-dynamic.css";
import imageBannerRight from "../images/banner-right-image.png";
import style from "../styles/solutii/solutii.module.css";
import native from "../images/pexels-negative-space-97077.jpg";
import hybrid from "../images/xps-TxXuh_hAFd8-unsplash.jpg";
import automation from "../images/pexels-pixabay-373543.jpg";
import optimisation from "../images/ffff-min.jpg";
import Footer from "../components/Footer";
import CookiePopUp from "../components/CookiePopUp";
import { useTranslation } from "react-i18next";

function Solutii() {

  const {t} = useTranslation()
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
                    <h6 style={{ color: "black" , fontSize:'1rem'}}>
                      {t('solutii.solutii_subtitle')}
                    </h6>
                    <h2 style={{fontSize:'2rem', lineHeight:"3rem"}}>
                    {t('solutii.solutii_title')}
                      {/* <em> */}
                      {/* </em> &amp;{" "} */}
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
                {t('solutii.solutions_page_subtitle.1')} <em>{t('solutii.solutions_page_subtitle.2')}</em> {t('solutii.solutions_page_subtitle.3')}
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
                    <h4>{t('solutii.work_in_cloud_title')}</h4>
                    <p>
                    {t('solutii.work_in_cloud_description')}
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
                      {t('solutii.cloud_native_description')}
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
                    {t('solutii.automation_short_description')}.
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
                    {t('solutii.optimisation_short_description')}
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

      <div
        class="w3-card-4 w3-margin w3-white"
        id="hybridCloud"
        className={style.div}
      >
        <img src={hybrid} alt="Norway" className={style.solutionsImg} />

        <div class="w3-container">
          <p className={style.solutionsText}>
            {t('solutii.cloud_native_description')}
          </p>
          <div class="w3-row"></div>
        </div>
      </div>
      <div
        class="w3-card-4 w3-margin w3-white"
        id="cloud"
        className={style.div}
      >
        <img src={native} alt="Norway" className={style.solutionsImg} />

        <div class="w3-container">
          <p className={style.solutionsText}>
          {t('solutii.work_in_cloud_description')}

          </p>
          <div class="w3-row"></div>
        </div>
      </div>
      <div
        class="w3-card-4 w3-margin w3-white"
        id="automation"
        className={style.div}
      >
        <img src={automation} alt="Norway" className={style.solutionsImg} />

        <div class="w3-container">
          <p className={style.solutionsText}>
          {t('solutii.automation_long_description')}
          </p>
          <div class="w3-row"></div>
        </div>
      </div>
      <div
        class="w3-card-4 w3-margin w3-white"
        id="IToptimization"
        className={style.div}
      >
        <img src={optimisation} alt="Norway" className={style.solutionsImg} />
        <div class="w3-container">
          <p className={style.solutionsText}>
          {t('solutii.optimisation_long_description')}

          </p>
          <div class="w3-row"></div>
        </div>
      </div>
      <CookiePopUp></CookiePopUp>

      <Footer></Footer>
    </>
  );
}

export default Solutii;
