import styled from "styled-components";
import style from "../../styles/home/title.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Title() {
  const history = useHistory();
  function buttonHandler() {
    history.push("/despre_noi");
  }
const {t, i18n} = useTranslation()

  return (
    <div className={style.Title}>
      <h1 className={style.h}>
        {/* Solutii, Rezultate, Calitate!  */}
        {t('home_title')}
      </h1>
      <Paragraph>TYRBUL SOLUTION SRL este un proiect Start-UP Nation,<br></br> fondat de o echipă de profesioniști, scopul nostru fiind soluționarea problemelor.</Paragraph>
      <button variant="info" className={style.button} onClick={buttonHandler}>
        CITESTE MAI MULT
      </button>
    </div>
  );
}

const Paragraph = styled.p`
color: white;
font-size: 1.3rem;
text-align: left;
padding-left: 50px;
filter: drop-shadow(2px 4px 6px black);


@media screen and (max-width:500px){
  display: none;
} 
`