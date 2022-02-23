import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Login (){
    const [id, setId] = useState("")
    const [pw, setPw] = useState(0)
    const [name, setName] = useState("")
    const res =()=>{
        let id = document.getElementById('id').value
        let pw = document.getElementById('pw').value
        let name = document.getElementById('name').value
        setId(id)
        setPw(pw)
        setName(name)
    }
    return<Layout>
    <h1>로그인</h1>
    <div>
    <label><b>아이디</b></label>
    <input id = "id" type = ""/><br/>

    <label><b>이름</b></label>
    <input id = "name" type = ""/><br/>
    
    <label><b>비밀번호</b></label>
    <input id = "pw" type = ""/><br/>

    <button onClick={()=>res()}>로그인</button><br/>
    <label><input type = "checkbox"/>Remember me</label><br/>
    </div>
    <div> 아이디 : {id} 이름 {name} 비밀번호 : {pw}</div>
    <div>
    <button>취소</button><br/>
    <span>Forgot<a>Password?</a></span>
    </div>
    </Layout>
}