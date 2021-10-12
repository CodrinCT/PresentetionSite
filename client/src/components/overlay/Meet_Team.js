import { Carousel } from "react-bootstrap";
import style from "../../styles/home/overlay_acivator.module.css";
import imageBogdan from "../../images/mimi-thian-xplU-oxzuD0-unsplash.jpg";
import imageGeorge from "../../images/natashia-shukla-Yu2ibXzNNs8-unsplash.jpg";
import imageMonica from "../../images/christina-wocintechchat-com-kXfBDl0fR1E-unsplash.jpg";
import { Animated } from "react-animated-css";
import { useEffect, useState } from "react";

// function useOnScreen(options) {
//   const [ref, setRef] = useState(null);
//   const [secondRef, setSecondRef] = useState(null)
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setVisible(entry.isIntersecting);
//     }, options);
//     if (ref) {
//       observer.observe(ref);
//     }
//     return () => {
//       if (ref) {
//         observer.unobserve(ref);
//       }
//     };
//   }, [ref, options]);
//   return [setRef, visible];
// }
export default function Team() {

  // const [setRef, visible] = useOnScreen({ threshold: 0.5 });

  return (
    <>
     
     
      
         <div className={style.backgroundDiv}>     
     <div className={style.overlay}>
       <h1 className={style.teamTitle}>Echipa Noastra</h1>

          <Carousel slide>
            <Carousel.Item>
              <img className={style.img} src={imageGeorge} alt="George" />
              <Carousel.Caption>
                <h3 style={{ color: "black", fontSize: "30px" }}>George</h3>
                <p
                  style={{
                    color: "orange",
                    fontWeight: 800,
                    fontSize: "20px",
                    textDecorationLine: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Senior Front-End Specialist.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imageMonica} className={style.img} alt="Monica" />
              <Carousel.Caption>
                <h3 style={{ color: "black", fontSize: "30px" }}>Monica</h3>
                <p
                  style={{
                    color: "orange",
                    fontWeight: 800,
                    fontSize: "20px",
                    textDecorationLine: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Manager Executiv.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imageBogdan} className={style.img} alt="Bogdan" />
              <Carousel.Caption>
                <h3 style={{ color: "black", fontSize: "30px" }}>Bogdan</h3>
                <p
                  style={{
                    color: "orange",
                    fontWeight: 800,
                    fontSize: "20px",
                    textDecorationLine: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Global IT Infrastructure Specialist.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
     </div>
     
       {/* {!visible && (<Animated 
       animationOut='fadeOut'
       animationInDuration='8s'
       isVisible={false}
       >
       <h1 className={style.teamTitle}>Echipa Noastra</h1>

          <Carousel slide>
            <Carousel.Item>
              <img className={style.img} src={imageGeorge} alt="George" />
              <Carousel.Caption>
                <h3 style={{ color: "black", fontSize: "30px" }}>George</h3>
                <p
                  style={{
                    color: "orange",
                    fontWeight: 800,
                    fontSize: "20px",
                    textDecorationLine: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Senior Front-End Specialist.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imageMonica} className={style.img} alt="Monica" />
              <Carousel.Caption>
                <h3 style={{ color: "black", fontSize: "30px" }}>Monica</h3>
                <p
                  style={{
                    color: "orange",
                    fontWeight: 800,
                    fontSize: "20px",
                    textDecorationLine: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Manager Executiv.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imageBogdan} className={style.img} alt="Bogdan" />
              <Carousel.Caption>
                <h3 style={{ color: "black", fontSize: "30px" }}>Bogdan</h3>
                <p
                  style={{
                    color: "orange",
                    fontWeight: 800,
                    fontSize: "20px",
                    textDecorationLine: "underline",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Global IT Infrastructure Specialist.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
       </Animated>)} */}
       
        
      
    </>
  );
}
