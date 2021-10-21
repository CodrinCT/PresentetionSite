import style from "../../styles/home/contact.module.css";
import styleForm from "../../styles/home/form.module.css";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
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
  const API_PATH = `https://formsubmit.co/tapusacodrin@yahoo.ro`;

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

  const {t} = useTranslation()
  return (
    <>
      {/* The background div */}
      <div className={style.overlayDiv}>
        <div className={style.contactDiv}>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <h1
              className={style.contactTitle}
            >
              {t('contact.title')}
            </h1>
          </div>

          <div className={style.extra_info}>
            <div className={style.extra_info_specific}>
              <h2 className={style.infoTitle}>{t('contact.contact_info.loactie')}</h2>
              <p style={{ color: "white" }}>Iasi, Vasile Conta 42, 700380 </p>
            </div>
            <div className={style.extra_info_specific}>
              <h2 className={style.infoTitle}>{t('contact.contact_info.contact_email')}</h2>
              <p style={{ color: "white" }}>contact@tyrbul.com</p>
            </div>
            <div className={style.extra_info_specific}>
              <h2 className={style.infoTitle}>{t('contact.contact_info.program.title')}</h2>
              <p style={{ color: "white" }}>
              {t('contact.contact_info.program.week_time')}<br></br> {t('contact.contact_info.program.Weekend')}
              </p>
            </div>
          </div>
          {/* <div className={style.line}></div> */}
          <form className={styleForm.form} onSubmit={submitHandler}>
            <div className={styleForm.input_div}>
              <input
                type="text"
                placeholder={t('contact.form.name')}
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <input
                type="email"
                placeholder={t('contact.form.email')}
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <textarea
              placeholder={t('contact.form.textarea')}
              rows="5"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            {/* </div> */}
            <button>{t('contact.form.button')}</button>
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
                  {t('contact.form.email_message')}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
