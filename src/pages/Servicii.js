import NavigationBar from "../components/navigation/nav_bar";
import { Card, Button } from "react-bootstrap";
import style from "../styles/servicii.module.css";
import linuxPhoto from "../images/gabriel-heinzer-4Mw7nkQDByk-unsplash.jpg";
import cloudImg from "../images/cloud-software.jpg";
import consultImg from "../images/lagos-techie-IgUR1iX0mqM-unsplash.jpg";
import storage from "../images/science-in-hd-iPrjQEDnNEY-unsplash.jpg";
import { Image } from "react-bootstrap";
function Servicii() {
  return (
    <>
      <NavigationBar></NavigationBar>

      <div className={style.cardBlock}>
    
        <div className={style.cardDiv1}>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}} className={style.cardBody}>
              <Card.Title style={{ textAlign: "center" }}>
                Enterprise Linux
              </Card.Title>
              <Card.Text style={{ fontSize: "20px", display:'flex' }}>
                O fundație stabilă, dovedită, suficient de versatilă pentru
                lansarea de noi aplicații, virtualizarea mediilor și crearea
                unui cloud hibrid mai sigur.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>
                OpenStack Platform
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                O platformă sigură, scalabilă, pentru construirea cloud-urilor
                publice și private.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>Sattelite</Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Cel mai simplu mod de a gestiona Enterprise Linux, menținând
                sistemele dvs. funcționând eficient, securizate corespunzător și
                conforme cu diferite standarde.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
        <div className={style.cardDiv1}>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>OpenShift</Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                O platformă de aplicații pentru containere care permite
                dezvoltatorilor să dezvolte rapid, să găzduiască, să scaleze și
                să livreze aplicații în cloud.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>
                Directory Server
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Un registru independent de sistemul de operare, bazat pe rețea,
                care permite administratorilor să stocheze central identitatea
                utilizatorului și informațiile despre aplicație.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'transparent'}}>
              <Card.Title style={{ textAlign: "center" }}>Quay</Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Asigurați-vă că aplicațiile dvs. sunt stocate in privat,
                controland accesul. Quay este optimizat pentru munca în echipă.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className={style.cardDiv1}>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>
                Schimbarea incepe cu tine
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Tyrbul Solutions continuă să sprijine clienții pe măsură ce se
                adaptează la un peisaj global în schimbare. Vă putem ajuta
                organizația să abordeze noi provocări în timp ce creăm o
                strategie pe termen lung.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>
                Schimba abordarea
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Lucrând printr-un model colaborativ de furnizare a serviciilor
                folosind instrumente deschise și metodologii dovedite, acționăm
                ca o extensie a echipei dvs. pentru a vă ajuta să adoptați noi
                tehnologii și să transformați procesele.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>Profita</Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Experții noștri vă vor ajută să vă rafinați procesul și să
                valorificați potențialul tehnologiilor noi și existente.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className={style.cardDiv1}>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>
                Ceph Storage
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Stocare de fișiere deschisă, definită de software, care combină
                software-ul de încredere cu hardware de marfă x86, eliminând
                necesitatea sistemelor de stocare proprietare cu costuri
                ridicate.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>
                OpenShift Container Storage
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Stocare definită de software special concepută pentru medii de
                containere.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={style.card}>
            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Card.Title style={{ textAlign: "center" }}>
                Cluster Storage
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                O platformă de stocare a blocurilor și obiectelor robustă,
                foarte scalabilă, pentru întreprinderile care implementează
                cloud public sau privat - bazată pe cea mai populară opțiune de
                stocare a blocurilor comunitare pentru cloud-uri bazate pe
                OpenStack.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Servicii;
