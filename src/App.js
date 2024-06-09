// App.js
import logo from './logo.svg';
import './App.css';
import Box from "./box.jsx"

function App() {
  return (
    <div className="container">
      <h4 className="h1" style={{ textAlign: 'center' }}>
        <span style={{ textDecoration: 'line-through', padding: '0 10px' }}>
          디자인 구려요? 어쩔 수 없음니다..
        </span>
      </h4>  
      <div className='hsm'>
        <h1>
        💜💜 P조야 P랑해 💜💜
        </h1>
        <p> 처음에 스터디 일정을 봤을땐 막막했는데 벌써 스터디가 끝났다는 사실이 믿기지 않는다...
        <br/> 어쩌다보니 조원 모두가 맞는 시간이 아침시간밖에 없어서 모두 힘들었을텐데 끝까지 힘내줘서 너무너무 고마워!!
        <br/> 우리 한 학기동안 열심히 했으니까 종강하고선 맛있는거 먹으러 가자 ㅡㅡ 나도 조원이랑 맛있는거 먹고싶어. ㅋ
        <br/> 암튼 진짜 진짜 수고 많았어~!! P조 짱. 기말도 잘 봐🫶
        </p>
      </div>
      <div className="App">
        <Box name="김범준" major="전자전기공학부" pos="BACK"/>
        <Box name="심효은" major="경제학과" pos="FRONT"/>
        <Box name="안시환" major="교육학과" pos="BACK"/>
        <Box name="이신후" major="정치국제학과" pos="FRONT"/>
      </div>
    </div>
  );
}

export default App;
