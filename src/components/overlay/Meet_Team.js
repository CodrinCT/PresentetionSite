import { Carousel } from "react-bootstrap";
import style from "../../styles/header/overlay_acivator.module.css";
import imageBogdan from "../../images/mimi-thian-xplU-oxzuD0-unsplash.jpg";
import imageGeorge from "../../images/natashia-shukla-Yu2ibXzNNs8-unsplash.jpg";
import imageMonica from "../../images/christina-wocintechchat-com-kXfBDl0fR1E-unsplash.jpg";
export default function Team(props) {
  return (
    <>
      <div className={style.overlayDiv}>

      <div className={style.overlay}>
        <Carousel fade >
          <Carousel.Item>
            <img  src={imageGeorge}alt="George"/>
            <Carousel.Caption>
              <h3 style={{ color: "black", fontSize: "55px" }}>George</h3>
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
          </Carousel.Item >
          <Carousel.Item >
            <img src={imageMonica} alt="Monica" />  
            <Carousel.Caption>
              <h3 style={{ color: "black", fontSize: "55px" }}>Monica</h3>
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
          <Carousel.Item >
            <img src={imageBogdan} alt="Bogdan" />
            <Carousel.Caption>
              <h3 style={{ color: "black", fontSize: "55px" }}>Bogdan</h3>
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
      
    </>
  );
}
