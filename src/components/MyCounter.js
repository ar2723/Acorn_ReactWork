// src/components/MyCounter.js

import { Component } from "react";

class Mycounter extends Component{
    
    state = {
        count:0
    }

    render(){
        return (
            <div>
                <button onClick={()=>{
                    //함수 안에 count를 조작하는 로직이 들어 있다. (UI 안에 로직이 들어 있다.)
                    this.setState({
                        count: this.state.count - 1
                    })
                }}>-</button>
                <strong>{this.state.count}</strong>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>+</button>
            </div>
        )
    }
}
export default Mycounter