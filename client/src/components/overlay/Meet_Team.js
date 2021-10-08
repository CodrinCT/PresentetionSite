import { Carousel } from "react-bootstrap";
import style from "../../styles/home/overlay_acivator.module.css";
import imageBogdan from "../../images/mimi-thian-xplU-oxzuD0-unsplash.jpg";
import imageGeorge from "../../images/natashia-shukla-Yu2ibXzNNs8-unsplash.jpg";
import imageMonica from "../../images/christina-wocintechchat-com-kXfBDl0fR1E-unsplash.jpg";
export default function Team(props) {
  return (
    <>
      <div className={style.overlayDiv}>
        <div className={style.overlay}>
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
    </>
  );
}
