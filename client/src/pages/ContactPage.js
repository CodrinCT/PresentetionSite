import NavigationBar from "../components/navigation/nav_bar";
import style from '../styles/contact/ContactPage.module.css'
import Form from "../components/overlay/Form";
import image1 from '../images/pexels-nick-demou-2473183.jpg'
import styled from "styled-components";
import {useState} from "react"
import CookiePopUp from "../components/CookiePopUp";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
<>
    
      <NavigationBar></NavigationBar>
      <Page className={style.page}>
<img src={image1} className={style.img}></img>
{/* <a href='#contact' ><img src={arrowImg} className={style.moveDown}></img></a> */}
      <div  id='contact' className={style.contactDiv}>

        <div className={style.extra_info}>
            <div className={style.extra_info_specific}>
                <Title>Locatie</Title>
            <p style={{color:'white'}}>Iasi, Vasile Conta 42, 700380 </p>
            </div>
            <div className={style.extra_info_specific}>
                <Title>Email de contact</Title>
            <p style={{color:'white'}}>contact@tyrbul.com</p>
            </div>
            <div className={style.extra_info_specific}>
                <Title>Program</Title>
            <p style={{color:'white'}}>Luni-Vineri   - 10 AM – 7 PM <br></br>Sambata-Duminica - Inchis</p>
            </div>
        </div>
        <div className={style.line}></div>
        <Form></Form>
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
`

const Title = styled.h1`
font-size: 25px;
color: white;
`