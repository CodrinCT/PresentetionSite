import styled, { keyframes } from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;600&display=swap');
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap');
</style>;
export default function CookiePopUp(props) {
  return (
    <PopUpDiv>
      <ContentDiv>
        <Content>{props.content}</Content>
        <Span onClick={props.handleClose}>X</Span>
      </ContentDiv>
    </PopUpDiv>
  );
}

const movementRight = keyframes`
0%{
    transform: translateX(-100%);
}
100%{
    transform: translateX(0%);
}
`;

const movementUpDown = keyframes`
from{
    width:fit-content;
    height:fit-content;
}
to{
    width:30px;
    height:30px;
}
`;
const PopUpDiv = styled.div`
  background-color: white;
  border-color: black;
  border-style: solid;
  border-width: 2px;
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  /* top: 25%; */
  /* width: 65%; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  animation: ${movementRight} 4s ease-in;
  height: fit-content;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-align: center;
  align-items: left;
`;

const Span = styled.span`
  cursor: pointer;
  font-size: 20px;
  background-color: red;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 700;
  animation: ${movementUpDown} 5s ease-in;
`;
const Content = styled.p`
  font-family: "Roboto+Mono";
  font-weight: 300;
  font-size: 25px;
`;
