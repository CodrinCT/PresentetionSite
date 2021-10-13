import NavigationBar from "../components/navigation/nav_bar";
import style from "../styles/despre_noi/about_us.module.css";
import { useState } from "react";
import CookiePopUp from "../components/CookiePopUp";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Team from "../components/overlay/Meet_Team";
import Objective from "../components/overlay/Obiectivul_activitatii";
import Contact from "../components/overlay/Contact";
import { Animated } from "react-animated-css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

function Despre() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <>
      <div className={style.page}>
        <NavigationBar></NavigationBar>

      <Animated
          animationIn="slideInDown"
          animationOut="slideInDown"
          animationInDuration="infinite"
          animationOutDuration="8"
          animationInDelay="5"
        >
          {/* <div ref={ref}> */}
            <div className={style.body}>
              <h1 className={style.h}>Despre noi</h1>
            </div>
      </Animated>
            {!inView && (
              <div className={style.infoDiv}>
                <Animated animationInDelay="8" animationOut="fadeOut">
                  <ul className={style.tilesWrap}>
                    <li>
                      <p>
                        Firma noastra este un proiect Start-UP Nation, fondat de
                        o echipă de profesioniști, scopul nostru fiind
                        soluționarea problemelor. Suntem un vis devenit
                        realitate, în momentul fondării știam ca pe piața
                        Software din Romănia este un loc lipsă pe care am reușit
                        să-l umplem.
                      </p>
                    </li>
                    <li>
                      <p>
                        Angajamentul față de profesionism, încredere,
                        transparență, integritatea și dedicarea, sunt doar
                        câteva din atributele care ne definesc ca oameni, echipă
                        și business.
                      </p>
                    </li>
                    <li>
                      <p>
                        Pentru noi facerea de bine este prima pe lista urmata de
                        calitate si promtitudine. Stim ca in situatia globala
                        actuala lucrurile nu par atat de insorite insa trebuie
                        sa speram ca intr-o buna zi lucrurile se vor indrepta.
                      </p>
                    </li>
                    <li>
                      <p>
                        Înțelegem clar că toate peisajele clienților nu sunt de
                        același fel. De aceea, metodologia de aprovizionare
                        cuprinde o soluție clară special concepută pentru a
                        aborda problemele clienților.
                      </p>
                    </li>
                    <li>
                      <p>
                        Oferim o abordare pe etape față de factorii motori ai
                        afacerii dvs. și ajutăm organizațiile IT să își alinieze
                        obiectivele cu viziunea generală a afacerii
                      </p>
                    </li>
                  </ul>
              </div>
            )}
            {inView && (
              <div className={style.infoDiv}>
                <h1 className={style.h}>Despre noi si misiunea noastra</h1>
                <Animated
                  animationInDelay="8"
                  animationOut="fadeOut"
                  isVisible={false}
                >
                  <ul className={style.tilesWrap}>
                    <li>
                      <p>
                        Firma noastra este un proiect Start-UP Nation, fondat de
                        o echipă de profesioniști, scopul nostru fiind
                        soluționarea problemelor. Suntem un vis devenit
                        realitate, în momentul fondării știam ca pe piața
                        Software din Romănia este un loc lipsă pe care am reușit
                        să-l umplem.
                      </p>
                    </li>
                    <li>
                      <p>
                        Angajamentul față de profesionism, încredere,
                        transparență, integritatea și dedicarea, sunt doar
                        câteva din atributele care ne definesc ca oameni, echipă
                        și business.
                      </p>
                    </li>
                    <li>
                      <p>
                        Pentru noi facerea de bine este prima pe lista urmata de
                        calitate si promtitudine. Stim ca in situatia globala
                        actuala lucrurile nu par atat de insorite insa trebuie
                        sa speram ca intr-o buna zi lucrurile se vor indrepta.
                      </p>
                    </li>
                    <li>
                      <p>
                        Înțelegem clar că toate peisajele clienților nu sunt de
                        același fel. De aceea, metodologia de aprovizionare
                        cuprinde o soluție clară special concepută pentru a
                        aborda problemele clienților.
                      </p>
                    </li>
                    <li>
                      <p>
                        Oferim o abordare pe etape față de factorii motori ai
                        afacerii dvs. și ajutăm organizațiile IT să își alinieze
                        obiectivele cu viziunea generală a afacerii
                      </p>
                    </li>
                  </ul>
                </Animated>
              </div>
            )}
          </div>
        </Animated>
        <div ref={ref}>
          {inView && (
            <Animated
              animationIn="fadeIn"
              animationInDuration="5"
              isVisible={true}
            >
              <Objective></Objective>
            </Animated>
          )}
          {!inView && (
            <Animated
              animationOut="fadeOut"
              animationOutDuration="5"
              isVisible={false}
            >
              <Objective></Objective>
            </Animated>
          )}
        </div>
        <div ref={ref}>
          {!inView && (
            <Animated animationIn="fadeIn">
              <Team></Team>
            </Animated>
          )}
          {!inView && (
            <Animated animationOut="fadeOut" isVisible={false}>
              <Team></Team>
            </Animated>
          )}
        </div>

        <FontAwesomeIcon
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            margin: "25px",
            fontSize: "40px",
            color: "blueviolet",
            zIndex: "6",
          }}
          icon={faExclamation}
        >
          <CookiePopUp></CookiePopUp>
        </FontAwesomeIcon>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Despre;
