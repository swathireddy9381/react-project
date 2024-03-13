import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import{ Button, Alert} from 'react-bootstrap';
import Row from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Drama() {
  const firstURL = "http://localhost:3000/dramas";
  const navigate = useNavigate();
  //Hooks
  const [dramaName, setdramaName] = useState('');
    const [dramaDesc, setdramaDesc] = useState('');
    //change handler
    const dramaNameChangeHandler = (event) => {
      setdramaName(event.target.value);
      console.log(event.target.value);
  };
  // coursename desc handler
  const dramaDescChangeHandler = (event) => {
      setdramaDesc(event.target.value);
      console.log(event.target.value);
  };
// Add sumbitactiohandler
const submitActionHandler = (event) => {
  event.preventDefault();
  axios.post(firstURL,{
    name:dramaName,
    description:dramaDesc
  })
  .then((response) => {
    console.log(response);
          alert("drama " + dramaName + " is added!");
          navigate("/");
        });
}
    return ( 
      <div className ="App">
        <Alert variant='primary'>
        <br></br>
        <br></br>
        <br></br>   
        <br></br>  
         <br></br>   
        <br></br>
    <Form onSubmit={submitActionHandler}>
      
    <Row className="mb-3">
        <Form.Group as={Col} controlId="form.Name">
          <Form.Label>Enter Drama name</Form.Label>
          <Form.Control type="text" placeholder="drama" value={dramaName} onChange={dramaNameChangeHandler}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
          <Form.Label>Drama Description</Form.Label>
          <Form.Control type="text" placeholder="text" value={dramaDesc} onChange={dramaDescChangeHandler}/>
      
        </Form.Group>
      </Row><br></br>
      <Button type="submit"> Add Drama</Button><br></br><br></br>
      <Button type="submit"> Cancel</Button>
    </Form>
    </Alert>
    </div>
    );
}
export default Drama;