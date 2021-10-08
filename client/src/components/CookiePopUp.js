import { keyframes } from "styled-components";
import styled from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;600&display=swap');
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap');
</style>;
export default function CookiePopUp(props) {
  return (
    // <div>
 <PopUpDiv>
      <ContentDiv>
        <Content>{props.content}</Content>
      </ContentDiv>
    </PopUpDiv>
   
   
  );
}

// const fadeIn = keyframes`
// 0%{
//   opacity:0;
// }
// 100%{
//   opacity:1;

// }
// `;
/* 
const movementUpDown = keyframes`
from{
    width:fit-content;
    height:fit-content;
}
to{
    width:30px;
    height:30px;
}
`; */
const bounceAnim = keyframes`

  0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  3.4% { transform: matrix3d(1.316, 0, 0, 0, 0, 1.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  4.7% { transform: matrix3d(1.45, 0, 0, 0, 0, 1.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  6.81% { transform: matrix3d(1.659, 0, 0, 0, 0, 1.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  9.41% { transform: matrix3d(1.883, 0, 0, 0, 0, 2.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  10.21% { transform: matrix3d(1.942, 0, 0, 0, 0, 2.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  13.61% { transform: matrix3d(2.123, 0, 0, 0, 0, 2.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  14.11% { transform: matrix3d(2.141, 0, 0, 0, 0, 2.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  17.52% { transform: matrix3d(2.208, 0, 0, 0, 0, 2.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.72% { transform: matrix3d(2.212, 0, 0, 0, 0, 2.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  21.32% { transform: matrix3d(2.196, 0, 0, 0, 0, 2.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  24.32% { transform: matrix3d(2.151, 0, 0, 0, 0, 1.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  25.23% { transform: matrix3d(2.134, 0, 0, 0, 0, 1.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.03% { transform: matrix3d(2.063, 0, 0, 0, 0, 1.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.93% { transform: matrix3d(2.048, 0, 0, 0, 0, 1.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  35.54% { transform: matrix3d(1.979, 0, 0, 0, 0, 1.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  36.74% { transform: matrix3d(1.972, 0, 0, 0, 0, 1.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  41.04% { transform: matrix3d(1.961, 0, 0, 0, 0, 2.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  44.44% { transform: matrix3d(1.966, 0, 0, 0, 0, 2.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  52.15% { transform: matrix3d(1.991, 0, 0, 0, 0, 2.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  59.86% { transform: matrix3d(2.006, 0, 0, 0, 0, 1.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  63.26% { transform: matrix3d(2.007, 0, 0, 0, 0, 1.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  75.28% { transform: matrix3d(2.001, 0, 0, 0, 0, 2.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  85.49% { transform: matrix3d(1.999, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  90.69% { transform: matrix3d(1.999, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } 

`
const PopUpDiv = styled.div`
width: 100%;
height: fit-content;
display: flex;
justify-content: center;
border: none;
  border-radius: 10px;
  padding: 10px;
  animation: ${bounceAnim} 1000ms linear both;
  

  @media screen and (max-width:600px){
    
  }
  
`;

const ContentDiv = styled.div`
  display: flex;
  padding: 15px;
  align-content: center;
  justify-content: center;
  background-color: rgba(4, 95, 129, 0.7);
  width: 65%;
`;

/* const Span = styled.span`
  cursor: pointer;
  font-size: 20px;
  background-color: red;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 10px;
  text-align: left;
  font-weight: 700;
  animation: ${movementUpDown} 5s ease-in;
`; */
const Content = styled.p`
  font-family: "Roboto+Mono";
  font-weight: 300;
  font-size: 20px;
  color: white !important;
  width: 60%;
  text-align: center;
`;



// .animation-target {
//   animation: animation 1000ms linear both;
// }




