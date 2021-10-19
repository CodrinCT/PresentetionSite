import { useTranslation } from "react-i18next"
import styled from "styled-components"
import Footer from "../components/Footer"
import NavigationBar from "../components/navigation/nav_bar"

export default function ConfidentialityPolicy(){
    const {t} = useTranslation()
    return(
        <>
        <NavigationBar></NavigationBar>
        <PageDiv>
<InfoDiv>

<ParagraphDiv>
<h1 style={{fontFamily:'Roboto+Mono', fontSize:'40px', fontWeight:'600', textDecoration:'underline'}}>{t('politica_de_confidentialitate.title')}</h1>
            <Text>
            {t('politica_de_confidentialitate.first_part.1')}<br></br>
•	{t('politica_de_confidentialitate.first_part.2')}<br></br>
•	{t('politica_de_confidentialitate.first_part.3')}<br></br>
•	{t('politica_de_confidentialitate.first_part.4')}<br></br>

</Text>
<Text>
{t('politica_de_confidentialitate.second_part.1')}<br></br>
•	{t('politica_de_confidentialitate.second_part.2')}<br></br>
•	{t('politica_de_confidentialitate.second_part.3')}<br></br>
•	{t('politica_de_confidentialitate.second_part.4')}<br></br>
•	{t('politica_de_confidentialitate.second_part.5')}<br></br>
•	{t('politica_de_confidentialitate.second_part.6')}<br></br>
•	{t('politica_de_confidentialitate.second_part.7')}<br></br>
</Text>
<Text>

{t('politica_de_confidentialitate.third_part')}
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
padding: 15px 25px;
`

const InfoDiv = styled.div`
background-color: white;
width: 65%;
margin-top: 20px;
margin-bottom: 20px;
`