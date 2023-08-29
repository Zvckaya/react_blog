/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let postName = ["여자코트 추천", "강남 우동맛집", "파이썬 독학"];
  let [title, mt] = useState(postName);
  let [goods, mg] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        {/*style 넣을때는 중괄호 style {}*/}
        <h4>데일리 라이프</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          copy = copy.sort();
          mt(copy);
        }}>
        가나다순 정렬
      </button>
      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              mg(goods + 1);
            }}>
            👍
          </span>{" "}
          {goods}
          {/* onClick 은 이벤트 핸들러이다. */}
        </h4>
        <p>2월 17발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17발행</p>
      </div>
      {/* document.querySelector('h4').innerHTML = post; 데이터 바인딩 */}
    </div>
  );
}

export default App;
