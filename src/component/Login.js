import React from 'react'
import {useNavigate} from "react-router-dom";

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const formSubmit= (event) => {
        event.preventDefault();
        if(event.target[0].value === "werggf" && event.target[1].value === "1234"){
            setAuthenticate(true);
            navigate("/");
        }else{
            alert("존재 하지 않는 회원 입니다.")
            return false;
        }


    }
    return (
        <div className={"login-container"}>

            <div className={"login-wrapper"}>
                <span>LOGIN</span>
                <form onSubmit={(event) => formSubmit(event)}>
                    <input id="id" type={"text"} placeholder={"아이디를 입력해주세요"}/>
                    <input id="password" type={"password"} placeholder={"비밀번호를 입력해주세요"}/>
                    <button type={"submit"} className={"login-page-button"}>LOGIN</button>
                </form>
            </div>
</div>
)
}

export default Login;