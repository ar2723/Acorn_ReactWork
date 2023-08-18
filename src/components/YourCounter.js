// src/components/MyCounter.js

import { useState } from "react"

//함수형 component
function YourCounter(){
    /* 
        함수형 Component에서 state 관리하기

        const [ 상태값, 상태값을 변화시키는 함수 ] = useState( 상태 값 )
    */
    // 구조 분해 할당은 아래 두 줄의 코딩을 한 줄로 합쳐서 하는 것이다.
    // const counter = useState(0)
    // const setCounter = useState(1)
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={()=>{
                setCount(count - 1)
            }}>-</button>
            <strong>{count}</strong>
            <button onClick={()=>{
                setCount(count + 1)
            }}>+</button>
        </div>
    )
}

export default YourCounter