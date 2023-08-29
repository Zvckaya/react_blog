import logo from './logo.svg';
import './App.css';

function App() {
  
  let post = '강남 우동 맛집';
  
  

  return (
    <div className="App">
      <div className="black-nav"> // style 넣을때는 중괄호 style {}
        <h4>데일리 라이프</h4>
      </div>
      <h4>{post}</h4>  // document.querySelector('h4').innerHTML = post; 데이터 바인딩
    </div>
  );
}

export default App;
