import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Bmi (){
    const [bmi, setBmi] = useState(0)
    const [name, setName] = useState(0)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [result, setResult] = useState(0)
    const res = ()=> {
        let name = document.getElementById('name').value
        let height = document.getElementById('height').value
        let weight = document.getElementById('weight').value
        setName(name)
        setHeight(height)
        setWeight(weight)
        setResult(name, height, weight)
    }


    return<Layout><h1>체지방측정기</h1>
    <div>
    <label><b>이름</b></label>
    <input id = "name" type=""/><br/>
    <label><b>키</b></label>
    <input id = "height" type=""/><br/>
    <label><b>무게</b></label>
    <input id = "weight" type=""/><br/>
    <button onClick={()=>res()}>확인</button>
    <div>결과 : {name}, 키 : {height}, 무게 : {weight} </div>
    </div>
    
    
    
    
    </Layout>
}