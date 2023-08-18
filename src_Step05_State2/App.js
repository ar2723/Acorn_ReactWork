import './App.css';
import { Component } from 'react';
import FriendComponent from './components/FriendComponent';

// 함수형 component에서 클래스형 component로 변경하기
class App extends Component{

  state = {
    friends:["김구라", "해골", "원숭이"]
  };
    
  //render() 메소드에서 리턴해주는 jsx를 활용해서 화면 구성이 된다.
  render(){
    return (
      <div className="container">
        <h1>인덱스 페이지입니다.</h1>
        {/* friends 라는 props 명으로 Array 전달하기 */}
        <FriendComponent friends = {this.state.friends}
          updateAction = {this.updateAction}
          deleteAction = {this.deleteAction}/> {/* updateAction 이라는 props 명으로 function 전달하기 */}
      </div>
    )
  }

  deleteAction = (idx) =>{
    /* 
      this.state.friends 배열에서 index에 해당하는 아이템을 삭제한 새로운 배열을 얻어내서
      state 변경하기
    */
    const newArray = this.state.friends.filter((item, index)=>{
      if(index != idx){
        return true; //true가 리턴된 item만 남겨지고
      } else {
        return false; //false가 리턴된 item은 제거된 새로운 배열이 구성된다.
      }
    });

    const newArray2 = this.state.friends.filter((item, index) => index != idx);

    this.setState({
      friends:newArray
    });
  }


  //자식 component가 특정 시점에 호출하는 함수
  updateAction = (data) => {
    //data는 {index: x, newName: x} 형식의 object이다.
    /*
      this.state.friends 배열에서 index에 해당하는 아이템을 newName으로 수정된 새로운 배열
      얻어내서 state 변경하기
    */
    const newArray = this.state.friends.map((item, index) => {
      //만일 수정할 인덱스라면 
      if(index == data.index){
        //새로운 이름을 리턴하고
        return data.newName;
      } else { // 그렇지 않으면 원래 이름을 리턴한다.
        return item;
      }
    });

    //위의 동작을 좀더 간략히 하면
    const newArray2 = this.state.friends
      .map((item, index)=> index === data.index ? data.newName : item)

    this.setState({
      friends:newArray
    });

    
  }
}

// import한 곳에 무엇을 리턴해줄지 결정하기
export default App;
