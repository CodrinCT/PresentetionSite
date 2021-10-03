import NavigationBar from "../components/navigation/nav_bar";
import style from "../styles/about_us.module.css";
import headPhoto from "../images/pexels-mikhail-nilov-7988114.jpg";
import styled from "styled-components";
function Despre() {
  return (
    <>
      <div className={style.page}>
        <NavigationBar></NavigationBar>
        <ImgDiv>
          <HeadImage src={headPhoto}></HeadImage>
        </ImgDiv>

        <div className={style.body}>
          {/* <div className={style.picture}></div> */}
          <div className={style.infoDiv}>
            <h1 className={style.h}>Bine ai venit la TYRBUL SOLUTION</h1>
            <p className={style.misionText}>
              TYRBUL SOLUTION SRL este un proiect Start-UP Nation, fondat de o
              echipă de profesioniști, scopul nostru fiind soluționarea
              problemelor. Suntem un vis devenit realitate, în momentul fondării
              știam ca pe piața Software din Romănia este un loc lipsă pe care
              am reușit să-l umplem.
            </p>
            <p className={style.misionText}>
              Angajamentul față de profesionism, încredere, transparență,
              integritatea și dedicarea, sunt doar câteva din atributele care ne
              definesc ca oameni, echipă și business.
            </p>
            <p className={style.misionText}>
              Pentru noi facerea de bine este prima pe lista urmata de calitate
              si promtitudine. Stim ca in situatia globala actuala lucrurile nu
              par atat de insorite insa trebuie sa speram ca intr-o buna zi
              lucrurile se vor indrepta.{" "}
            </p>
          </div>
          <div className={style.infoDiv}>
            <h2 className={style.h}>MISIUNEA NOASTRA </h2>
            <p className={style.misionText}>
              Înțelegem clar că toate peisajele clienților nu sunt de același
              fel. De aceea, metodologia de aprovizionare cuprinde o soluție
              clară special concepută pentru a aborda problemele clienților.
            </p>
            <p className={style.misionText}>
              Oferim o abordare pe etape față de factorii motori ai afacerii
              dvs. și ajutăm organizațiile IT să își alinieze obiectivele cu
              viziunea generală a afacerii
            </p>
          </div>
        </div>
      </div>
      <footer className={style.footer}>
        <p style={{ color: "white", fontSize: "20px", margin: "0" }}>
          {"TYRBUL SOLUTIONS SRL "}
        </p>
        <p style={{ color: "white", fontSize: "20px", margin: "0" }}>
          RO39758389
        </p>
        @2020 ALL RIGHTS RESERVED TO TYRBUL SOLUTIONS
      </footer>
    </>
  );
}
const ImgDiv = styled.div`
  width: 100%;
  height: 700px;
`;
const HeadImage = styled.img`
  /* object-fit: contain; */
  height: 700px;
  object-fit: cover;
`;
export default Despre;
