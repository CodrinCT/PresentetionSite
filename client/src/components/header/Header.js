import HeaderBackground from "./HeaderBackground";
import Title from "./Title";
import React from "react";
import style from "../../styles/home/header.module.css";
import NavigationBar from "../navigation/nav_bar";
import OverlayActivator from "../overlay/OverlayActivator";
import Team from "../overlay/Meet_Team";
import Contact from "../overlay/Contact";
import Objective from "../overlay/Obiectivul_activitatii";
import img1 from "../../images/featured-1.jpg"
import img2 from "../../images/featured-2.jpg"
import img3 from "../../images/featured-3.jpg"


import CookiePopUp from "../CookiePopUp";
export default function Header() {

 

  
  return (
    <div className={style.header}>
      <HeaderBackground>
      <NavigationBar backgroundColor='transparent'></NavigationBar>
      
      <Title></Title>
     
      
      {/* <div className={style.options}>
      <OverlayActivator text="Cunoaste Echipa" comp={<Team></Team>}></OverlayActivator>
      <OverlayActivator
        text="Obiectivul activitatii"
       comp={<Objective></Objective>}
      ></OverlayActivator>
      <OverlayActivator text="Contacteaza-ne" comp={<Contact></Contact>}></OverlayActivator>
      </div> */}
      
      </HeaderBackground>
      <div className={style.row}>
      <div className={style.imagesDiv}>
        <div className={style.singleImgDiv}><img src={img1} className={style.singleImg}></img></div>
        <div className={style.manyImgDiv}>
          <img src={img2} className={style.manyImg}></img>
          <img src={img3} className={style.manyImg}></img>
        </div>
      </div>
      </div>
        <CookiePopUp></CookiePopUp>
    </div>
  );
}
