import style from "../../styles/header/contact.module.css";
import overlay from '../../styles/header/overlay_acivator.module.css'
import Form from "./Form";

export default function Contact(){
    return(
        <>
        {/* The background div */}
        <div className={overlay.overlayDiv}>
        <div className={style.contactDiv}>
            <div className={style.extra_info}>
                <div className={style.extra_info_specific}>
                    <h2>Locatie</h2>
                <p>Iasi, Vasile Conta 42, 700380 </p>
                </div>
                <div className={style.extra_info_specific}>
                    <h2>Email de contact</h2>
                <p>contact@tyrbul.com</p>
                </div>
                <div className={style.extra_info_specific}>
                     <h2>Program</h2>
                <p>Luni-Vineri   - 10 AM – 7 PM Sambata-Duminica - Inchis</p>
                </div>
            </div>
            <div className={style.line}></div>
            <Form></Form>
        </div>
        </div>

        {/* The contact div */}
        
      
        
        </>
    )
}