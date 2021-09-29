import Button from "react-bootstrap/Button";
import style from "../../styles/ButtonMore.module.css";
import { useHistory } from "react-router-dom";
export default function MoreButton() {
  const history = useHistory();
  function buttonHandler(event) {
    history.push("/despre_noi");
  }
  return (
    <div className={style.div}>
      <Button variant="info" className={style.button} onClick={buttonHandler}>
        CITESTE MAI MULT
      </Button>{" "}
    </div>
  );
}
