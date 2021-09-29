import HeaderImage from "./Header_img";
import Title from "./Title";
import React from "react";
import style from "../../styles/header/header.module.css";
import NavigationBar from "../navigation/nav_bar";
import OverlayActivator from "../meet_the_team/OverlayActivator";
export default function Header() {
  return (
    <div className={style.header}>
      <HeaderImage></HeaderImage>
      <NavigationBar></NavigationBar>
      <Title></Title>
      <OverlayActivator text="Cunoaste Echipa" left="20%"></OverlayActivator>
      <OverlayActivator
        text="Obiectivul activitatii"
        left="45%"
      ></OverlayActivator>
      <OverlayActivator text="Contacteaza-ne" left="70%"></OverlayActivator>
    </div>
  );
}
