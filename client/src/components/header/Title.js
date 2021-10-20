import styled from "styled-components";
import style from "../../styles/home/title.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Title() {
  const history = useHistory();
  function buttonHandler() {
    history.push("/despre_noi");
  }
  const { t, i18n } = useTranslation();

  return (
    <div className={style.Title}>
      <h1 className={style.h}>
        {/* Solutii, Rezultate, Calitate!  */}
        {t("acasa.home_title")}
      </h1>
      <Paragraph>{t("acasa.home_subtitle")}</Paragraph>
      <button variant="info" className={style.button} onClick={buttonHandler}>
        {t("acasa.home_more_button")}
      </button>
    </div>
  );
}

const Paragraph = styled.p`
  color: white;
  font-size: 1.1rem;
  text-align: left;
  padding-left: 50px;
  filter: drop-shadow(2px 4px 6px black);
  width: 50%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
