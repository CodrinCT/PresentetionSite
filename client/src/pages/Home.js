import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { Animated } from "react-animated-css";
import { useEffect, useState } from "react";
import style from "../styles/home/header.module.css";
import img1 from "../images/featured-1.jpg";
import img2 from "../images/featured-2.jpg";
import img3 from "../images/featured-3.jpg";
import Contact from "../components/overlay/Contact";
import { useHistory } from "react-router";
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
</style>
function useOnScreen(options) {
  const [ref, setRef] = useState(null);
  const [secondRef, setSecondRef] = useState(null)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);
  return [setRef, visible];
}
function Home() {
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });
const history = useHistory()
function redirectAbout(){
  history.push('/home')

}
function redirectServicii(){
  history.push('/servicii')
}
function redirectSolutii(){
  history.push('/solutii')
  
}

  return (
    <>
      <Header></Header>
      <div className={style.row} ref={setRef}>
      
        {visible && (
            <Animated 

            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}
            animationInDuration='8s'
            animationOutDuration='8s'
          >
          <div className={style.imagesDiv}>

            <div className={style.singleImgDiv}>
              <p style={{textAlign:'left', color:'white',fontSize:'2rem', margin:'1rem', fontFamily:'Roboto'}}>Despre Noi</p>
              </div>
              <div className={style.manyImgDiv}>
                <div className={style.multipleImgOne}>
                <p style={{textAlign:'right', color:'white',fontSize:'2rem', margin:'1rem', fontFamily:'Roboto'}}>Servicii</p>
                </div>
          <div className={style.multipleImgTwo}>
          <p style={{textAlign:'right', color:'white',fontSize:'2rem', margin:'1rem', fontFamily:'Roboto'}}>Solutii</p>

          </div>
            </div>
          </div>
          </Animated>
          
        )}
        {!visible && (
            <Animated
            // animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={false}
            animationInDuration='8s'
            animationOutDuration='8s'
          >
          <div className={style.imagesDiv}>

            <div className={style.singleImgDiv} onClick={redirectAbout}>
              <p style={{textAlign:'left', color:'white',fontSize:'2rem', margin:'1rem'}}>Despre Noi</p>

               
              </div>
              
              <div className={style.manyImgDiv}>
                <div className={style.multipleImgOne} onClick={redirectServicii}>
                <p style={{textAlign:'left', color:'white',fontSize:'2rem', margin:'1rem'}}>Servicii</p>
                </div>
             
          <div className={style.multipleImgTwo} onClick={redirectSolutii}>
          <p style={{textAlign:'left', color:'white',fontSize:'2rem', margin:'1rem' , fontFamily:'Roboto'}}>Solutii</p>

          </div>
            </div>
          </div>
          </Animated>
          
        )}
      </div>
      {/* {visible && ( */}
      <Animated 
      animationIn="slideInDown"
      animationInDuration='6s'
      >
        <Contact></Contact>
      </Animated>
      
      {/* )} */}
      <Footer></Footer>
    </>
  );
}

export default Home;
