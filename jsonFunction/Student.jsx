import React from "react";

const Student=(props)=>{
    return(
        <div className="parentblock">
            <h1>Students Deatials</h1>
            <div className="mainblock">
        <img src={props.pay[0].image} alt=""/>
        <h2>{props.pay[0].student_Name}</h2>
        <h2>{props.pay[0].Course}</h2>
        <h2>{props.pay[0].RollNo}</h2>
        <h2>{props.pay[0].Grade}</h2>
        <h2>{props.pay[0].Blood}</h2>
        </div>
        <div className="mainblock">
        <img src={props.pay[1].image} alt="" />
        <h2>{props.pay[1].student_Name}</h2>
        <h2>{props.pay[1].Course}</h2>
        <h2>{props.pay[1].RollNo}</h2>
        <h2>{props.pay[1].Grade}</h2>
        <h2>{props.pay[1].Blood}</h2>
        </div>
        <div className="mainblock">
        <img src={props.pay[2].image} alt="" />
        <h2>{props.pay[2].student_Name}</h2>
        <h2>{props.pay[2].Course}</h2>
        <h2>{props.pay[2].RollNo}</h2>
        <h2>{props.pay[2].Grade}</h2>
        <h2>{props.pay[2].Blood}</h2>
        </div>
        <div className="mainblock">
        <img src={props.pay[3].image} alt="" />
        <h2>{props.pay[3].student_Name}</h2>
        <h2>{props.pay[3].Course}</h2>
        <h2>{props.pay[3].RollNo}</h2>
        <h2>{props.pay[3].Grade}</h2>
        <h2>{props.pay[3].Blood}</h2>
        </div>
        <div className="mainblock">
        <img src={props.pay[4].image} alt="" />
        <h2>{props.pay[4].student_Name}</h2>
        <h2>{props.pay[4].Course}</h2>
        <h2>{props.pay[4].RollNo}</h2>
        <h2>{props.pay[4].Grade}</h2>
        <h2>{props.pay[4].Blood}</h2>
        </div>
        <div className="mainblock">
        <img src={props.pay[5].image} alt="" />
        <h2>{props.pay[5].student_Name}</h2>
        <h2>{props.pay[5].Course}</h2>
        <h2>{props.pay[5].RollNo}</h2>
        <h2>{props.pay[5].Grade}</h2>
        <h2>{props.pay[5].Blood}</h2>
        </div>
        <div className="mainblock">
        <img src={props.pay[6].image} alt="" />
        <h2>{props.pay[6].student_Name}</h2>
        <h2>{props.pay[6].Course}</h2>
        <h2>{props.pay[6].RollNo}</h2>
        <h2>{props.pay[6].Grade}</h2>
        <h2>{props.pay[6].Blood}</h2>
        </div>
        <div className="mainblock">
        <img src={props.pay[7].image} alt="" />
        <h2>{props.pay[7].student_Name}</h2>
        <h2>{props.pay[7].Course}</h2>
        <h2>{props.pay[7].RollNo}</h2>
        <h2>{props.pay[7].Grade}</h2>
        <h2>{props.pay[7].Blood}</h2>
        </div>
        <div className="mainblock">
        <img src={props.pay[8].image} alt="" />
        <h2>{props.pay[8].student_Name}</h2>
        <h2>{props.pay[8].Course}</h2>
        <h2>{props.pay[8].RollNo}</h2>
        <h2>{props.pay[8].Grade}</h2>
        <h2>{props.pay[8].Blood}</h2>
        </div>
        <div className="mainblock">
        <img src={props.pay[9].image} alt="" />
        <h2>{props.pay[9].student_Name}</h2>
        <h2>{props.pay[9].Course}</h2>
        <h2>{props.pay[9].RollNo}</h2>
        <h2>{props.pay[9].Grade}</h2>
        <h2>{props.pay[9].Blood}</h2>
        </div>
        </div>
    )
}
export default Student



