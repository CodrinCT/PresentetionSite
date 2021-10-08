import style from "../../styles/home/exit_btn.module.scss";
export default function ExitBtn(props) {
  function exitHandler(props) {
    props.exit();
  }

  return (
    <div className={style.div} onClick={exitHandler(props)}>
      <p>
        <span class="left">
          <span class="circle-left"></span>
          <span class="circle-right"></span>
        </span>
        <span class="right">
          <span class="circle-left"></span>
          <span class="circle-right"></span>
        </span>
      </p>
    </div>
  );
}
