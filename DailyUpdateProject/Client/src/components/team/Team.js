import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import base_url from '../api/bootapi';
import AuthContext from '../store/auth-context';
// import base_url from './api/bootapi';
// import Adminheader from './admin/Adminheader';
// import AuthContext from './store/auth-context';





  



function Team() {

  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const userid = authCtx.token;
    const userRole = authCtx.token1;

    useEffect(()=>{
        getAllCoursesFromServer();

    },[]);



    const getAllCoursesFromServer=()=>{
      let v="Pavan Khatri";
        axios.get(`${base_url}/teams/${v}`).then(
            (response)=>{
               console.log(response.data);
               alert(response.data);
              //  setCourses(response.data);
            },
            (error)=>{
                console.log(error);
            }
        )
    }
    
    
    
    const [courses,setCourses]=useState([
       

    ]);
    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id !== id));
    };

    


  return (
    <div>
      
    </div>
  )
}

export default Team
