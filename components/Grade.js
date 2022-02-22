import React,{useState} from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [grade, setGrade] = useState(0)
    const [name, setName] = useState("")
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const [result, setResult] = useState(0)
    const res = () =>{
        let name = document.getElementById('name').value
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult(result)
    }
    return<Layout><div><h1>성적표</h1>
    <label><b>name</b></label>
    <input id = "name" type= ""/><br/>
    <label><b>kor</b></label>
    <input id = "kor" type= ""/><br/>
    <label><b>eng</b></label>
    <input id = "eng" type= ""/><br/>
    <label><b>math</b></label>
    <input id = "math" type= ""/><br/>

    <button onClick={()=>res()}>확인</button>
    <div>결과 <br/>{"이름 : " + name} {"국어 : " +kor} {"영어 : " + eng} {"수학 : " + math}</div>

    
    </div>
    </Layout>
}