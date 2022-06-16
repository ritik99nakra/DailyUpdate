import axios from 'axios';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'
import Adminheader from './admin/Adminheader';
import base_url from './api/bootapi';


let id = 0;
const EmpCard = ({empcard, update}) => {
    let navigate = useNavigate();

    const DeleteHandler =() => {
        axios.delete(`${base_url}/delete/${empcard.id}`).then(
            (response)=>{
                alert("user deleted");
                update(empcard.id);
            },
            (error)=>{
                alert("user not deleted")
            }
        )
    };

    const TasksHandler =() => {
    
        id = empcard.id;
        navigate("/adminalltasks");
       
    };

    return (
        <>
        <div style={{marginLeft:"450px", marginTop: "40px"}}>
            <Card
                body
                color="dark"
                inverse
                style={{width:"600px"}}
            >
                <CardBody>
                    <CardSubtitle tag="h5">
                       Name: {empcard.name}
                    </CardSubtitle>
                    <CardText>
                        
                    <br></br>
                        Email: {empcard.email}
                    
                        <br></br>
                       <p className='mt-2'> Role:  {empcard.role} </p>
                    </CardText>
                    <Button color="danger" onClick={DeleteHandler} value = {empcard.id} style={{marginLeft:"150px"}}>
                        Delete User
                    </Button>
                    <Button color="warning" onClick={TasksHandler} value = {empcard.id} style={{marginLeft:"20px"}}>
                        Show Tasks
                    </Button>
                </CardBody>
            </Card>
        </div>
        </>
    )
}

export default EmpCard
export {id}