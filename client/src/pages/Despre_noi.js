import NavigationBar from "../components/navigation/nav_bar";
import style from "../styles/despre_noi/about_us.module.css";
import { useState } from "react";
import CookiePopUp from "../components/CookiePopUp";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import '../styles/about_us_card.css'
function Despre() {
  return (
    <>
      <div className={style.page}>
        <NavigationBar></NavigationBar>
        <div className={style.body}>
          <div className={style.infoDiv}>
            <h1 className={style.h}>Despre noi si misiunea noastra</h1>
            <ul className={style.tilesWrap}>
              <li>
                <p>
                  TYRBUL SOLUTION SRL este un proiect Start-UP Nation, fondat de
                  o echipă de profesioniști, scopul nostru fiind soluționarea
                  problemelor. Suntem un vis devenit realitate, în momentul
                  fondării știam ca pe piața Software din Romănia este un loc
                  lipsă pe care am reușit să-l umplem.
                </p>
              </li>
              <li>
                <p>
                  Angajamentul față de profesionism, încredere, transparență,
                  integritatea și dedicarea, sunt doar câteva din atributele
                  care ne definesc ca oameni, echipă și business.
                </p>
              </li>
              <li>
                <p>
                  Pentru noi facerea de bine este prima pe lista urmata de
                  calitate si promtitudine. Stim ca in situatia globala actuala
                  lucrurile nu par atat de insorite insa trebuie sa speram ca
                  intr-o buna zi lucrurile se vor indrepta.
                </p>
              </li>
              <li>
                <p>
                  Înțelegem clar că toate peisajele clienților nu sunt de
                  același fel. De aceea, metodologia de aprovizionare cuprinde o
                  soluție clară special concepută pentru a aborda problemele
                  clienților.
                </p>
              </li>
              <li>
                <p>
                  Oferim o abordare pe etape față de factorii motori ai afacerii
                  dvs. și ajutăm organizațiile IT să își alinieze obiectivele cu
                  viziunea generală a afacerii
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CookiePopUp></CookiePopUp>

      <Footer></Footer>
    </>
  );
}
export default Despre;
