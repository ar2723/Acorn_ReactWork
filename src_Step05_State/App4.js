import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


//함수형 component 에서 클래스형 component 로 변경하기
class App extends Component{
  //상태값(state) 관리하기 
  state={
    msg:"",
    msgs:[],
    index:0    
  };
  // input 요소에 input 이벤트가 발생하면 호출되는 함수 
  onInput = ()=>{
    //필드에 저장된 input 요소의 참조값을 이용해서 문자열 읽어온 다음 state 변경하기
    this.setState({
        msg:this.inputMsg.value  
    });
  }
  //추가 버튼을 눌렀을때 호출되는 함수 
  addClicked = ()=>{
    //state 에 저장된 msg 를 이용해서 li 요소를 만들어서 msgs 배열에 추가
    //현재까지 입력한 문자열 읽어오기 
    const msg = this.inputMsg.value;
    //jsx 객체를 기존 배열에 추가해서 새로운 배열 얻어내기
    //모델이 배열인 경우 데이터를 추가했을 때 UI가 업데이트 되기 위해서는 
    //단순히 push를 하는 것이 아닌 계속해서 concat 메소드를 통해 새로운 배열의 참조값을 얻어와야 한다.
    const newArray = this.state.msgs.concat(<li key={this.state.index}>{msg}</li>);
    //상태값을 변경해서 UI 가 update 되게 한다. 
    this.setState({
        msgs : newArray,
        index : this.state.index+1
    });
  }

  //render() 메소드 에서 리턴해주는 jsx 를 활용해서 화면 구성이 된다.
  render(){
    return (
      <div className="container">
        <h1>인덱스 페이지 입니다.</h1>
        {/* 
            UI 가 초기화 되는 시점에 ref 속성에 전달한 함수의 매개 변수로
            해당 UI 의 참조값이 전달된다.
            나중에 그 참조값을 사용하려면 참조값을 필드에 저장해 놓고 사용하면 된다.
        */}
        <input type="text" onInput={this.onInput} ref={(ref)=>{
            //inputMsg 라는 이름의 필드를 만들어서 저장하기
            //자바스크립트에서는 자바와 달리 필드를 미리 선언할 필요는 없다.
            this.inputMsg=ref;
        }}/>
        <button onClick={this.addClicked}>추가</button>
        <p>{this.state.msg}</p>
        <ul>
            {this.state.msgs}
        </ul>
      </div>
    )
  }
}


// import 한 곳에 무엇을 리턴해줄지 결정하기 
export default App;