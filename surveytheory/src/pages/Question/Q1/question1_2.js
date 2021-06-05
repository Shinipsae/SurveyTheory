import React, { useState, ReactDom } from "react";
import "../question.css";
import Button from "../../../component/Button";
import { Link } from "react-router-dom"; 

function Question1_2(){
        const [number, setNumber] = useState(0);

        const onIncrease = () => {
            setNumber(number + 1);
            console.log(number + 1);
        }

        const onDecrease = () => {
            setNumber(number - 1);
            console.log(number - 1);
        }
        const question_title = "Q2. 처음 'Hello World'를 html에서 출력해보았다.";
        const btn1 ="YES";
        const btn2 = "NO";
    return (
            <div className="Question">
                <div className="container">
                    <progress id="progressbar" value="35" max="100"></progress>
                    <div
                        className="question_title"
                        // html 형태로 렌더링 허용
                    >{question_title}</div>

                    <div className="buttons">
                        <Link to="./question1_3">
                        <Button
                            onClick={() =>onIncrease() }
                        >
                            {btn1}
                        </Button></Link>
                        <br />
                        <Link to="./question1_3">
                        <Button
                            onClick={() =>onDecrease()}
                        >
                           {btn2}
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
export default Question1_2;


// 기본 props 값
//question.defaultProps = {
  //  question_title: "Q2. 처음 'Hello World'를 html에서 출력해보았다.",
    //btn1: "YES",
    //btn2: "NO"
//};

