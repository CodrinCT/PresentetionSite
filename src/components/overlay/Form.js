import axios from 'axios'
import { useState } from 'react'
import style from '../../styles/header/form.module.css'
require('dotenv').config()
export default function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [mailSent, setMail] = useState(false)
    const [error, setError] = useState(null)


function submitHandler(event){
event.preventDefault()
// const domain = env.DOMAIN
const API_PATH = `${process.env.REACT_APP_BASE_DOMAIN}/contact`

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
    if(result.status===200){
        setMail(true)
    }
}).catch(error => setError({error: error.message}))

console.log(formSent);

}

    return(
        <form className={style.form} onSubmit={submitHandler}>
            <div className={style.input_div}>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Numele dumneavostra' required></input>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email-ul dumneavostra' required></input>
            </div>
            {/* <div className={style.textareaDiv}> */}
            <textarea placeholder='Mesajul dumneavostra' value={message} onChange={(e)=>{setMessage(e.target.value)}} rows='5' required></textarea>
            {/* </div> */}
            <button>TRIMITE</button>
            <div>
                {mailSent && <div style={{marginTop:'40px', fontSize:'30px', color:'green'}}>Thank you for contacting us !</div>}
                {/* {!mailSent && <div>The email has not been sent, please try again!</div>} */}
            </div>
        </form>
    )
}