import { keyframes } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;600&display=swap');
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap');
</style>;
export default function CookiePopUp(props) {
  const [isOn, setOnOff] = useState(false);
  function tooglePopup() {
    setOnOff(false);
  }
  window.addEventListener("load", () => {
    setOnOff(true);
  });
  return (
    // <div>
    <>
      {isOn && (
        <PopUpDiv>
          <ContentDiv>
            <Content>
              Acest website foloseste cookies pentru a asigura cea mai buna
              experienta pe website-ul nostru.<br></br>
              <Link
                to="/cookies"
                style={{
                  color: "#afafaf",
                  fontSize:'0.5rem'
                }}
              >
                Mai multe informatii
              </Link>
            </Content>
            <AcceptBtn onClick={tooglePopup}>Accept</AcceptBtn>
          </ContentDiv>
        </PopUpDiv>
      )}
    </>
  );
}
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

`;
const PopUpDiv = styled.div`
  display: flex;
  position: fixed;
  width: 40%;
  height: fit-content;
  border: none;
  /* padding: 10px; */
  animation: ${bounceAnim} 1000ms linear both;
  /* top: 40%;
  left: 38%;
  transform: translate(-50% ,-50%); */
  bottom:  5%;
  left: 19%;
  z-index: 3;
  @media screen and (max-width: 600px) {
    width: 50%;
    font-size: 10px;
    top: 40%;
  left: 30%;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  width: 40%;

  @media screen and (max-width: 600px) {
    width: 90%;
    font-size: 10px;
  }
`;

const Content = styled.p`
  font-family: "Roboto";
  font-weight: 300;
  font-size: 10px;
  color: white !important;
  width: 90%;
  text-align: center;
  line-height: 16px;

  @media screen and (max-width: 600px) {
    width: 90%;
    font-size: 8px;
  }
`;

const AcceptBtn = styled.button`
  width: fit-content;
  height: fit-content;
  background: transparent;
  border: none;
  border-radius: 5px;
  border-bottom: 4px solid #2b8bc6;
  color: #fbfbfb;
  font-family: "Roboto";
  text-shadow: none;
  font-size: 8px !important;
  font-weight: 700;
  margin-top: 5px;
  margin-right: 35px;
  padding: 5px 7px;
  text-align: center;
  box-shadow: 0px 1.5px 0px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  :hover {
    background-color: transparent;
    box-shadow: none;
    color: white;
  }

  @media (max-width:500px){
    font-size: 0.3rem !important;
  }
`;
