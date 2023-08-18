// src/components/WeCounter2.js

import { useReducer } from "react"

//리듀서 함수 만들기
const reducer = (state, action) => {
    let newState;
    //상태값과 액션값이 전달된다.
    if(action == "minus"){
        newState = {
            ...state,
            count:state.count - 1
        };
    } else if (action == "plus") {
        newState = {
            ...state,
            count:state.count + 1
        };
    } else {
        newState = state;
    }
    //상태값과 액션값을 활용해서 새로운 상태값을 리턴해주면 된다.
    return newState;
}

//함수형 component
function WeCounter2(){
    /* 
        [ 상태값, 상태를 변경할 때 사용할 함수 ] = useReducer( 리듀서 함수, 초기값 )
    */
    const [state, dispatch] = useReducer(reducer, {
        count:0
    })

    return (
        <div>
            <button onClick={()=>{
                //카운트 값을 감소시켜 달라는 이벤트를 발생(발행) 시킨다.
                dispatch("minus"); //결과적으로 리듀서 함수가 전달이 된다.
            }}>-</button>
            <strong>{state.count}</strong>
            <button onClick={()=>{
                dispatch("plus");
            }}>+</button>
        </div>
    )
}

export default WeCounter2