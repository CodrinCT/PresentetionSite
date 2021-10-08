import NavigationBar from "../components/navigation/nav_bar";
import style from "../styles/despre_noi/about_us.module.css";

import styled from "styled-components";
import Footer from "../components/Footer";
// import '../styles/about_us_card.css'
function Despre() {
  return (
    <>
      <div className={style.page}>
        <NavigationBar></NavigationBar>
        <div className={style.body}>
          <div className={style.infoDiv}>
            <h1 className={style.h}>Bine ai venit la TYRBUL SOLUTIONS</h1>
            <ul className={style.tilesWrap}>
          <li>
            <h2 className={style.h}>01</h2>
          
            <p>
            TYRBUL SOLUTION SRL este un proiect Start-UP Nation, fondat de o
              echipă de profesioniști, scopul nostru fiind soluționarea
              problemelor. Suntem un vis devenit realitate, în momentul fondării
              știam ca pe piața Software din Romănia este un loc lipsă pe care
              am reușit să-l umplem.
            </p>
          
          </li>
          <li>
            <h2 className={style.h}>02</h2>
         
            <p>
            Angajamentul față de profesionism, încredere, transparență,
              integritatea și dedicarea, sunt doar câteva din atributele care ne
              definesc ca oameni, echipă și business.
            </p>
           
          </li>
          <li>
            <h2 className={style.h}>03</h2>
            <p>
            Pentru noi facerea de bine este prima pe lista urmata de calitate
              si promtitudine. Stim ca in situatia globala actuala lucrurile nu
              par atat de insorite insa trebuie sa speram ca intr-o buna zi
              lucrurile se vor indrepta.
            </p>
           
          </li>
      </ul>
          </div>
          <div className={style.infoDiv}>
            <h2 className={style.h}>MISIUNEA NOASTRA </h2>
                <ul className={style.tilesWrap}>
                <li>
                  <h2 className={style.h}>01</h2>
                
                  <p>
                  Înțelegem clar că toate peisajele clienților nu sunt de același
                    fel. De aceea, metodologia de aprovizionare cuprinde o soluție
                    clară special concepută pentru a aborda problemele clienților.
                  </p>
                
                </li>
                <li>
                  <h2 className={style.h}>02</h2>
              
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
       
      <Footer></Footer>
    </>
  );
}
export default Despre;
