
import teamImg from '../../images/aboutUs-objective.jpg'
import style from "../../styles/home/overlay_acivator.module.css";
import styled from 'styled-components'

<style>
  @import
  url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
</style>;




export default function Objective(props) {


  return (
    <>
    
        <div className={style.info} >
          <ObjectieDiv ref={props.ref}>
            {/* <Img src={teamImg}/> */}
            <DarkDiv>
        
            <h1 style={{marginBottom:'2rem',marginTop: '5rem'}}>Obiectivul Activitatii</h1>
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
        </div>
    
    </>
  );
}

const ObjectieDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
   justify-content:center;
   /* margin-top: 5rem;
margin-bottom: 5rem; */

    @media screen and (max-width:600px){
    background-blend-mode:8px;
    height: 100vh;
}

`
const P = styled.p`
color: white;
 font-size: 30px;
  line-height: 45px;
  font-family: 'Roboto';
  width: 65%; 
  z-index: 3;
  text-align: center;
  margin-left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width:600px){
  width: 80%;
  height: 100%;
  font-size: 20px;
  line-height: 25px;
  transform: translate(-50%, 20%)
}
`
const Img = styled.img`
 height: 100%;
  width: 100%;
z-index: 0;
position: absolute;
object-fit: cover;

`
const DarkDiv = styled.div`
z-index: 1;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-items: right;
padding: 10px;
height: 100vh;
background-color: rgba(0,0,0, 0.3);

@media (max-width:600px){
  height: 100%;
  

}
`
