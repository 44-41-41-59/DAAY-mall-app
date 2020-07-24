import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';



import './homepage.css';

function SideNav(props) {
  return (

  /*  PLEASE KEEP THIS COMMENT */

  // <Accordion defaultActiveKey="0">
  //   <Card>
  //     <Card.Header>
  //       <Accordion.Toggle as={Button} variant="link" eventKey="0">
  //         Click me!
  //       </Accordion.Toggle>
  //     </Card.Header>
  //     <Accordion.Collapse eventKey="0">
  //       <Card.Body>Hello! I'm the body</Card.Body>
  //     </Accordion.Collapse>
  //   </Card>
  // </Accordion>


    <ProSidebar>
      <Menu >
        <MenuItem >Dashboard</MenuItem>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
        <SubMenu title="Components" >
          <MenuItem>Component 1</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}


export default SideNav;
