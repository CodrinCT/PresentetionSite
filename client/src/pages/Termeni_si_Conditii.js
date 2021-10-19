import { useTranslation } from "react-i18next"
import styled from "styled-components"
import Footer from "../components/Footer"
import NavigationBar from "../components/navigation/nav_bar"
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap');
</style>
export default function TermsAndConditions(){
    const {t} = useTranslation()
    return (
        <>
        <NavigationBar></NavigationBar>
        <PageDiv>
            <InfoDiv>
            <h1 style={{fontFamily:'Roboto+Mono', fontSize:'40px', fontWeight:'600', marginTop:'25px', textDecoration:'underline'}}>{t('terms_and_conditions.title')}</h1>
            <h3 style={{fontFamily:'Roboto+Mono', fontSize:'20px', color:'black',fontWeight:'300', marginTop:'15px', textAlign:'center'}} >Ultima actualizare: 14 iulie 2020</h3>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.1')}</SubDivisionTitle>

            <Text>1.1 {t('terms_and_conditions.paraghraps.1.1_1')}</Text>
            <Text>1.2 {t('terms_and_conditions.paraghraps.1.1_2')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.2')}</SubDivisionTitle>
                <Text>{t('terms_and_conditions.paraghraps.2')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.3')}</SubDivisionTitle>
            <Text>{t('terms_and_conditions.paraghraps.3.extra')}</Text>
            <Text>3.1 {t('terms_and_conditions.paraghraps.3.3_1')}</Text>
            <Text>3.2 {t('terms_and_conditions.paraghraps.3.3_2')}</Text>
            <Text>3.3 {t('terms_and_conditions.paraghraps.3.3_3')}</Text>
            <Text>3.4 {t('terms_and_conditions.paraghraps.3.3_4')}</Text>
            <Text>3.5 {t('terms_and_conditions.paraghraps.3.3_5')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.4')}</SubDivisionTitle>
            <Text>4.1 {t('terms_and_conditions.paraghraps.4.4_1')}</Text>
            <Text>4.2 {t('terms_and_conditions.paraghraps.4.4_2')}</Text>
            <Text>4.3 {t('terms_and_conditions.paraghraps.4.4_3')}</Text>
            <Text>4.4 {t('terms_and_conditions.paraghraps.4.4_4')}</Text>
            <Text>4.5 {t('terms_and_conditions.paraghraps.4.4_5.title')}<br></br>
            {t('terms_and_conditions.paraghraps.4.4_5.4_5_1')}<br></br>
            {t('terms_and_conditions.paraghraps.4.4_5.4_5_2')}<br></br>
            {t('terms_and_conditions.paraghraps.4.4_5.4_5_3')}<br></br>
            {t('terms_and_conditions.paraghraps.4.4_5.4_5_4')}<br></br>
            {t('terms_and_conditions.paraghraps.4.4_5.4_5_5')}<br></br>
            {t('terms_and_conditions.paraghraps.4.4_5.4_5_6')}<br></br>
            {t('terms_and_conditions.paraghraps.4.4_5.4_5_7')}<br></br>
            </Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.5')}</SubDivisionTitle>
            <Text>5.1 {t('terms_and_conditions.paraghraps.5.5_1')}</Text>
           <Text>5.2 {t('terms_and_conditions.paraghraps.5.5_2')}</Text>
           <Text>5.3 {t('terms_and_conditions.paraghraps.5.5_3')}</Text>
           
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.6')}</SubDivisionTitle>
            <Text>{t('terms_and_conditions.paraghraps.6')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.7')}</SubDivisionTitle>
            <Text>{t('terms_and_conditions.paraghraps.7')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.8')}</SubDivisionTitle>
            <Text>{t('terms_and_conditions.paraghraps.8')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
           <SubDivisionTitle>{t('terms_and_conditions.subtitle.9')}</SubDivisionTitle> 
            <Text>{t('terms_and_conditions.paraghraps.9')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.10')}</SubDivisionTitle>
            <Text>10.1 {t('terms_and_conditions.paraghraps.10.10_1')}</Text>
           <Text>10.2 {t('terms_and_conditions.paraghraps.10.10_2')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.11')}</SubDivisionTitle>
            <Text>11.1 {t('terms_and_conditions.paraghraps.11.11_1')}</Text>
            <Text>11.2 {t('terms_and_conditions.paraghraps.11.11_2')}</Text>
           <Text>11.3 {t('terms_and_conditions.paraghraps.11.11_3')}</Text>
            <Text>11.4 {t('terms_and_conditions.paraghraps.11.11_4')}</Text>
            <Text>11.5 {t('terms_and_conditions.paraghraps.11.11_5')}</Text>
           <Text>11.7 {t('terms_and_conditions.paraghraps.11.11_7')}</Text>
           <Text>11.9 {t('terms_and_conditions.paraghraps.11.11_9')}</Text>
            <Text>11.10 {t('terms_and_conditions.paraghraps.11.11_10')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.12')}</SubDivisionTitle>
            <Text>12.1 {t('terms_and_conditions.paraghraps.12.12_1')}</Text>
            <Text>12.2 {t('terms_and_conditions.paraghraps.12.12_2')}</Text>
           <Text>12.3 {t('terms_and_conditions.paraghraps.12.12_3')}</Text>
           <Text>12.4 {t('terms_and_conditions.paraghraps.12.12_4')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.13')}</SubDivisionTitle>
            <Text>13.1 {t('terms_and_conditions.paraghraps.13.13_1')}  </Text>
           <Text>13.2 {t('terms_and_conditions.paraghraps.13.13_2')}</Text>
            <Text>13.3 {t('terms_and_conditions.paraghraps.13.13_3')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.14')}</SubDivisionTitle>
            <Text>14.1 {t('terms_and_conditions.paraghraps.14.14_1')}</Text>
           <Text>14.2 {t('terms_and_conditions.paraghraps.14.14_2')}</Text>
            <Text>14.3 {t('terms_and_conditions.paraghraps.14.14_3')}</Text>
            <Text>14.4 {t('terms_and_conditions.paraghraps.14.14_4')}</Text>
            <Text>14.5 {t('terms_and_conditions.paraghraps.14.14_5')}</Text>
           <Text>14.7 {t('terms_and_conditions.paraghraps.14.14_6')}</Text>
            </ParagraphDiv>
            <ParagraphDiv>
                <SubDivisionTitle>{t('terms_and_conditions.subtitle.15')}</SubDivisionTitle>
            <Text>15.1 {t('terms_and_conditions.paraghraps.15.15_1')}</Text>
            <Text>15.2 {t('terms_and_conditions.paraghraps.15.15_2')}</Text>
            <Text>15.3 {t('terms_and_conditions.paraghraps.15.15_3')}</Text>
            <Text>15.4 {t('terms_and_conditions.paraghraps.15.15_4')}</Text>
           <Text>15.5 {t('terms_and_conditions.paraghraps.15.15_5')} </Text>
            </ParagraphDiv>
            </InfoDiv> 
        </PageDiv>
        <Footer></Footer>

</>
    )
}

const PageDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(0,0,0,0.7);
`

const InfoDiv = styled.div`
background-color: white;
width: 65%;
margin-top: 20px;
margin-bottom: 20px;
`

const ParagraphDiv = styled.div`
display: flex;
flex-direction: column;
/* width: 65%; */
font-family: 'Roboto+Mono';
margin-top: 40px;
margin-bottom: 40px;
padding: 15px;
align-items: center;
text-align: justify;
`

const Text = styled.p`
font-weight: 300;
font-size: 20px;
padding: 15px 25px;
margin-top: 10px;
text-indent: 25px;
text-align: justify;
`
const SubDivisionTitle = styled.h2`
color: black;
font-weight: 600;
font-size: 25px;
`