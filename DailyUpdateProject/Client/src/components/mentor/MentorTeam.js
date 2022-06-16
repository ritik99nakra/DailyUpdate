import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard'
import axios from 'axios';
import base_url from '../api/bootapi';

import MentorHeader from './MentorHeader';
import { Table } from 'reactstrap';

function MentorTeam() {
    
    const userid = localStorage.getItem("token");

    const getAllEmp = () => {
        axios.get(`${base_url}/mentor/${userid}`).then(
          (response) => {
            alert(userid);
            console.log(response.data);
            setEmp(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
      };
      useEffect(() => {
        getAllEmp();
      },[]);
    
      const [emp, setEmp] = useState([]);


  return (
    <div>
    <MentorHeader/>
      <h3>List of all the emp {userid}</h3>
      <Table hover  className='text-center bg-white' style={{marginLeft:"340px",marginTop:"80px"}}>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
      
      
      {
        emp.length>0 ? 
        emp.map((i)=> <TeamCard empcard ={i} />)
        :"No Record Found"
      }
      </tbody>
      </Table>
    </div>
  )
}

export default MentorTeam
