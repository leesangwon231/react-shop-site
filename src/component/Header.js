import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
const Header = () => {

    const menuList = ["남성","여성","남성1","여성1"]

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/login")
    }

    const onClickMain = () => {
        navigate("/")
    }

    return (
        <div className={"header"}>
            <div className={"login-button"} onClick={onClickLogin}>
                <div><FontAwesomeIcon icon={faUser}/></div>
                <div>로그인</div>
            </div>
            <div className={"nav-section"}>
                <img width={"100px"}
                     src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s"}
                     onClick={onClickMain}/>
            </div>
            <div className={"menu-area"}>
                <ul className={"menu-list"}>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className={"search-area"}>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type={"text"} placeholder={"제품검색"}></input>
                </div>
            </div>
        </div>

    )
}

export default Header;