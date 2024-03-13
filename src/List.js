import React,{useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import {FaEdit , FaTrash} from "react-icons/fa"
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
function List() {
    const firstURL = "http://localhost:3000";

    const [dramas, setdramas] = useState([]);
    const Navigate = useNavigate();

    const setDramaData = () =>{
        axios.get(firstURL+"/dramas")

        .then((response)=>{
            setdramas(response.data);
        }
   );
    }
    useEffect(()=>{
        setDramaData();
    },[]);
    const removeDrama = (id) =>{
      axios.delete(firstURL+"/dramas/"+id)

      .then((response)=>{
        alert("drama is deleted");
          setDramaData();
      }
      );
  }
    return ( 
        <div>
          <h2>Drama List</h2>
    <Table striped bordered hover variant='blue'>
      <thead>
        <tr>
          <th>id</th>
          <th>Drama name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        </thead>
      <tbody>
        {
            dramas && dramas.map((dramas, index) => (
            <tr>
                <td>{dramas.id}</td>
                <td>{dramas.name}</td>
                <td>{dramas.description}</td>

                <td>
                <button className='button' onClick={()=>Navigate('/Edit/'+(dramas.id))}><FaEdit/></button>

                <button className='button' onClick={()=> removeDrama(dramas.id)}><FaTrash/></button>
              </td>
  
            </tr>
            ))
        }
      </tbody>
      </Table>   
        </div>
    );
}
export default List;
