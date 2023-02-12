import Form from "react-bootstrap/Form";
import "./Start.css";
function Start() {
  const onClick = (e) => {
    e.target.style.fontSize = "2.5rem";
    const el = e.target;
    const label = [...el.parentElement.children].filter(node => node !== el);
    label[0].style.fontSize = "2.5rem";
    label[0].style.color = "red";
    setTimeout(() => {
      if (e.target.value === "1") {
        window.location.replace("/search");
      } else {
        window.location.replace("/search2");
      }
    }, 1300);
  };
  return (
    <div className="start-wrapper">
      <div className="start-content">
      <div className="log-div">
        </div>
        <div className="start-title">해당하는 OCIO운용 자금을 선택하세요</div>
        <div key="default-radio" className="start-radioForm mb-3">
          <Form.Check
            type="radio"
            id="default-radio1"
            label="퇴직연금"
            name="radioBtn"
            value={1}
            onClick={onClick}
          />
          <Form.Check
            type="radio"
            id="default-radio2"
            label="여유자금"
            name="radioBtn"
            value={2}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Start;
