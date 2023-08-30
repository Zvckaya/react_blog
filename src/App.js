/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let postName = ["여자코트 추천", "강남 우동맛집", "파이썬 독학"];
  let [title, mt] = useState(postName);
  let [goods, mg] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [cnt, setCnt] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        {/*style 넣을때는 중괄호 style {}*/}
        <h4>데일리 라이프</h4>
      </div>

      {title.map(function (title, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
                setCnt(i);
              }}>
              {title}
              <span
                onClick={() => {
                  let copy = [...goods];
                  copy[i] = copy[i] + 1;
                  mg(copy);
                }}>
                👍
              </span>
              {goods[i]}
              {/* onClick 은 이벤트 핸들러이다. */}
            </h4>
            <p>2월 17발행</p>
          </div>
        );
      })}

      {modal === true ? <Modal cnt={cnt} title={title} mt={mt} /> : null}

      {/* document.querySelector('h4').innerHTML = post; 데이터 바인딩 */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.cnt]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.title];
          copy[0] = "남자코트추천";
          props.mt(copy);
        }}>
        글 수정
      </button>
    </div>
  );
}

export default App;
