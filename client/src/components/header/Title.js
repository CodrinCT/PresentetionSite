import styled from "styled-components";
import style from "../../styles/home/title.module.css";
import { useHistory } from "react-router-dom";
export default function Title() {
  const history = useHistory();
  function buttonHandler() {
    history.push("/despre_noi");
  }
  return (
    <div className={style.Title}>
      <h1 className={style.h}>
        Solutii, Rezultate, Calitate! 
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
font-size: 1.2rem;
text-align: left;
padding-left: 50px;



@media screen and (max-width:350px){
  display: none;
} 
`