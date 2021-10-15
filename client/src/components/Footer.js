
import { Link } from "react-router-dom";
import styled from "styled-components";
import footerImg from "../images/top.jpg";
import logo from "../images/loho.png";

export default function Footer() {
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

      {/* <ContactDiv>
        <CategoryContactDiv>
          <ContactTitle>Locatie:</ContactTitle>
          <ParamContact style={{ color: "white" }}>
            Iasi, Vasile Conta 42, 700380{" "}
          </ParamContact>
        </CategoryContactDiv>
        <CategoryContactDiv>
          <ContactTitle>Email de contact:</ContactTitle>
          <ParamContact style={{ color: "white" }}>
            contact@tyrbul.com
          </ParamContact>
        </CategoryContactDiv>
        <CategoryContactDiv>
          <ContactTitle>Program:</ContactTitle>
          <ParamContact style={{ color: "white" }}>
            Luni-Vineri - 10 AM – 7 PM <br></br> Sambata-Duminica - Inchis
          </ParamContact>
        </CategoryContactDiv>
      </ContactDiv> */}
      <LinksDiv>
        <ExtraInfoLinksDiv>
          <Linkstext to="/">Acasa</Linkstext>
          <Linkstext to="/servicii">Servicii</Linkstext>
          <Linkstext to="/solutii">Solutii</Linkstext>
          <Linkstext to="/despre_noi">Despre Noi</Linkstext>
          <Linkstext to="/contact">Contact</Linkstext>
          <Linkstext to="/privecy">GDPR</Linkstext>
          <Linkstext to="/termeni_si_conditii">Termeni si Conditii</Linkstext>
          <Linkstext to="/cookies">Cookies</Linkstext>
        </ExtraInfoLinksDiv>
        {/* <NavigationLinksDiv>
          <LinksList>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </LinksList>
        </NavigationLinksDiv> */}
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
  /* @media (max-width: 500px) {
    order: -1;
  } */
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

  /* @media (max-width: 500px) {
    display: none;
  } */
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
    padding-top: 2rem;
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
  }
`;
