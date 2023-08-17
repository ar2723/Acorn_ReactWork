// src/components/MenuComponent.js

import { Component } from "react";

class MenuComponent extends Component {

    render(){
        //체크박스를 출력할 데이터를 담은 배열
        let menu=[
            {id:1, name:"김밥"},
            {id:2, name:"라면"},
            {id:3, name:"떡복기"},
            {id:4, name:"만두"},
            {id:5, name:"우동"}
        ];
        const checkList = menu.map((item)=>{
            return (
                <label key={item.id}>
                    <input type="checkbox" /> {item.name}
                </label>
            )
        
        });
        const checkedList = menu.map((item) => {
            
            return (
                <div></div>
            )
        });
        return (
            <div>
                <h3>먹고 싶은 메뉴를 체크 하세요</h3>
                    {checkList}
                <h3>선택된 메뉴 목록입니다.</h3>
                <ul>
                    {checkedList}
                </ul>
            </div>
        )
    }
}

export default MenuComponent