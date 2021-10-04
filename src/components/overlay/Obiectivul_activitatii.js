import photo1 from "../../images/andy-holmes-webyw4NsFPg-unsplash.jpg";
import photo2 from "../../images/carlos-gonzalez-MmYtZoZ8ET4-unsplash.jpg";
import photo3 from "../../images/lagos-techie-IgUR1iX0mqM-unsplash.jpg";
import photo4 from "../../images/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.jpg";
import { Carousel } from "react-bootstrap";
import style from "../../styles/header/overlay_acivator.module.css";
export default function Objective() {
  return (
    <>
      <div className={style.overlayDiv} style={{justifyContent:'center'}}>
        <div className={style.info}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ color: "black", marginBottom: "15px", textDecoration:'underline'}}>
              Obiectivul activitatii
            </h2>
            <p style={{ color: "black", fontSize: "20px" }}>
              Secretul succesului este echilibrul dintre a te bucura de ceea ce
              faci și a-ți asuma responsabilitatea de a o face în modul cel mai
              priceput. Dezvoltatorii noștri răspund adesea la e-mailurile de
              afaceri după programul de lucru, pentru a ne asigura că platforma
              dvs. software este cât se poate de bună. Ei fac acest lucru din
              pasiune și nu am putea fi mai mândri de dorința și dedicarea lor.
            </p>
          </div>
          {/* <div className={style.overlay}>
                <Carousel fade>
                <Carousel.Item style={{color:'black'}}>
                    <img className={style.img} src={photo1} alt="George" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className={style.img} src={photo2} alt="Monica" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className={style.img} src={photo3} alt="Bogdan" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className={style.img} src={photo4} alt="Bogdan" />
                </Carousel.Item>
                </Carousel>
            </div> */}
        </div>
      </div>
    </>
  );
}
