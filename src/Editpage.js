import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import{ Button, Alert} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const Edit = ()  => {
  const firstURL = "http://localhost:3000/dramas";
  const navigate = useNavigate();
  //Hooks`
  const{id}=useParams();
  const [EditdramaName, setEditdramaName] = useState('');
    const [EditdramaDesc, setEditdramaDesc] = useState('');
    const getDetails=()=>{
        axios.get(firstURL + "/" + id)
        .then(response =>{
            const update=response.data;
            setEditdramaName(update.name)
            console.log(update.name)
            setEditdramaDesc(update.description);
        })
    }
    //change handler
    const dramaNameChangeHandler = (event) => {
        setEditdramaName(event.target.value);
      // console.log(event.target.value);
  };
  // coursename desc handler
  const dramaDescChangeHandler = (event) => {

        setEditdramaDesc(event.target.value);
        // console.log(event.target.value);
  };
// Add sumbitactiohandler
const submitActionHandler = (event) => {
  event.preventDefault();
  axios.put(firstURL+"/"+id,{
    name:EditdramaName,
    description:EditdramaDesc
  })
  .then((response) => {
    console.log(response);
          alert("Drama" + EditdramaName + " is added!");
          navigate("/link");
        });
};
useEffect(()=>{
    if(id)
    getDetails(id);},[id]);
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
        <Form.Group controlId="form.Name">
          <Form.Label>Enter Drama name</Form.Label>
          <Form.Control type="text" placeholder="drama" value={EditdramaName} onChange={dramaNameChangeHandler}required/>
        </Form.Group>
        <Form.Group  controlId="form.role">
          <Form.Label>Drama Description</Form.Label>
          <Form.Control type="text" placeholder="text" value={EditdramaDesc} onChange={dramaDescChangeHandler}required/>
        </Form.Group>
        <Button type='submit'>Edit drama</Button>
       
        <Button type='submit'>Cancel</Button>
    </Form>
    </Alert>
    </div> 
    
    );
}
export default Edit;