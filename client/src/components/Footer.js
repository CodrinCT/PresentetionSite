import { style } from "@mui/system";
import { Link } from "react-router-dom";
import styled from "styled-components";
import footerImg from "../images/top.jpg";
import logo from "../images/loho.png";
import Links from "./navigation/Links";
import linksStyle from "../styles/navigation/list.module.css";
export default function Footer() {
  return (
    <FooterParent>
     

      <MidleDiv>
        <CopyRightDiv>
          <InfoDiv>
            <FooterCompanyNameParam>
              TYRBUL SOLUTIONS SRL
            </FooterCompanyNameParam>
          </InfoDiv>
          <LogoImg src={logo} />
         
        </CopyRightDiv>

      </MidleDiv>

      <ContactDiv>
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
      </ContactDiv>
      <LinksDiv>
      
      <NavigationLinksDiv>
      <ExtraInfoLinksDiv>
    <Linkstext to="/privecy">GDPR</Linkstext>
      <Linkstext to="/termeni_si_conditii">Termeni si Conditii</Linkstext>
      <Linkstext to="/cookies">Cookies</Linkstext>
    </ExtraInfoLinksDiv>
        <LinksList>
          <li>
            <Linkstext to="/">Acasa</Linkstext>
          </li>
          <li>
            <Linkstext to="/servicii">Servicii</Linkstext>
          </li>
          <li>
            <Linkstext to="/solutii">Solutii</Linkstext>
          </li>
          <li>
            <Linkstext to="/despre_noi">Despre Noi</Linkstext>
          </li>
          <li>
            <Linkstext to="/contact">Contact</Linkstext>
          </li>
        </LinksList>
      </NavigationLinksDiv>
    </LinksDiv>
     
    <CopyRightParam>
            @2021 ALL RIGHTS RESERVED TO TYRBUL SOLUTIONS
          </CopyRightParam>

    </FooterParent>
  );
}

const ContactDiv = styled.div`
grid-row: 2;
border: solid white 5px;

grid-column-start: 1;
grid-column-end: 4;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-right: 2rem;

@media(max-width:500px){
  align-items: center;
  margin: 0;
  padding-top: 1rem;
}

`;

const MidleDiv = styled.div`
grid-column-start: 1;
grid-column-end: 4;
grid-row: 1;
border: solid white 5px;

  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

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
  justify-content: right;
  align-items: center;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`;
const ParamContact = styled.p`
  padding-left: 5px;
  font-size: 1rem;

  @media (max-width:500px){
    font-size: 0.8rem;
  }
`;

const FooterParent = styled.footer`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  grid-row: 3;
  grid-column-start: 1;
  grid-column-end: 4;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  font-size: 15px;
  margin-left: 2rem;
  border: solid white 5px;

  @media (max-width: 500px) {
    flex-direction: column;
    margin: 0;
  }
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  text-align: center;
  padding-bottom: 4rem;

  @media (max-width: 500px) {
    padding-bottom: 0;
  }
`;

const CopyRightDiv = styled.div`
grid-column: 1;
grid-row-start: 1;
grid-row-end: 4;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 5rem;
  height: 5rem;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-bottom: 5rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

const CopyRightParam = styled.p`
grid-column: 4;
grid-row: 4;
  color: white;
  font-size: 0.7rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

const CopyRightParamSmallWidth =  styled.p`
display: none;
color: white;
font-size: 0.5rem;

@media (max-width:500px){
  display: inline;
}
`
const FooterCompanyNameParam = styled.p`
  color: white;
  margin: 0;
  font-size: 25px;
  padding-bottom: 10px;

  @media (max-width: 500px) {
    font-size: 1rem;
    padding-top: 2rem;
  }
`;

const NavigationLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  justify-content: left;

  @media (max-width: 500px) {
    justify-content: center;
    padding-top: 0.5rem;
  }
`;
const LinksList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  justify-content: left;

  @media (max-width: 500px) {
    flex-direction: row;
    font-size: 0.8rem !important;
    align-items: center;
  }
`;
const Linkstext = styled(Link)`
  color: white;
  padding: 2px;
  font-size: 1rem;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }

  :hover{
    color:#c9c9c4;
  }

`;

const ExtraInfoLinksDiv = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  
@media (max-width:500px){
flex-direction: row;
padding-top: 1rem;
}

`