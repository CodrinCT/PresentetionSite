import NavigationBar from "../components/navigation/nav_bar";
import style from '../styles/ContactPage.module.css'
import Form from "../components/overlay/Form";
import image1 from '../images/miles-burke-idhx-MOCDSk-unsplash.jpg'
import arrowImg from '../images/img_257584.png'
function ContactPage() {
  return (
<>
    
      <NavigationBar></NavigationBar>
      <div className={style.page}>
<img src={image1} className={style.img}></img>
<a href='#contact' ><img src={arrowImg} className={style.moveSown}></img></a>
      <div  id='contact' className={style.contactDiv}>

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
    <p>Luni-Vineri   - 10 AM – 7 PM <br></br>Sambata-Duminica - Inchis</p>
    </div>
</div>
<div className={style.line}></div>
<Form></Form>
</div>
      </div>
      
       </>
  );
}

export default ContactPage;
