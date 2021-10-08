import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Footer(){
    return(
        <FooterParent >
            <InfoDiv>

            <p style={{ color: "white", margin: "0" , padding:'20px'}}>
          {"TYRBUL SOLUTIONS SRL "}
        </p>
        <p style={{ color: "white", margin: "0" , padding:'20px' }}>
          RO39758389
        </p>
            </InfoDiv>    
        <LinksDiv>
            <Link style={{ color:'white', padding:'20px'}} to='/privecy'>privecy</Link>
            <Link style={{ color:'white', padding:'20px'}} to='/termeni_si_conditii'>Termeni si Conditii</Link>
            <Link style={{ color:'white', padding:'20px'}} to='/cookies'>Cookies</Link>
        </LinksDiv>
        <CopyRightDiv>
        <p style={{color:'white', fontSize:'12px', marginLeft:'25px'}}>@2021 ALL RIGHTS RESERVED TO TYRBUL SOLUTIONS</p>
        </CopyRightDiv>

      </FooterParent>
    )
}

const FooterParent = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background-color: rgb(34, 30, 30);
  color: white;
  padding: 50px 0 25px 0;
  height: 220px;
  `
const LinksDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
margin-top: 15px;
font-size: 10px;
`
const InfoDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
font-size: 15px;
/* padding-left: 30px;
padding-right: 30px; */
`

const CopyRightDiv = styled.div`
display: flex;
flex-direction:row;
width: 100%;
justify-content: flex-start;
`