import axios from 'axios';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'

import base_url from '../api/bootapi'


let id=0;
function TeamCard({empcard}) {
    let navigate =useNavigate();
    const TasksHandler =() => {
    
        id = empcard.id;
        navigate("/mentorTask");
       
    };


  return (
    <>

        
          <tr>
            
            <td>{empcard.name}</td>
            <td>{empcard.email}</td>
            <td>{empcard.role}</td>
            <td> <Button color="warning" onClick={TasksHandler} value = {empcard.id} style={{marginLeft:"20px"}}>
                    Show Tasks
                </Button></td>
          </tr>

       
    </>
  )
}

export default TeamCard
export {id}


