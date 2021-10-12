
import teamImg from '../../images/pexels-fauxels-3183150 (1).jpg'
import style from "../../styles/home/overlay_acivator.module.css";
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap');
</style>

// function useOnScreen(options) {
//   const [ref, setRef] = useState(null);
//   const [secondRef, setSecondRef] = useState(null)
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setVisible(entry.isIntersecting);
//     }, options);
//     if (ref) {
//       observer.observe(ref);
//     }
//     return () => {
//       if (ref) {
//         observer.unobserve(ref);
//       }
//     };
//   }, [ref, options]);
//   return [setRef, visible];
// }


export default function Objective(props) {

  // const [setRef, visible] = useOnScreen({ threshold: 0.5 });

  return (
    <>
    
        <div className={style.info} >
          <ObjectieDiv ref={props.ref}>
            <Img src={teamImg}/>
            <DarkDiv>
        
            <h1 >Obiectivul Activitatii</h1>
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
    
    </>
  );
}

const ObjectieDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
   justify-content:center;
   margin-top: 5rem;
margin-bottom: 5rem;
    @media screen and (max-width:600px){
    background-blend-mode:8px
}

`
const P = styled.p`
color: white;
 font-size: 30px;
  line-height: 45px;
  font-family: 'Rubik';
  width: 65%; 
  z-index: 3;
  filter: brightness(250%);
  text-align: center;
  margin-left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width:600px){
  width: 80%;
  font-size: 20px;
  line-height: 25px;

}
`
const Img = styled.img`
 height: 100%;
  width: 100%;
filter: blur(1px) ;
z-index: 0;
position: absolute;
object-fit: cover;

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
