import style from "../../styles/header/contact.module.css";
import overlay from "../../styles/header/overlay_acivator.module.css";
import styleForm from "../../styles/header/form.module.css";
import { useState } from "react";
import axios from "axios";
import env from "react-dotenv";
export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [mailSent, setMail] = useState(false)
  const [error, setError] = useState(null)
const API_PATH = `http://localhost:5001/contact`

function submitHandler(event){
event.preventDefault()

const formSent = {
  name,
  email,
  message,
  mailSent,
  error
}
axios({
  method:'post',
  url:`${API_PATH}`,
  headers:{
      'content-type':'application/json'
  },
  data: formSent
}).then((result)=>{
  if(result.status==200){
      setMail(true)
  }
}).catch(error => setError({error: error.message}))

console.log(formSent);

}
  return (
    <>
      {/* The background div */}
      <div className={overlay.overlayDiv}>
        <div className={style.contactDiv}>
          <div className={style.extra_info}>
            <div className={style.extra_info_specific}>
              <h2 className={style.infoTitle}>Locatie</h2>
              <p style={{ color: "white"}}>Iasi, Vasile Conta 42, 700380 </p>
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
          <div className={style.line}></div>
          <form className={styleForm.form} onSubmit={submitHandler}>
            <div className={styleForm.input_div}>
              <input type="text" placeholder="Numele dumneavostra" required value={name} onChange={(e)=>{setName(e.target.value)}}></input>
              <input type="email" placeholder="Email-ul dumneavostra" required value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            </div>
            {/* <div className={style.textareaDiv}> */}
            <textarea placeholder="Mesajul dumneavostra" rows="5" required value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            {/* </div> */}
            <button>TRIMITE</button>
            <div>
                {mailSent && <div style={{marginTop:'40px', fontSize:'30px', color:'green'}}>Thank you for contacting us !</div>}
                {/* {!mailSent && <div>The email has not been sent, please try again!</div>} */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
