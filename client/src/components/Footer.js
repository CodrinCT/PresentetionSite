import { style } from "@mui/system";
import { Link } from "react-router-dom";
import styled from "styled-components";
import footerImg from "../images/top.jpg";

export default function Footer() {
  return (
    <FooterParent>
    
      <LinksDiv>
        <Link style={{ color: "white", padding: "20px" }} to="/privecy">
          GDPR
        </Link>
        <Link
          style={{ color: "white", padding: "20px" }}
          to="/termeni_si_conditii"
        >
          Termeni si Conditii
        </Link>
        <Link style={{ color: "white", padding: "20px" }} to="/cookies">
          Cookies
        </Link>
      </LinksDiv>
      <MidleDiv>
        <InfoDiv>
          <p style={{ color: "white", margin: "0",fontSize:'25px', paddingBottom:'10px'}}>
            {"TYRBUL SOLUTIONS SRL "}
          </p>
        </InfoDiv>
        <CopyRightDiv>
          <p style={{ color: "white", fontSize: "12px"}}>
            @2021 ALL RIGHTS RESERVED TO TYRBUL SOLUTIONS
          </p>
        </CopyRightDiv>
      </MidleDiv>
      
      <ContactDiv>
      <CategoryContactDiv>
              <ContactTitle>Locatie:</ContactTitle>
              <ParamContact style={{ color: "white"}}>Iasi, Vasile Conta 42, 700380 </ParamContact>
            </CategoryContactDiv>
            <CategoryContactDiv>
              <ContactTitle >Email de contact:</ContactTitle>
              <ParamContact style={{ color: "white" }}>contact@tyrbul.com</ParamContact>
            </CategoryContactDiv>
            <CategoryContactDiv>
              <ContactTitle >Program:</ContactTitle>
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

`

const MidleDiv = styled.div`
flex-direction: column;
justify-content: space-evenly;
width: 50rem;
`

const ContactTitle= styled.h2`
font-size: 20px;
color: white;
`

const CategoryContactDiv= styled.div`
display: flex;
flex-direction: row;
justify-content: right;
margin-right: 2rem;
align-items: center;
padding-bottom: 2rem;
`
const ParamContact = styled.p`
padding-left: 5px;
font-size: 18px;

`

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
  padding: 50px 0 25px 0;
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
  margin-top: 15px;
  font-size: 15px;
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
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
