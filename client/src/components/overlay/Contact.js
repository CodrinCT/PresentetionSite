import style from "../../styles/home/contact.module.css";
import styleForm from "../../styles/home/form.module.css";
import { useState } from "react";
import axios from "axios";
<style>
  @import
  url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
</style>;
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMail] = useState(false);
  const [error, setError] = useState(null);
  const API_PATH = `/contact`;

  function submitHandler(event) {
    event.preventDefault();

    const formSent = {
      name,
      email,
      message,
      mailSent,
      error,
    };
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: {
        "content-type": "application/json",
      },
      data: formSent,
    })
      .then((result) => {
        if (result.status === 200) {
          setMail(true);
          setEmail("");
          setMessage("");
          setName("");
        }
      })
      .catch((error) => setError({ error: error.message }));
  }
  return (
    <>
      {/* The background div */}
      <div className={style.overlayDiv}>
        <div className={style.contactDiv}>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <h1
              className={style.contactTitle}
            >
              Contacteaza-ne oricand!
            </h1>
          </div>

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
                Luni-Vineri - 10 AM – 7 PM <br></br> Sambata-Duminica - Inchis
              </p>
            </div>
          </div>
          {/* <div className={style.line}></div> */}
          <form className={styleForm.form} onSubmit={submitHandler}>
            <div className={styleForm.input_div}>
              <input
                type="text"
                placeholder="Numele dumneavostra"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <input
                type="email"
                placeholder="Email-ul dumneavostra"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <textarea
              placeholder="Mesajul dumneavostra"
              rows="5"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            {/* </div> */}
            <button>TRIMITE</button>
            <div>
              {mailSent && (
                <div
                  style={{
                    textAlign:'center',
                    marginTop: "20px",
                    fontSize: "20px",
                    color: "green",
                  }}
                >
                  Thank you for contacting us !
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
