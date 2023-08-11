import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Child from './components/ChildComponent';
import Contact from './components/ContactComponent';
import MyName from './components/MyNameComponent';

// js 파일에서 class는 예약어이기 때문에 
// js 안에서 마크업을 할때는 className이라고 클래스명을 지정해주어야 한다.

/*
function App() {
  return (
    <div className="container">
      <h1>인덱스 페이지입니다.</h1>
    </div>
  );
}
*/

// 함수형 component에서 클래스형 component로 변경하기
class App extends Component{

  //render() 메소드에서 리턴해주는 jsx를 활용해서 화면 구성이 된다.
  render(){
    const name = "원숭이"
    return (
      <div className="container">
        <h1>인덱스 페이지입니다.</h1>
        <Child></Child>
        <Child></Child>
        <Child></Child>
        <Contact></Contact>
        <h3>MyNameComponent 사용해보기</h3>
        <MyName name="김구라"/>
        <MyName name="해골"/>
        <MyName name={name}/>

      </div>
    )
  }
}

// import한 곳에 무엇을 리턴해줄지 결정하기
export default App;
