import { Carousel } from "react-bootstrap";
import style from "../../styles/home/overlay_acivator.module.css";
import imageBogdan from "../../images/mimi-thian-xplU-oxzuD0-unsplash.jpg";
import imageGeorge from "../../images/natashia-shukla-Yu2ibXzNNs8-unsplash.jpg";
import imageMonica from "../../images/christina-wocintechchat-com-kXfBDl0fR1E-unsplash.jpg";
import "../../styles/home/carousel.css";
import { useTranslation } from "react-i18next";
export default function Team() {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.backgroundDiv}>
        <div className={style.overlay}>
          <h1 className={style.teamTitle}>{t("despre_noi.our_team_title")}</h1>

          <Carousel slide>
            <Carousel.Item>
              <img className={style.img} src={imageGeorge} alt="George" />
              <Carousel.Caption>
                <h3 className={style.itemTitle}>George</h3>
                <p className={style.itemParam}>Senior Front-End Specialist.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imageMonica} className={style.img} alt="Monica" />
              <Carousel.Caption>
                <h3 className={style.itemTitle}>Monica</h3>
                <p className={style.itemParam}>Manager Executiv.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={imageBogdan} className={style.img} alt="Bogdan" />
              <Carousel.Caption>
                <h3 className={style.itemTitle}>Bogdan</h3>
                <p className={style.itemParam}>
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
