
import { Link } from "react-router-dom";
import styled from "styled-components";
import footerImg from "../images/top.jpg";
import logo from "../images/loho.png";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./navigation/Languagechanger";
export default function Footer() {
  const {t} = useTranslation()

  return (
    <FooterParent>
      <MidleDiv>
        <CopyRightDiv>
        <LogoImg src={logo} />
          <InfoDiv>
            <FooterCompanyNameParam>
              TYRBUL SOLUTIONS SRL
            </FooterCompanyNameParam>
          </InfoDiv>
        </CopyRightDiv>
      </MidleDiv>
      <LinksDiv>
      <NavigationLinksDiv>
          <LinksList>
          <Linkstext to="/">{t('acasa.acasa_link')}</Linkstext>
          <Linkstext to="/servicii">{t('acasa.servicii_link')}</Linkstext>
          <Linkstext to="/solutii">{t('acasa.solutii_link')}</Linkstext>
          <Linkstext to="/despre_noi">{t('acasa.despre_noi_link')}</Linkstext>
          <Linkstext to="/contact">{t('acasa.contact_link')}</Linkstext>
          </LinksList>
        </NavigationLinksDiv>
        <ExtraInfoLinksDiv>
          <Linkstext to="/privecy">{t('legal_stuff_links.GDPR')}</Linkstext>
          <Linkstext to="/termeni_si_conditii">{t('legal_stuff_links.termeni_codnitii')}</Linkstext>
          <Linkstext to="/cookies">Cookies</Linkstext>
        </ExtraInfoLinksDiv>
      </LinksDiv>
      <CopyRightParam>
        @2021 ALL RIGHTS RESERVED TO TYRBUL SOLUTIONS
      </CopyRightParam>
    </FooterParent>
  );
}

const ContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    align-items: center;
    margin: 0;
    padding-top: 1rem;
  }
`;

const MidleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-bottom: 2rem;
`;

const ContactTitle = styled.h2`
  font-size: 0.9rem;
  color: white;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const CategoryContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`;
const ParamContact = styled.p`
  padding-left: 5px;
  font-size: 0.8rem;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const FooterParent = styled.footer`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${footerImg});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 40px 0 20px 0;
  height: fit-content;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
    height: 100%;
  }
`;
const LinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
    margin: 0;
  }
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: fit-content;
  font-size: 15px;
  text-align: center;

  @media (max-width: 500px) {
    padding-bottom: 0;
  }
`;

const CopyRightDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 5rem;
  height: 5rem;

  @media (max-width: 500px) {
    width: 3rem;
  height: 3rem;
  }
`;

const CopyRightParam = styled.p`
  color: white;
  font-size: 0.7rem;
  text-align: right;
  margin-right: 1rem;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const FooterCompanyNameParam = styled.p`
  color: white;
  margin: 0;
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const NavigationLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    justify-content: center;
    padding-top: 0.5rem;
  }
`;
const LinksList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: row;
    font-size: 0.8rem !important;
    align-items: center;
  }
`;
const Linkstext = styled(Link)`
  color: white;
  padding: 0.5rem;
  font-size: 0.8rem;
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }

  :hover {
    color: #c9c9c4;
  }
`;

const ExtraInfoLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    padding-top: 1rem;
  padding-left:1rem;
  padding-right:1rem;

  }
`;
