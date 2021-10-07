import { useState } from "react";
import Header from "../components/header/Header";
import CookiePopUp from "../components/CookiePopUp";
function Home() {
  const [isOn, setOnOff] = useState(false);
  window.addEventListener("load", () => {
    setOnOff(!isOn);
  });

  function tooglePopup() {
    setOnOff(!isOn);
  }

  return (
    <>
      {isOn && (
        <CookiePopUp
          content={
            <>
              <p>
                Note: this site uses cookies to provide necessary website
                functionality, improve your experience and analyze our traffic.
                By using our website, you agree to our Privacy Policy and our
                Cookies Policy.
              </p>
            </>
          }
          handleClose={tooglePopup}
        ></CookiePopUp>
      )}

      <Header></Header>
    </>
  );
}

export default Home;
