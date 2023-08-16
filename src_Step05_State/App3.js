import './App.css';
import { Component } from 'react';

// 함수형 component에서 클래스형 component로 변경하기
class App extends Component{
  //상태값(state) 관리하기
  state = {
    msg:"",
    msgs:[]
  };
  // input 요소에 input 이벤트가 발생하면 호출되는 함수
  onInput = (e) => {
    //입력한 문자열을 state에 반영하기
    const msg = e.target.value; //입력한 문자열
    //state 변경하기
    this.setState({
        msg:msg
    })
  }
  //추가 버튼을 눌렀을 때 호출되는 함수
  addClicked = () => {
    //state에 저장된 msg를 이용해서 li 요소를 만들어서 msgs 배열에 추가

    //현재까지 입력한 문자열 읽어오기
    const msg = this.state.msg
    //jsx 객체를 기존 배열에 추가해서 새로운 배열 얻어내기
    const newArray = this.state.msgs.concat(<li>{msg}</li>)
    //상태값을 변경해서 UI가 update 되게 한다.
    this.setState({
        msgs : newArray
    })
  }

  render(){
    return (
      <div className="container">
        <h1>인덱스 페이지입니다.</h1>
        <input type="text" onInput={this.onInput}/>
        <button onClick={this.addClicked}>추가</button>
        <p>{this.state.msg}</p>
        <ul>
            {this.state.msgs}
        </ul>
      </div>
    )
  }
}

// import한 곳에 무엇을 리턴해줄지 결정하기
export default App;
