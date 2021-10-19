import NavigationBar from "../components/navigation/nav_bar";
import linuxPhoto1 from "../images/gabriel-heinzer-4Mw7nkQDByk-unsplash (2).jpg";
import linuxPhoto2 from "../images/linuxImg2.jpg";
import linuxPhoto3 from "../images/linuxImg3.jpg";
import cloudImg1 from "../images/cloud-software.jpg";
import cloudImg2 from "../images/R.jpg";
import cloudImg3 from "../images/R221.jpg";
import consultImg1 from "../images/lagos-techie-IgUR1iX0mqM-unsplash (1).jpg";
import consultImg2 from "../images/pexels-michael-burrows-7129717 (2).jpg";
import consultImg3 from "../images/pexels-shvets-production-7176319 (1).jpg";
import storage1 from "../images/carlos-gonzalez-MmYtZoZ8ET4-unsplash (1).jpg";
import storage2 from "../images/pexels-pixabay-270410 (1).jpg";
import storage3 from "../images/science-in-hd-iPrjQEDnNEY-unsplash (1).jpg";
import CookiePopUp from "../components/CookiePopUp";
import "../styles/servicii/cardfliping.scss";
import styled from "styled-components";
import Footer from "../components/Footer";
import headerImg from "../images/pexels-kindel-media-7688336.jpg";
import { useTranslation } from "react-i18next";
<style>
  @import
  url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
</style>;
function Servicii() {
  const {t} = useTranslation()
  return (
    <>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <CardsDiv style={{ justifyContent: "center" }}>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.platforme_linux_subtitle')}</h2>
              <h1 class="title">{t('servicii.enterprise_linux_title1')}</h1>
              <img class="image" src={linuxPhoto1} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">
                {" "}
                <h3 class="synopsis">{t('servicii.description_title')}</h3>
              </h3>
              <CardDescription>
              {t('servicii.enterprise_linux_description')}
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.platforme_linux_subtitle')}</h2>
              <h1 class="title">OpenStack Platform</h1>
              <img class="image" src={linuxPhoto2} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">
                {" "}
                <h3 class="synopsis">{t('servicii.description_title')}</h3>
              </h3>
              <CardDescription>
              {t('servicii.enterprise_linux_description2')}
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.platforme_linux_subtitle')}</h2>
              <h1 class="title">Sattelite</h1>
              <img class="image" src={linuxPhoto3} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title')}</h3>
              <CardDescription>
              {t('servicii.enterprise_linux_description3')}

              </CardDescription>
            </div>
          </div>
        </div>
      </CardsDiv>
      <CardsDiv style={{ justifyContent: "center" }}>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.cloud_computing_subtitle')}</h2>
              <h1 class="title">OpenShift</h1>
              <img class="image" src={cloudImg1} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title')}</h3>
              <CardDescription>
              {t('servicii.cloud_computing_description')}
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.cloud_computing_subtitle')}</h2>
              <h1 class="title">Directory Server</h1>
              <img class="image" src={cloudImg2} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title2')}</h3>
              <CardDescription>
              {t('servicii.cloud_computing_description2')}
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.cloud_computing_subtitle')}</h2>
              <h1 class="title">Quay</h1>
              <img class="image" src={cloudImg3} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title3')}</h3>
              <CardDescription>
              {t('servicii.cloud_computing_description3')}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardsDiv>
      <CardsDiv style={{ justifyContent: "center" }}>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.consultare_subtitle')}</h2>
              <h1 class="title">{t('servicii.consultare_title')}</h1>
              <img class="image" src={consultImg1} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title')}</h3>
              <CardDescription>
              {t('servicii.consultare_description1')}
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.consultare_subtitle')}</h2>
              <h1 class="title">{t('servicii.consultare_title2')}</h1>
              <img class="image" src={consultImg2} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title')}</h3>
              <CardDescription>
              {t('servicii.consultare_description12')}
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.consultare_subtitle')}</h2>
              <h1 class="title">{t('servicii.consultare_title3')}</h1>
              <img class="image" src={consultImg3} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title')}</h3>
              <CardDescription>
              {t('servicii.consultare_description3')}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardsDiv>
      <CardsDiv style={{ justifyContent: "center" }}>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.storage_title')}</h2>
              <h1 class="title">{t('servicii.storage_subtitle')}</h1>
              <img class="image" src={storage1} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title')}</h3>
              <CardDescription>
              {t('servicii.storage_description')}
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.storage_title')}</h2>
              <h1 class="title">{t('servicii.storage_subtitle2')}</h1>
              <img class="image" src={storage2} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title')}</h3>
              <CardDescription>
              {t('servicii.storage_description2')}
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">{t('servicii.storage_title')}</h2>
              <h1 class="title">{t('servicii.storage_subtitle3')}</h1>
              <img class="image" src={storage3} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">{t('servicii.description_title')}</h3>
              <CardDescription>
              {t('servicii.storage_description3')}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardsDiv>
      <CookiePopUp></CookiePopUp>
      <Footer></Footer>
    </>
  );
}

const CardsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Header = styled.div`
  background-image: url(${headerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25rem;
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const HeaderParaph = styled.p`
  font-size: 25px;
  color: #f2583d;
`;
const HeaderH = styled.h1`
  color: #f2583d;
  font-size: 75px;
  font-weight: 700;
  padding: 20px;
  font-family: "Roboto";
`;

const CardDescription = styled.p`
  color: white;
  font-family: "Roboto";
`;

export default Servicii;
