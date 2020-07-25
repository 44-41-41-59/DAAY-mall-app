import React from 'react';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function Tabs (){
  return (
    <span class="border border-primary">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Whish-list</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Favorite Stores</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Viewed Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Settings</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  <Card>
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div class="card mb-3" style={{width: '540px'}}>
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src="holder.js/200x200" class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3" style={{width: '540px'}}>
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src="holder.js/200x200" class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3" style={{width: '540px'}}>
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src="holder.js/200x200" class="card-img" alt="..."/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Row>
                  <Card>
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                  <Card >
                    <Card.Img variant="top" src="holder.js/200x200" />
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">

              Change Theme 
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary">Dark</Button>
                  <Button variant="light">Light</Button>
                </ButtonGroup>
      
                <Form id='chnagepassword' >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Current Passwrord</Form.Label>
                    <Form.Control type="email"  />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="passwrod2" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                         Submit
                  </Button>
                </Form>

                <Form id='changingcountry' >
                  <Form.Label>Choose your Country</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
    Country
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Label>Choose Currency</Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
    Currency
                    </Dropdown.Toggle>
                    <Form.Group controlId="formBasicPassword">
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Form.Group>
                  </Dropdown>
                  <Button variant="primary" type="submit">
                         Save
                  </Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </span>);
}

export default Tabs;