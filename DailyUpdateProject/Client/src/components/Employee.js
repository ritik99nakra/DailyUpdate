import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import base_url from './api/bootapi';
import Profile from './Profile';
import AuthContext from './store/auth-context';

function Employee() {
    let navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const userid = authCtx.token;
  
    useEffect(()=>{
        getEmployeeFromServer();

    },[]);



    const getEmployeeFromServer=()=>{
        axios.get(`${base_url}/user/${userid}`).then(
            (response)=>{
               console.log(response.data);
               setEmployee(response.data);
            },
            (error)=>{
                console.log(error);
            }
        )
    }
    const [employee,setEmployee]=useState([
       

    ]);
  
  
    return (
    <div className="text-white">
        <br></br><br></br>
        {
           employee.length>0 ?
           employee.map((item)=><Profile profile={item} />)
           :" Wrong"
        }
      
    </div>
  )
}

export default Employee