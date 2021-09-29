import { Link } from "react-router-dom";
import style from "../../styles/header/overlay_acivator.module.css";
import { Offcanvas, Button } from "react-bootstrap";
import { useState } from "react";
import Team from "./Meet_Team";

function OverlayActivator(props) {
  const [show, setShow] = useState(false);
  console.log(show);
  function clickHandler() {
    setShow(true);
  }

  function exitHandler(event) {
    event.preventDefault();

    setShow(false);
  }
  return (
    <>
      <div className={style.div} style={{ left: props.left }}>
        <p className={style.link} onClick={clickHandler}>
          {props.text}
        </p>
      </div>
      {show ? <Team /> : null}
      {show ? (
        <button className={style.exitBtn} onClick={exitHandler}>
          X
        </button>
      ) : null}
    </>
  );
}

export default OverlayActivator;
