import style from "../../styles/header/contact.module.css";
import overlay from "../../styles/header/overlay_acivator.module.css";
import styleForm from "../../styles/header/form.module.css";
import Form from "./Form";

export default function Contact() {
  return (
    <>
      {/* The background div */}
      <div className={overlay.overlayDiv}>
        <div className={style.contactDiv}>
          <div className={style.extra_info}>
            <div className={style.extra_info_specific}>
              <h2 className={style.infoTitle}>Locatie</h2>
              <p style={{ color: "white" }}>Iasi, Vasile Conta 42, 700380 </p>
            </div>
            <div className={style.extra_info_specific}>
              <h2 className={style.infoTitle}>Email de contact</h2>
              <p style={{ color: "white" }}>contact@tyrbul.com</p>
            </div>
            <div className={style.extra_info_specific}>
              <h2 className={style.infoTitle}>Program</h2>
              <p style={{ color: "white" }}>
                Luni-Vineri - 10 AM – 7 PM Sambata-Duminica - Inchis
              </p>
            </div>
          </div>
          <div className={style.line}></div>
          <form className={styleForm.form}>
            <div className={styleForm.input_div}>
              <input type="text" placeholder="Numele dumneavostra"></input>
              <input type="email" placeholder="Email-ul dumneavostra"></input>
            </div>
            {/* <div className={style.textareaDiv}> */}
            <textarea placeholder="Mesajul dumneavostra" rows="5"></textarea>
            {/* </div> */}
            <button>TRIMITE</button>
          </form>
        </div>
      </div>

      {/* The contact div */}
    </>
  );
}
