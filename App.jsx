import React from "react";
import JESON from "./jsonFunction/Datas.json"
import Student from "./jsonFunction/Student";
import "./jeson.css"

const App= ()=>{
    return(
        <>
        {/* <Nav/> */}
        {/* <Function1/> */}
        <Student pay={JESON}/>
        </>
    )
}
export default App

