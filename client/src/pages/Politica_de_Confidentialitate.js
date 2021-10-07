import styled from "styled-components"
import Footer from "../components/Footer"
import NavigationBar from "../components/navigation/nav_bar"

export default function ConfidentialityPolicy(){
    return(
        <>
        <NavigationBar></NavigationBar>
        <PageDiv>
<InfoDiv>

<ParagraphDiv>
<h1 style={{fontFamily:'Roboto+Mono', fontSize:'40px', fontWeight:'600'}}>Politica GDPR</h1>
            <Text>
            Politica de confidențialitate GDPR
Una dintre prioritățile noastre principale este confidențialitatea vizitatorilor noștri. Acest document privind politica de confidențialitate conține tipuri de informații care sunt colectate și înregistrate de site-ul dvs. web și modul în care le folosim.
Dacă aveți întrebări suplimentare sau aveți nevoie de mai multe informații despre politica noastră de confidențialitate, nu ezitați să ne contactați.
Regulamentul general privind protecția datelor (GDPR)
Suntem un operator de date al informațiilor dvs.
Baza legală a companiei noastre pentru colectarea și utilizarea informațiilor personale descrise în această politică de confidențialitate depinde de informațiile personale pe care le colectăm și de contextul specific în care colectăm informațiile:<br></br>
•	Compania noastră trebuie să încheie un contract cu dvs.<br></br>
•	Prelucrarea informațiilor dvs. personale este în interesul legitim al companiei noastre.<br></br>
•	Compania noastră trebuie să respecte legea.<br></br>

</Text>
<Text>
Compania noastră va păstra informațiile dvs. personale numai atât timp cât este necesar în scopurile stabilite în această politică de confidențialitate. Vom păstra și vom utiliza informațiile dvs. în măsura necesară pentru a ne respecta obligațiile legale, a rezolva litigiile și a ne aplica politicile.
Dacă sunteți rezident al Spațiului Economic European (SEE), aveți anumite drepturi de protecție a datelor. Dacă doriți să fiți informați despre ce informații personale deținem despre dvs. și dacă doriți ca acestea să fie eliminate din sistemele noastre, vă rugăm să ne contactați.
În anumite circumstanțe, aveți următoarele drepturi de protecție a datelor:<br></br>
•	Dreptul de a accesa, actualiza sau șterge informațiile pe care le avem despre dvs.<br></br>
•	Dreptul de rectificare.<br></br>
•	Dreptul de a obiecta.<br></br>
•	Dreptul de restricție.<br></br>
•	Dreptul la portabilitatea datelor.<br></br>
•	Dreptul de a retrage consimțământul.<br></br>
</Text>
<Text>

Fișiere jurnal
Site-ul nostru web urmează o procedură standard de utilizare a fișierelor jurnal. Aceste fișiere înregistrează vizitatori atunci când accesează site-uri web. Toate companiile de găzduire fac acest lucru și o parte din analiza serviciilor de găzduire. Informațiile colectate de fișierele jurnal includ adrese de protocol de internet (IP), tip de browser, furnizor de servicii de internet (ISP), ștampilă de dată și oră, pagini de trimitere / ieșire și, eventual, numărul de clicuri. Acestea nu sunt legate de nicio informație care poate fi identificată personal. Scopul informațiilor este de a analiza tendințele, de a administra site-ul, de a urmări mișcarea utilizatorilor de pe site și de a culege informații demografice.
Politici de confidențialitate
Serverele de anunțuri terțe sau rețelele publicitare utilizează tehnologii precum cookie-uri, JavaScript sau Web Beacon-uri care sunt utilizate în reclamele și linkurile respective care apar pe site-ul nostru web, care sunt trimise direct în browserul utilizatorilor. Ei primesc automat adresa dvs. IP atunci când se întâmplă acest lucru. Aceste tehnologii sunt utilizate pentru a măsura eficiența campaniilor lor publicitare și / sau pentru a personaliza conținutul publicitar pe care îl vedeți pe site-urile web pe care le vizitați.
Rețineți că site-ul nostru nu are acces sau control asupra acestor cookie-uri care sunt utilizate de agenții de publicitate terți.
            </Text>
</ParagraphDiv>
</InfoDiv>           
        </PageDiv>
        <Footer></Footer>
        </>
    )
}

const Text =  styled.p`
font-weight: 300;
font-size: 20px;
padding: 10px;
margin-top: 10px;
text-indent: 25px;
text-align: justify;
`
const PageDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(0,0,0,0.7);
`
const ParagraphDiv = styled.div`
display: flex;
flex-direction: column;
font-family: 'Roboto+Mono';
margin-top: 40px;
margin-bottom: 40px;
padding: 15px;
`

const InfoDiv = styled.div`
background-color: white;
width: 70%;
margin-top: 20px;
margin-bottom: 20px;
`