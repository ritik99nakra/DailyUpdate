import React from 'react'
import './Footer.css';

import { Navbar,Row, Card, CardBody, CardText,Col, CardTitle, Button, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Nav, UncontrolledDropdown, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, NavbarText } from 'reactstrap';


function Footer() {
  return (
    <div >
      <div>
  <Navbar
    // color="dark"
    dark
    expand="md"
    fixed= "bottom"
    full
    light
    style={{backgroundColor:"#000000"}}
  >
    
      
      <NavbarText id='txt'>
        
      © 2022 PDGC, LLC. All rights reserved. 
      </NavbarText>
  </Navbar>
</div>

    
    
     </div>
  )
}

export default Footer
