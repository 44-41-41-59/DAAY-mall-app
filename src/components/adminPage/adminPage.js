import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default function AdminPage(props) {
  return (
    <div class="adminPage">
      <Form>
        <Form.Label id="adminLabel">Admin Page</Form.Label>
        <div id="forButtons">
          <Link to="/admin/dashboard">
            <Button variant="primary">
          Items Detail
            </Button>
          </Link>
          <Link to="/admin/freeze">
            <Button variant="primary">
          Freeze
            </Button>
          </Link>
        </div>
        {/* <img src="https://wallpaperaccess.com/full/16692.jpg"></img> */}
      </Form>
      
    </div>
    
  );
}

