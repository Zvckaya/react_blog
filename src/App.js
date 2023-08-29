import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let postName = ["강남우동맛집", "남자코트 추천", "파이썬 독함"];
  let [title1, m1] = useState(postName[0]);
  let [title2, m2] = useState(postName[1]);
  let [title3, m3] = useState(postName[2]);

  return (
    <div className="App">
      <div className="black-nav">
        {" "}
        {/*style 넣을때는 중괄호 style {}*/}
        <h4>데일리 라이프</h4>
      </div>
      <div className="list">
        <h4>{title1}</h4>
        <p>2월 17발행</p>
      </div>
      <div className="list">
        <h4>{title2}</h4>
        <p>2월 17발행</p>
      </div>
      <div className="list">
        <h4>{title3}</h4>
        <p>2월 17발행</p>
      </div>
      {/* document.querySelector('h4').innerHTML = post; 데이터 바인딩 */}
    </div>
  );
}

export default App;
