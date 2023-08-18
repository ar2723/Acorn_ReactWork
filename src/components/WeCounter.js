// src/components/WeCounter.js

import { useReducer } from "react"

const ACTION = {
    MINUS : 0,
    PLUS : 1
}

//리듀서 함수 만들기
const reducer = (count, action) => {
    let newCount;
    //상태값과 액션값이 전달된다.
    if(action == ACTION.MINUS){
        newCount = count - 1;
    } else if (action == ACTION.PLUS) {
        newCount = count + 1;
    } else {
        newCount = count;
    }
    //상태값과 액션값을 활용해서 새로운 상태값을 리턴해주면 된다.
    return newCount;
}

//함수형 component
function WeCounter(){
    /* 
        [ 상태값, 상태를 변경할 때 사용할 함수 ] = useReducer( 리듀서 함수, 초기값 )
    */
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <button onClick={()=>{
                //카운트 값을 감소시켜 달라는 이벤트를 발생(발행) 시킨다.
                dispatch(ACTION.MINUS); //결과적으로 리듀서 함수가 전달이 된다.
            }}>-</button>
            <strong>{count}</strong>
            <button onClick={()=>{
                dispatch(ACTION.PLUS);
            }}>+</button>
        </div>
    )
}

export default WeCounter