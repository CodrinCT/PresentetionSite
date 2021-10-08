import HeaderBackground from "./HeaderBackground";
import Title from "./Title";
import React from "react";
import style from "../../styles/home/header.module.css";
import NavigationBar from "../navigation/nav_bar";
import OverlayActivator from "../overlay/OverlayActivator";
import Team from "../overlay/Meet_Team";
import Contact from "../overlay/Contact";
import Objective from "../overlay/Obiectivul_activitatii";
import { useState } from "react";
import CookiePopUp from "../CookiePopUp";
export default function Header() {

  const [isOn, setOnOff] = useState(false);
  function tooglePopup() {
    setOnOff(false);
  }
  window.addEventListener("load", () => {
    setOnOff(true);
  });

  
  return (
    <div className={style.header}>
      <HeaderBackground handleClose={tooglePopup}>
      <NavigationBar backgroundColor='transparent'></NavigationBar>
      {isOn && (
        <CookiePopUp
          content={
            <>
                Buna, acest site foloseste cookies pentru: a functiona optim, sa va inbunatatim experienta si pentru a ne analiza traficul.
                 Prin continuarea folosirii site-ului nostru acceptati termenii si conditiile oferite.
            </>
          }
          handleClose={tooglePopup}
        ></CookiePopUp>
      )}
      <Title></Title>
      <div className={style.options}>
      <OverlayActivator text="Cunoaste Echipa" comp={<Team></Team>}></OverlayActivator>
      <OverlayActivator
        text="Obiectivul activitatii"
       comp={<Objective></Objective>}
      ></OverlayActivator>
      <OverlayActivator text="Contacteaza-ne" comp={<Contact></Contact>}></OverlayActivator>
      </div>
     
      </HeaderBackground>
     
    </div>
  );
}
