// src/components/OurCounter.js

import { useState } from "react"

//함수형 component
function OurCounter(){

    const [state, setState] = useState({count:0})

    return (
        <div>
            <button onClick={()=>{
                setState({
                    count:state.count - 1
                })
            }}>-</button>
            <strong>{state.count}</strong>
            <button onClick={()=>{
                setState({
                    count:state.count + 1
                })
            }}>+</button>
        </div>
    )
}

export default OurCounter