import NavigationBar from "../components/navigation/nav_bar";
import style from '../styles/ContactPage.module.css'
import Form from "../components/overlay/Form";
import image1 from '../images/pexels-nick-demou-2473183.jpg'
import arrowImg from '../images/img_257584.png'
import styled from "styled-components";
function ContactPage() {
  return (
<>
    
      <NavigationBar></NavigationBar>
      <Page className={style.page}>
<img src={image1} className={style.img}></img>
{/* <a href='#contact' ><img src={arrowImg} className={style.moveDown}></img></a> */}
      <div  id='contact' className={style.contactDiv}>

        <div className={style.extra_info}>
            <div className={style.extra_info_specific}>
                <h2>Locatie</h2>
            <p style={{color:'white'}}>Iasi, Vasile Conta 42, 700380 </p>
            </div>
            <div className={style.extra_info_specific}>
                <h2>Email de contact</h2>
            <p style={{color:'white'}}>contact@tyrbul.com</p>
            </div>
            <div className={style.extra_info_specific}>
                <h2>Program</h2>
            <p style={{color:'white'}}>Luni-Vineri   - 10 AM – 7 PM <br></br>Sambata-Duminica - Inchis</p>
            </div>
        </div>
        <div className={style.line}></div>
        <Form></Form>
        </div>
      </Page>
      
       </>
  );
}

export default ContactPage;

const Page = styled.div`
display: flex;
flex-direction: column;
`