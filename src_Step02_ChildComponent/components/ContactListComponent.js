// from "react" 를 통해 {} object를 불러온게 된다.
// 그리고 이 object 안에서 Component 라는 요소를 불러온 것이다.
// 구조 분해 할당 문법이라고 생각하면 편하다.
import { Component } from "react";

class ContactList extends Component{
    render(){
        return (
            <ul>
                <li>김구라 : 010</li>
                <li>해골 : 011</li>
                <li>원숭이 : 012</li>
            </ul>
        )
    }
}

export default ContactList