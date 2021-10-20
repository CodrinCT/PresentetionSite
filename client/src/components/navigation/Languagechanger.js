
import {Dropdown} from "react-bootstrap";
import i18next from "i18next";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
<style>
  @import
  url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
</style>;

function LanguageChanger() {

const {t} = useTranslation()

    return (<Dropdown>
  <StyledDropdownToogle variant="success" id="dropdown-basic">
    {t('language_btn')}
  </StyledDropdownToogle>

  <StyledDropdownMenu>
    <Dropdown.Item style={{fontFamily:'Roboto !important', fontSize:'0.8rem', width:'fit-content', padding:'4px, 6px'}} as="button" onClick={()=>i18next.changeLanguage('ro')}>RO</Dropdown.Item>
    <Dropdown.Item style={{fontFamily:'Roboto !important', fontSize:'0.8rem',width:'fit-content',padding:'4px, 6px'}} as="button" onClick={()=>i18next.changeLanguage('en')}>EN</Dropdown.Item>
  </StyledDropdownMenu>
</Dropdown>);
}

export default LanguageChanger;

const StyledDropdownToogle=styled(Dropdown.Toggle)`
font-size: 0.8rem;
color: white;
background-color: black;
width: fit-content;
height: fit-content;
padding: 4px 6px;
border:none;
text-align: center;
margin-top: 0;
background-color: transparent;

:hover{
background-color: transparent;
transition: none;
}
`

const StyledDropdownMenu = styled(Dropdown.Menu)`
width: 2rem !important;
transform: translate(0px, 29px) !important;
`
