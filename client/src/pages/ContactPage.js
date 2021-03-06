import NavigationBar from "../components/navigation/nav_bar";
import style from "../styles/contact/ContactPage.module.css";
import Form from "../components/overlay/Form";
import image1 from "../images/pexels-peter-olexa-4012966.jpg";
import styled from "styled-components";
import { useState } from "react";
import CookiePopUp from "../components/CookiePopUp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t, i18n } = useTranslation();

  // const changeLanguage= (language)=>{
  // i18n.changeLanguage(language)
  // }
  return (
    <>
      <NavigationBar></NavigationBar>

      <Page className={style.page}>
        <img src={image1} className={style.img} alt="contact page"></img>
        <div id="contact" className={style.contactDiv}>
          <div className={style.extra_info}>
            <div className={style.extra_info_specific}>
              <Title>{t("contact.contact_info.loactie")}</Title>
              <p style={{ color: "white" }}>Iasi, Vasile Conta 42, 700380 </p>
            </div>
            <div className={style.extra_info_specific}>
              <Title>{t("contact.contact_info.contact_email")}</Title>
              <p style={{ color: "white" }}>contact@tyrbul.com</p>
            </div>
            <div className={style.extra_info_specific}>
              <Title>{t("contact.contact_info.program.title")}</Title>
              <p style={{ color: "white" }}>
                {t("contact.contact_info.program.week_time")}
                <br></br>
                {t("contact.contact_info.program.Weekend")}
              </p>
            </div>
          </div>
          <div className={style.line}>
            <Form></Form>
          </div>
        </div>
        <CookiePopUp></CookiePopUp>
      </Page>
    </>
  );
}

export default ContactPage;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 1200px) {
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 25px;
  color: white;
`;
