import NavigationBar from "../components/navigation/nav_bar";
import linuxPhoto1 from "../images/gabriel-heinzer-4Mw7nkQDByk-unsplash (2).jpg";
import linuxPhoto2 from "../images/linuxImg2.jpg";
import linuxPhoto3 from "../images/linuxImg3.jpg";
import cloudImg1 from "../images/cloud-software.jpg";
import cloudImg2 from "../images/R.jpg";
import cloudImg3 from "../images/R221.jpg";
import consultImg1 from "../images/lagos-techie-IgUR1iX0mqM-unsplash (1).jpg";
import consultImg2 from "../images/pexels-michael-burrows-7129717 (2).jpg";
import consultImg3 from "../images/pexels-shvets-production-7176319 (1).jpg";
import storage1 from "../images/carlos-gonzalez-MmYtZoZ8ET4-unsplash (1).jpg";
import storage2 from "../images/pexels-pixabay-270410 (1).jpg";
import storage3 from "../images/science-in-hd-iPrjQEDnNEY-unsplash (1).jpg";

import headerImage from "../images/services-left-image.png";
import "../styles/cardfliping.scss";
import styled from "styled-components";
import Footer from "../components/Footer";
function Servicii() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Header>
        <HeaderH>Servicii</HeaderH>
        {/* <HeaderParaph>
          Oferim diverse servicii de consultanta si servicii software pentru
          platforme Linux, Cloud Computing si Storage.
        </HeaderParaph> */}
      </Header>
      <CardsDiv style={{justifyContent:'center'}}>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">PLATFORME LINUX</h2>
              <h1 class="title">Enterprise Linux</h1>
              <img class="image" src={linuxPhoto1} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">
                {" "}
                <h3 class="synopsis">Description</h3>
              </h3>
              <CardDescription>
                O fundație stabilă, dovedită, suficient de versatilă pentru
                lansarea de noi aplicații, virtualizarea mediilor și crearea
                unui cloud hibrid mai sigur.
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">PLATFORME LINUX</h2>
              <h1 class="title">OpenStack Platform</h1>
              <img class="image" src={linuxPhoto2} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">
                {" "}
                <h3 class="synopsis">Description</h3>
              </h3>
              <CardDescription>
                O platformă sigură, scalabilă, pentru construirea cloud-urilor
                publice și private.
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">PLATFORME LINUX</h2>
              <h1 class="title">Sattelite</h1>
              <img class="image" src={linuxPhoto3} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                Cel mai simplu mod de a gestiona Enterprise Linux, menținând
                sistemele dvs. funcționând eficient, securizate corespunzător și
                conforme cu diferite standarde.
              </CardDescription>
            </div>
          </div>
        </div>
      </CardsDiv>
      <CardsDiv style={{justifyContent:'center'}}>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">CLOUD COMPUTING</h2>
              <h1 class="title">OpenShift</h1>
              <img class="image" src={cloudImg1} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                O platformă de aplicații pentru containere care permite
                dezvoltatorilor să dezvolte rapid, să găzduiască, să scaleze și
                să livreze aplicații în cloud.
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">CLOUD COMPUTING</h2>
              <h1 class="title">Directory Server</h1>
              <img class="image" src={cloudImg2} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                Un registru independent de sistemul de operare, bazat pe rețea,
                care permite administratorilor să stocheze central identitatea
                utilizatorului și informațiile despre aplicație.
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">CLOUD COMPUTING</h2>
              <h1 class="title">Quay</h1>
              <img class="image" src={cloudImg3} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                Asigurați-vă că aplicațiile dvs. sunt stocate in privat,
                controland accesul. Quay este optimizat pentru munca în echipă.
              </CardDescription>
            </div>
          </div>
        </div>
      </CardsDiv>
      <CardsDiv style={{justifyContent:'center'}}>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">CONSULTANTA</h2>
              <h1 class="title">Schimbarea incepe cu tine</h1>
              <img class="image" src={consultImg1} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                Tyrbul Solutions continuă să sprijine clienții pe măsură ce se
                adaptează la un peisaj global în schimbare. Vă putem ajuta
                organizația să abordeze noi provocări în timp ce creăm o
                strategie pe termen lung.
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">CONSULTANTA</h2>
              <h1 class="title">Schimba abordarea</h1>
              <img class="image" src={consultImg2} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                Lucrând printr-un model colaborativ de furnizare a serviciilor
                folosind instrumente deschise și metodologii dovedite, acționăm
                ca o extensie a echipei dvs. pentru a vă ajuta să adoptați noi
                tehnologii și să transformați procesele.
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">CONSULTANTA</h2>
              <h1 class="title">Profita</h1>
              <img class="image" src={consultImg3} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                Experții noștri vă vor ajută să vă rafinați procesul și să
                valorificați potențialul tehnologiilor noi și existente.
              </CardDescription>
            </div>
          </div>
        </div>
      </CardsDiv>
      <CardsDiv style={{justifyContent:'center'}}>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">STORAGE</h2>
              <h1 class="title">Ceph Storage</h1>
              <img class="image" src={storage1} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                Stocare de fișiere deschisă, definită de software, care combină
                software-ul de încredere cu hardware de marfă x86, eliminând
                necesitatea sistemelor de stocare proprietare cu costuri
                ridicate.
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">STORAGE</h2>
              <h1 class="title">OpenShift Container Storage</h1>
              <img class="image" src={storage2} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                Stocare definită de software special concepută pentru medii de
                containere.
              </CardDescription>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="front">
              <h2 class="sub-title">STORAGE</h2>
              <h1 class="title">Cluster Storage</h1>
              <img class="image" src={storage3} alt="" />
            </div>
            <div class="back">
              <h3 class="synopsis">Description</h3>
              <CardDescription>
                O platformă de stocare a blocurilor și obiectelor robustă,
                foarte scalabilă, pentru întreprinderile care implementează
                cloud public sau privat - bazată pe cea mai populară opțiune de
                stocare a blocurilor comunitare pentru cloud-uri bazate pe
                OpenStack.
              </CardDescription>
            </div>
          </div>
        </div>
      </CardsDiv>
      <Footer></Footer>
    </>
  );
}


const CardsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Header = styled.div`
  background-image: url(${headerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 500px;
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  text-align: center;
`;

const HeaderParaph = styled.p`
  font-size: 25px;
  color: #f2583d;
`;
const HeaderH = styled.h1`
  color: #f2583d;
  font-size: 75px;
  font-weight: 800;
  padding: 20px;
`;

const CardDescription = styled.p`
  color: white;
`;

export default Servicii;
