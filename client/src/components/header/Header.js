import HeaderBackground from "./HeaderBackground";
import Title from "./Title";
import React from "react";
import style from "../../styles/home/header.module.css";
import NavigationBar from "../navigation/nav_bar";


export default function Header(props) {
  return (
    <div className={style.header}>
      <HeaderBackground>
        <NavigationBar iconColor={props.iconColor} backgroundColor="transparent"></NavigationBar>

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

    </div>
  );
}
