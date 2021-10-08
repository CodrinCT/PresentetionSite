
import teamImg from '../../images/pexels-fauxels-3183150 (1).jpg'
import style from "../../styles/home/overlay_acivator.module.css";
import styled from 'styled-components'
<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap');
</style>
export default function Objective() {
  return (
    <>
      <div className={style.overlayDiv} style={{justifyContent:'center'}}>
        <div className={style.info}>
          <ObjectieDiv>
            {/* <h2 style={{ color: "black", marginBottom: "15px", textDecoration:'underline'}}>
              Obiectivul activitatii
            </h2> */}
            <Img src={teamImg}/>
            <DarkDiv>
            <P>
              Secretul succesului este echilibrul dintre a te bucura de ceea ce
              faci și a-ți asuma responsabilitatea de a o face în modul cel mai
              priceput. Dezvoltatorii noștri răspund adesea la email-urile de
              afaceri după programul de lucru, pentru a ne asigura că platforma
              dvs. software este cât se poate de bună. Ei fac acest lucru din
              pasiune și suntem mândri de dorința și dedicarea lor.
            </P>
            </DarkDiv>
           
          </ObjectieDiv>
          {/* <Img src={teamImg}></Img> */}
        </div>
      </div>
    </>
  );
}

const ObjectieDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* z-index:'3'; */
   justify-content:center;
   align-items: center;
  
    @media screen and (max-width:600px){
    background-blend-mode:8px
}

`
const P = styled.p`
color: white;
 font-size: 30px;
  line-height: 45px;
  font-family: 'Rubik';
  text-shadow: 0px 3px 2px #000000;
  width: 65%; 
  z-index: 3;
  filter: brightness(250%);

  @media screen and (max-width:600px){
  width: 80%;
  font-size: 20px;
  line-height: 25px;

}
`
const Img = styled.img`
 height: 60%;
  width: 80%;
filter: blur(1px) ;
z-index: 0;
position: absolute;
object-fit: cover;
/* filter: blur(2px); */

@media screen and (max-width:600px){
  height: 90% !important;
  width: 90% !important;
}
`
const DarkDiv = styled.div`
background-color: rgba(0,0,0, 0.4);
z-index: 1;
display: flex;
justify-content: center;
height: 100%;
align-items: center;
`
