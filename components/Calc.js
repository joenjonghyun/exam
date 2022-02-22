import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Calc (){
    const [num1, setNum1] = useState(0)
    const [opcode, setOpcode] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const res =()=>{
        let num1 = document.getElementById('num1').value
        let opcode = document.getElementById('opcode').value
        let num2 = document.getElementById('num2').value
        setNum1(num1)
        setOpcode(opcode)
        setNum2(num2)
        switch(opcode){
            case "+" :
                return setResult(Number(num1) + Number(num2))
            case "-" :
                return setResult(Number(num1) - Number(num2))
            case "*" : 
                return setResult(Number(num1) * Number(num2))
            case "/" :
                return setResult(Number(num1) / Number(num2))
            case "%" :
                return setResult(Number(num1) % Number(num2))
                default :
        }
        
    }
    return<Layout>
    <h1>계산기</h1>
    <div>
    <label><b>num1</b></label>
    <input id = "num1" type = ""/><br/>
    <label><b>opcode</b></label>
    <select name="" id = "opcode">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
    <option value="%">%</option>
    </select><br/>


    <label><b>num2</b></label>
    <input id = "num2" type = ""/><br/>
    <button onClick={()=>()}>실행</button>
    <div>결과 : {num1} {opcode} {num2} = {result}</div>
    
    </div>
    </Layout>
}