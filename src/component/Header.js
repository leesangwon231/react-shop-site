import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faSearch,faBars} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import MyPageCard from "./MyPageCard";
const Header = ({setKeyword,setMenuFlag,menuFlag,myPageDetail}) => {

    const menuList = ["남성","여성","남성1","여성1"]

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/login")
    }

    const onClickMain = () => {
        navigate("/")
    }

    const getSearchkeyword = (event) => {


        setKeyword(event.target.value);
    }

    const clickMenuBar = () => {
        setMenuFlag(!menuFlag);
    }

    return (
        <div className={"header"}>
            <div className={`menu-bar ${menuFlag ? "menu-active": ""}`} onClick={clickMenuBar}>
                    <FontAwesomeIcon icon={faBars}/>
                <div className={"shopping-area"}>
                    <h1>구매 목록</h1>
                    {myPageDetail.map((data)=>(
                       <MyPageCard data={data}/>
                    ))}
                </div>
            </div>
            <div className={"login-button"} >
                <div><FontAwesomeIcon icon={faUser}/></div>
                <div onClick={onClickLogin}>로그인</div>
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
                    <input id={"searchText"} type={"text"} placeholder={"제품검색"}
                           onKeyUp={(event) => getSearchkeyword(event)}></input>
                </div>
            </div>
        </div>

    )
}

export default Header;