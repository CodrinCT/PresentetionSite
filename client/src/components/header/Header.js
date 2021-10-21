import HeaderBackground from "./HeaderBackground";
import Title from "./Title";
import React from "react";
import style from "../../styles/home/header.module.css";
import NavigationBar from "../navigation/nav_bar";


export default function Header(props) {
  return (
    <div className={style.header}>
      <HeaderBackground>
        <NavigationBar iconColor={props.iconColor} ></NavigationBar>
        <Title></Title>
      </HeaderBackground>

    </div>
  );
}
