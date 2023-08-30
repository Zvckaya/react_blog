/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let postName = ["여자코트 추천", "강남 우동맛집", "파이썬 독학"];
  let [title, setTitle] = useState(postName);
  let [goods, mg] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [cnt, setCnt] = useState(0);
  let [inputValue, changeIv] = useState("");

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
                onClick={(e) => {
                  e.stopPropagation(); // 상위 계층까지의 이벤트 차탄
                  let copy = [...goods];
                  copy[i] = copy[i] + 1;
                  mg(copy);
                }}>
                👍
              </span>
              {goods[i]}
            </h4>
            <p>2월 17발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}>
              삭제
            </button>
          </div>
        );
      })}

      <div>
        <input
          onChange={(e) => {
            changeIv(e.target.value); //비동기 처리로 인해 늦게 나온느것처럼 보임...
            console.log(inputValue);
          }}
        />
        <button
          onClick={() => {
            let copy = [...title];
            copy.unshift(inputValue);
            setTitle(copy);
          }}>
          {" "}
          button
        </button>
      </div>

      {modal === true ? (
        <Modal cnt={cnt} title={title} setTitle={setTitle} />
      ) : null}

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
          props.setTitle(copy);
        }}>
        글 수정
      </button>
    </div>
  );
}

export default App;
