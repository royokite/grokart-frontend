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
                            <hr />
                            <div>
                                {/* { user ? ( */}
                                <form className="needs-validation">
                                    <div className="mb-3">
                                        <label for="name">Full name</label>
                                        <input type="text" className="form-control" id="name" placeholder="John Doe" />
                                    </div>

                                    <div className="mb-3">
                                        <label for="username">Username</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input type="text" className="form-control" id="username" placeholder="Username" />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    </div>

                                    <div className="mb-3">
                                        <label for="address">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                                    </div>
                                </form>
                                {/* ) : ( */}
                                {/* <div>
                                    <div className="mb-3">
                                        <label htmlFor="name">Full name</label>
                                        <p className="fs-4"></p>
                                    </div>
                    
                                    <div className="mb-3">
                                      <label htmlFor="username">Username</label>
                                        <p className="fs-4"></p>
                                    </div>
                    
                                    <div className="mb-3">
                                      <label htmlFor="email">Email</label>
                                      <p className="fs-4"></p>
                                    </div>
                    
                                    <div className="mb-3">
                                      <label htmlFor="address">Address</label>
                                      <p className="fs-4"></p>
                                    </div>
                                    <hr className="mb-4" />                    
                                </div> */}
                                {/* )} */}
                            </div>                                            
                            </Tab.Pane>
                        </Tab.Content>
                     </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default MyAccount;