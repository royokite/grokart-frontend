import React from 'react';
import { Container, Row, Col, Tab, Nav, Image } from 'react-bootstrap';
import './my-account.css';
import OrderCard from './OrderCard';


const MyAccount = () => {

    return (
        <Container className="py-5 mt-2">
            <h2 className="text-center">My Account</h2>
            <hr />
            <Tab.Container defaultActiveKey="my-orders">
                <Row className="justify-content-evenly mt-4 p-1">
                     <Col sm={3} className={"text-white p-2 rounded h-100 mb-3 user-menu"} style={{backgroundColor: "#1c1e1f"}}>
                        <Row className="mb-3 py-2">
                           <Col xs={3} className="pe-0">
                                <Image
                                    src="https://s3-eu-west-1.amazonaws.com/naivas-live/productImage/NVSS02135.png"
                                    thumbnail
                                    fluid
                                    roundedCircle
                                    className="p-0"
                                />
                           </Col> 
                           <Col xs={9} className="pt-1">
                                <span>Hello,</span>
                                <h4 style={{color: "#f97316"}}>Username</h4>
                           </Col>
                        </Row>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="my-orders" className="position-relative">
                                    My Orders
                                    <span className="position-absolute top-50 end-0 translate-middle-y mx-3">
                                        <i className="fa fa-list"></i>
                                    </span>
                                </Nav.Link>
                                <Nav.Link eventKey="account-details" className="position-relative">
                                    Account Details
                                    <span className="position-absolute top-50 end-0 translate-middle-y mx-3">
                                        <i className="fa fa-cogs"></i>
                                    </span>
                                </Nav.Link>
                                <Nav.Link eventKey="address" className="position-relative">
                                    Address
                                    <span className="position-absolute top-50 end-0 translate-middle-y mx-3">
                                        <i className="fa fa-address-card"></i>
                                    </span>
                                </Nav.Link>
                                <Nav.Link href="/login" className="position-relative">
                                    Log out
                                    <span className="position-absolute top-50 end-0 translate-middle-y mx-3">
                                        <i className="fa fa-sign-out"></i>
                                    </span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                     </Col>
                     <Col sm={8} className="text-white p-2 rounded" style={{backgroundColor: "#1c1e1f"}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="my-orders">
                                <h3 className="text-center text-white">My Orders</h3>
                                <OrderCard 
                                    orderDate="24 Jun, 2022" 
                                    orderId="1234" 
                                    title="Brookside Fresh Milk 500 ml"
                                    img="https://s3-eu-west-1.amazonaws.com/naivas-live/productImage/NVS5749_2.jpg"
                                    deliveredDate="15 Jan, 2023"
                                />
                                <OrderCard 
                                    orderDate="24 Jun, 2022" 
                                    orderId="1334" 
                                    title="Goat Ribs 500 g"
                                    img="https://s3-eu-west-1.amazonaws.com/naivas-live/productImage/NVSO034x.jpg"
                                    deliveredDate="15 Jan, 2023"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="account-details">
                                <h3>Account details</h3>
                                              
                
                  <input name='Username'  label='Username' placeholder='Username' width={6} />
                  <input label='Username'  width={10}  />
               

               
                  <input name='given_name' label='First name' placeholder='First Name' width={6} />
                  <input name='middle_name'  label='Middle Name' placeholder='Middle Name' width={4}  />
                  <input name='family_name'  label='Last Name' placeholder='Last Name' width={6}  />
               
                
             
                  <input name='birthdate'  label='Birthday' placeholder='02/02/2002' width={4} />
                  
           

               
                  <input name='phone_number'  label='Mobile number'  placeholder='+254 700 000' width={6}  />
                  <input name='website'  label='Website' placeholder='www.mywebsite.com' width={10} />
                
              
                  <input name='address'  label='Address' placeholder='2/77 New Street, Redport 3015-0200 Nairobi, Kenya ' width={16}  />
             

                            </Tab.Pane>
                            <Tab.Pane eventKey="address">
                                <h3>Address</h3>
                            </Tab.Pane>
                        </Tab.Content>
                     </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default MyAccount;