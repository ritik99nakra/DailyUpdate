import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import base_url from './api/bootapi';
import { id } from './EmpCard';
import Header from './Header';
import AuthContext from './store/auth-context';
import Task from './Task';
function Showtask() {
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const userid = authCtx.token;

    useEffect(()=>{
        getAllCoursesFromServer();

    },[]);



    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/user/task/${id}`).then(
            (response)=>{
               console.log(response.data);
               alert("All tasks");
               setCourses(response.data);
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
    <>
    <Header/>
    <div>
       <h1 className="text-white text-center"> All Tasks</h1>
       {
           courses.length>0 ?
           courses.map((item)=><Task course={item} update={updateCourses}/>)
           :"No tasks"
        }
       
    </div>
    </>
  )
    }

export default Showtask;
