import { colors } from '../../colors';
import '../css/QnA.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {HiOutlineSearch} from "react-icons/hi";
import Button from 'react-bootstrap/Button';
import {useState} from 'react';


function QnA({qna}) {
    const [pressedSeeMore, setPressedSeeMore] = useState(false);

    function handleSeeMore(){
      setPressedSeeMore(true);
    }
    function handleHide(){
      setPressedSeeMore(false);
    }

    return (
    <div style={{marginTop: "50px", borderBottom: "1px solid black", paddingBottom: "40px"}}>
        <h1>Questions & Answers</h1>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1"><HiOutlineSearch fontSize="20px"/></InputGroup.Text>
          <Form.Control
            placeholder="Search in Q&A"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <div className="QnAContainer">
          {qna.slice(0, 3).map((q) => (
            <div style={{marginBottom: "15px"}}>
              <p><b style={{paddingRight: "10px"}}>Question:</b> {q.questionText}</p>
              <p><b style={{paddingRight: "18px"}}>Answer:</b> {q.answerText}</p>
              <p style={{marginLeft: "80px", color: colors["darkGray"]}}>By {q.answerUsername} on {q.dateAnswered}</p>
            </div>
          ))}
          {
            pressedSeeMore && 
            qna.slice(3, qna.length).map((q) => (
              <div style={{marginBottom: "15px"}}>
                <p><b style={{paddingRight: "10px"}}>Question:</b> {q.questionText}</p>
                <p><b style={{paddingRight: "18px"}}>Answer:</b> {q.answerText}</p>
                <p style={{marginLeft: "80px", color: colors["darkGray"]}}>By {q.answerUsername} on {q.dateAnswered}</p>
              </div>
            ))
          }
        </div>
        {!pressedSeeMore && qna.length > 3 &&  <Button style={{marginLeft: "80px"}} variant="outline-dark" onClick={handleSeeMore}>See more answered questions</Button>}
        {pressedSeeMore && <Button style={{marginLeft: "80px"}} variant="outline-dark" onClick={handleHide}>Hide questions</Button>}
      </div>
    );
  }
  
  export default QnA;
  