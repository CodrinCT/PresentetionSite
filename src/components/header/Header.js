import HeaderBackground from "./HeaderBackground";
import Title from "./Title";
import React from "react";
import style from "../../styles/header/header.module.css";
import NavigationBar from "../navigation/nav_bar";
import OverlayActivator from "../overlay/OverlayActivator";
import Team from "../overlay/Meet_Team";
import Contact from "../overlay/Contact";
import Objective from "../overlay/Obiectivul_activitatii";
export default function Header() {
  return (
    <div className={style.header}>
      <HeaderBackground>
      <NavigationBar></NavigationBar>
      <Title></Title>
      <OverlayActivator text="Cunoaste Echipa" left="20%" comp={<Team></Team>}></OverlayActivator>
      <OverlayActivator
        text="Obiectivul activitatii"
        left="45%"
       comp={<Objective></Objective>}
      ></OverlayActivator>
      <OverlayActivator text="Contacteaza-ne" left="70%"  comp={<Contact></Contact>}></OverlayActivator>
      </HeaderBackground>
     
    </div>
  );
}
