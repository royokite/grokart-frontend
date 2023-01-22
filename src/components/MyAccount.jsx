import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Image } from 'react-bootstrap';
import './my-account.css';
import OrderCard from './OrderCard';
import { useAuthContext } from "../hooks/useAuthContext";


const MyAccount = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [contact, setContact] = useState();
    const [address, setAddress] = useState("");
    const { user } = useAuthContext();

    const handleUpdate = (e) => {
        e.preventDefault()
        const updateUser = {
            name,
            age,
            email,
            gender,
            contact,
            address
        };

        fetch(`https://grokart.onrender.com/users/${user.user.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())        
    };

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
                                    src="./images/gro-kart-logo.png"
                                    thumbnail
                                    fluid
                                    className="p-0"
                                />
                           </Col> 
                           {/* <Col xs={9} className="pt-1">
                                <h3 style={{color: "#f97316"}}>GK</h3>
                           </Col> */}
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
                                    orderDate="12 Jan, 2022" 
                                    orderId="1234" 
                                    title="Brookside Fresh Milk 500 ml"
                                    img="https://s3-eu-west-1.amazonaws.com/naivas-live/productImage/NVS5749_2.jpg"
                                    deliveredDate="15 Jan, 2023"
                                />
                                <OrderCard 
                                    orderDate="13 Jan, 2022" 
                                    orderId="1334" 
                                    title="Goat Ribs 500 g"
                                    img="https://s3-eu-west-1.amazonaws.com/naivas-live/productImage/NVSO034x.jpg"
                                    deliveredDate="16 Jan, 2023"
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="account-details">
                            <h3>Account details</h3>
                            <hr />
                            <div>
                                {/* { !user || showForm ? ( */}
                                <form onSubmit={handleUpdate}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name">Full name</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="name" 
                                                value={name} 
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="age">Age</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="age" 
                                                value={age} 
                                                onChange={(e) => setAge(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email">Email</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="email" 
                                                value={email} 
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="gender">Gender</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="gender" 
                                                value={gender} 
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="address">Address</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="address"
                                                value={address} 
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="contact">Contact</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="contact"
                                                value={contact} 
                                                onChange={(e) => setContact(e.target.value)}
                                             />
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="mb-3">
                                        <button className='btn px-3' type="submit">Update</button>
                                    </div>
                                </form>
                                 {/* ) : ( 
                                <div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name">Full name</label>
                                            <p className="fs-4">{user.user.name}</p>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="age">Age</label>
                                            <p className="fs-4">{user.user.age}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email">Email</label>
                                            <p className="fs-4">{user.user.email}</p>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="gender">Gender</label>
                                            <p className="fs-4">{user.user.gender}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="address">Address</label>
                                            <p className="fs-4">{user.user.address}</p>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="contact">Contact</label>
                                            <p className="fs-4">{user.user.contact}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="mb-3">
                                        <button className='btn px-3' type='submit'>Update</button>
                                    </div>
                                    <hr className="mb-4" />                    
                                </div> 
                                 )}  */}
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