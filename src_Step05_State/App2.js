import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// 함수형 component에서 클래스형 component로 변경하기
class App extends Component{
  //상태값(state) 관리하기
  state = {
    count:0,
    count2:0
  };
  //버튼을 눌렀을 때 실행할 함수
  buttonClicked = (e) => {
    this.setState({
      count: this.state.count + 1
    });
  }
  buttonClicked2 = (e) => {
    this.setState({
      count2: this.state.count2 + 1
    });
  }

  //render() 메소드에서 리턴해주는 jsx를 활용해서 화면 구성이 된다.
  render(){
    return (
      <div className="container">
        <h1>인덱스 페이지입니다.</h1>
        <button onClick={this.buttonClicked}>{this.state.count}</button>
        <button onClick={this.buttonClicked2}>{this.state.count2}</button>
      </div>
    )
  }
}

// import한 곳에 무엇을 리턴해줄지 결정하기
export default App;
