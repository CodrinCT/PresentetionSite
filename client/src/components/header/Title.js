import styled from "styled-components";
import style from "../../styles/home/title.module.css";
import MoreButton from "./Button";
export default function Title() {
  return (
    <div className={style.Title}>
      <h1 className={style.h}>
        Solutii, Rezultate, Calitate! 
      </h1>
      <Paragraph>TYRBUL SOLUTION SRL este un proiect Start-UP Nation,<br></br> fondat de o echipă de profesioniști, scopul nostru fiind soluționarea problemelor.</Paragraph>
      <MoreButton></MoreButton>
    </div>
  );
}

const Paragraph = styled.p`
color: white;
font-size: 15px;
margin-left: 40px;

@media screen and (max-width:350px){
  display: none;
} 
`