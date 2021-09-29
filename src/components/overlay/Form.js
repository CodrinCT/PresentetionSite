import style from '../../styles/header/form.module.css'
export default function Form(){

function submitHandler(event){
event.preventDefault()


}

    return(
        <form className={style.form} onSubmit={submitHandler}>
            <div className={style.input_div}>
            <input type='text' placeholder='Numele dumneavostra'></input>
            <input type='email' placeholder='Email-ul dumneavostra'></input>
            </div>
            {/* <div className={style.textareaDiv}> */}
            <textarea placeholder='Mesajul dumneavostra' rows='10'></textarea>
            {/* </div> */}
            <button>TRIMITE</button>
        </form>
    )
}