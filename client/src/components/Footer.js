import { style } from "@mui/system";
import { Link } from "react-router-dom";
import styled from "styled-components";
import footerImg from "../images/top.jpg";
import logo from '../images/loho.png'
import Links from "./navigation/Links";
export default function Footer() {
  return (
    <FooterParent>
      <LinksDiv>
        <Link
          style={{ color: "white", padding: "2px", fontSize: "0.8rem" }}
          to="/privecy"
        >
          GDPR
        </Link>
        <Link
          style={{ color: "white", padding: "2px", fontSize: "0.8rem" }}
          to="/termeni_si_conditii"
        >
          Termeni si Conditii
        </Link>
        <Link
          style={{ color: "white", padding: "2px", fontSize: "0.8rem" }}
          to="/cookies"
        >
          Cookies
        </Link>
      </LinksDiv>
      <MidleDiv>
        <InfoDiv>
          <p
            style={{
              color: "white",
              margin: "0",
              fontSize: "25px",
              paddingBottom: "10px",
            }}
          >
            {"TYRBUL SOLUTIONS SRL "}
          </p>
        </InfoDiv>
        <CopyRightDiv>
          <LogoImg src={logo}/>
          <Links></Links>
          <p style={{ color: "white", fontSize: "0.5rem" }}>
            @2021 ALL RIGHTS RESERVED TO TYRBUL SOLUTIONS
          </p>
      

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
    </FooterParent>
  );
}

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const MidleDiv = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
  width: 50rem;
`;

const ContactTitle = styled.h2`
  font-size: 0.9rem;
  color: white;
`;

const CategoryContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 2rem;
  align-items: center;
`;
const ParamContact = styled.p`
  padding-left: 5px;
  font-size: 0.8rem;
`;

const FooterParent = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background-image: url(${footerImg});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 40px 0 20px 0;
  height: 20rem;

  /* bottom: -10%; */
  width: 100%;
`;
const LinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  /* margin-top: 15px; */
  font-size: 15px;
  margin-left: 1rem;
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  text-align: center;
  /* padding-left: 30px;
padding-right: 30px; */
`;

const CopyRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items:center;
`;

const LogoImg = styled.img`
width: 64px;
height: 64px;
margin-top: 10px;
margin-bottom: 10px;
`