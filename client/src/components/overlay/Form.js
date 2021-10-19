import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import style from "../../styles/home/form.module.css";
require("dotenv").config();
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMail] = useState(false);
  const [error, setError] = useState(null);

  function submitHandler(event) {
    event.preventDefault();
    const API_PATH = `/contact`;

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
  console.log(mailSent);

  const{t} = useTranslation()

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div className={style.input_div}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder={t('contact.form.name')}
          required
        ></input>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder={t('contact.form.email')}
          required
        ></input>
      </div>
      <textarea
        placeholder={t('contact.form.textarea')}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        rows="5"
        required
      ></textarea>
      <button>{t('contact.form.button')}</button>
      <div>
        {mailSent && (
          <div style={{ marginTop: "40px", fontSize: "30px", color: "green" }}>
            {t('contact.form.email_message')}
          </div>
        )}
      </div>
    </form>
  );
}
