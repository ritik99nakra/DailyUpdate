import React, { useContext } from 'react'
import './Adminheader.css';

import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Nav, UncontrolledDropdown, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, NavbarText } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';


function Adminheader() {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const LogoutHandler = () => {
    authCtx.logout();
    navigate("/");
  }
  return (
    <div>
      <div>
  <Navbar
    // color="dark"
    dark
    expand="md"
    fixed="top"
    full
    light
    style={{backgroundColor:"#000000", height:"50px"}}
  >
  <img style={{paddingLeft:"10px",height:"30px",width:"60px"}} src="https://media-exp1.licdn.com/dms/image/C560BAQEO6y_-N2U4yg/company-logo_200_200/0/1636489071875?e=2159024400&v=beta&t=7ZMjgCcnGKqt8lxvO0-eT3SFC4X-ntQAA0gDBgLd6sY"></img>

    {/* <NavbarBrand href="/">
     
    </NavbarBrand> */}
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink>
            <Link  action to="/adminhome" tag="a" className= "text-light" className="nav-item nav-link active">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            
            <Link  action to="/createuser" tag="a" className= "text-light" className="nav-item nav-link active">Create User</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            
            <Link  action to="/allusers" tag="a" className= "text-light" className="nav-item nav-link active">All Users</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            
            <Link  action to="/deleteuser" tag="a" className= "text-light" className="nav-item nav-link active">Delete User</Link>
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText id='txt'>
         
        <Link  action to="/" tag="a" onClick={LogoutHandler} className= "text-light" className="nav-item nav-link active">Logout</Link>

      </NavbarText>
    </Collapse>
  </Navbar>
</div>

    </div>
  )
}

export default Adminheader
