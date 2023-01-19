import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav, Image, Button } from 'react-bootstrap';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import './my-account.css';
import { 
    GridComponent, 
    ColumnsDirective, 
    ColumnDirective,
    Page,
    Sort,
    Filter,
    Edit,
    Toolbar,
    Selection,
    Search,
    Inject
} from '@syncfusion/ej2-react-grids';

const pageSettings = { pageSize: 10 };
const editing = { allowDeleting: true, allowEditing: true, allowAdding: true };
const toolbarOptions = ["Add", "Delete", "Edit", "Search", "Update", "Cancel"];

const Admin = ({ allProducts }) => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const [customers, setCustomers] = useState([])

    const handleClick = () => {
        logout()
      } 
     
    useEffect(() => {
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => setCustomers(data))
    }, []);    
   
    return (
        <Container className="py-5 mt-2">
            <Tab.Container defaultActiveKey="products">
                <Row className="justify-content-evenly mt-4 p-1">
                     <Col sm={2} className={"text-white p-2 rounded h-100 mb-3 user-menu"} style={{backgroundColor: "#1c1e1f"}}>
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
                     <Col sm={9} className="text-white p-2 rounded" style={{backgroundColor: "#1c1e1f"}}>
                        <Tab.Content>
                            <Tab.Pane eventKey="products">
                                <h3 className="text-center text-white">Products page</h3>
                            </Tab.Pane>
                            <Tab.Pane eventKey="products">
                            <hr />
                            <div>
                                <GridComponent 
                                    dataSource={allProducts} 
                                    allowPaging={true} 
                                    pageSettings={pageSettings}
                                    allowSorting={true}
                                    allowFiltering={true}
                                    editSettings={editing}
                                    toolbar={toolbarOptions}
                                    Selection
                                >
                                <ColumnsDirective>
                                    <ColumnDirective field='id' headerText='ID' width='60'/>
                                    <ColumnDirective field='image' headerText='Image' width='120'/>
                                    <ColumnDirective field='name' headerText='Name' width='250'/>
                                    <ColumnDirective field='price' headerText='Price' width='90' editType="numericedit"/>
                                    <ColumnDirective field='description' headerText='Description' width='150'/>
                                    <ColumnDirective field='count' headerText='Count' width='80' editType="numericedit"/>
                                    <ColumnDirective field='category_id' headerText='Cat ID' width='80' editType="dropdownedit"/>
                                </ColumnsDirective>
                                <Inject services={[Page, Sort, Filter]}/>
                                </GridComponent>
                            </div>                                            
                            </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content>
                            <Tab.Pane eventKey="customers">
                                <h3 className="text-center text-white">Customers page</h3>
                            </Tab.Pane>
                            <Tab.Pane eventKey="customers">
                            <hr />
                            <div>
                                <GridComponent 
                                    dataSource={customers} 
                                    allowPaging={true} 
                                    pageSettings={pageSettings}
                                    allowSorting={true}
                                    allowFiltering={true}
                                >
                                <ColumnsDirective>
                                    <ColumnDirective field='id' headerText='ID' width='60'/>
                                    <ColumnDirective field='name' headerText='Name' width='100'/>
                                    <ColumnDirective field='email' headerText='Email' width='150'/>
                                    <ColumnDirective field='gender' headerText='Gender' width='90' editType="dropdownedit"/>
                                    <ColumnDirective field='address' headerText='Address' width='130'/>
                                    <ColumnDirective field='contact' headerText='Contact' width='120'/>
                                    <ColumnDirective field='username' headerText='Username' width='100'/>
                                    <ColumnDirective field='role' headerText='Role' width='80'/>
                                </ColumnsDirective>
                                <Inject services={[Page, Sort, Filter, Edit, Toolbar, Selection, Search]}/>
                                </GridComponent>
                            </div>                                            
                            </Tab.Pane>
                        </Tab.Content>
                     </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
};

export default Admin;