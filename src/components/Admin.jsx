import React from "react";
import { Container, Row, Col, Tab, Nav, Image, Button } from 'react-bootstrap';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import './my-account.css';

const Admin = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
      } 
  
    return (
        <Container className="py-5 mt-2">
            <Tab.Container defaultActiveKey="ecommerce">
                <Row className="justify-content-evenly mt-4 p-1">
                     <Col sm={3} className={"text-white p-2 rounded h-100 mb-3 user-menu"} style={{backgroundColor: "#1c1e1f"}}>
                        <Row className="mb-3 py-2">
                           <Col xs={3} className="pe-0">
                                <Image
                                    src="./images/gro-kart-website-favicon-color.png"
                                    thumbnail
                                    fluid
                                    roundedCircle
                                    className="p-0"
                                />
                           </Col> 
                           <Col xs={9} className="pt-1">
                                {user && (
                                    <>
                                        <span>Hello,</span>
                                        <h4 style={{color: "#f97316"}}>{user.user.username}</h4>
                                    </>
                                )}
                           </Col>
                        </Row>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="ecommerce" className="position-relative">
                                    Ecommerce
                                    <span className="position-absolute top-50 end-0 translate-middle-y mx-3">
                                        <i className="fa fa-list"></i>
                                    </span>
                                </Nav.Link>
                                <Nav.Link eventKey="customers" className="position-relative">
                                    Customers
                                    <span className="position-absolute top-50 end-0 translate-middle-y mx-3">
                                        <i className="fa fa-cogs"></i>
                                    </span>
                                </Nav.Link>
                                <Nav.Link eventKey="products" className="position-relative">
                                    Products
                                    <span className="position-absolute top-50 end-0 translate-middle-y mx-3">
                                        <i className="fa fa-cogs"></i>
                                    </span>
                                </Nav.Link>
                                <Nav.Link eventKey="orders" className="position-relative">
                                    Orders
                                    <span className="position-absolute top-50 end-0 translate-middle-y mx-3">
                                        <i className="fa fa-cogs"></i>
                                    </span>
                                </Nav.Link>
                                <Button className="d-flex w-100" onClick={handleClick}>
                                    <span className="flex-start">
                                        Log out
                                    </span>
                                    <span className="ms-3 flex-end">
                                        <i className="fa fa-sign-out"></i>
                                    </span>
                                </Button>
                            </Nav.Item>
                        </Nav>
                     </Col>
                     <Col sm={8} className="text-white p-2 rounded" style={{backgroundColor: "#1c1e1f"}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="ecommerce">
                                <h3 className="text-center text-white">Ecommerce Tracker</h3>
                            </Tab.Pane>
                            <Tab.Pane eventKey="ecommerce">
                            <hr />
                            <div>
                                <div>Details</div>
                            </div>                                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="address">
                                <h3>Address</h3>
                            </Tab.Pane>
                        </Tab.Content>
                     </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
};

export default Admin;