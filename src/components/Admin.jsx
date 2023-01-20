import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav, Image, Button } from 'react-bootstrap';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { BsCurrencyExchange, BsBoxSeam, BsFillBarChartLineFill, BsFillPeopleFill } from "react-icons/bs";
import './my-account.css';
import { getProducts, getCustomers } from "./productService";
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

const Admin = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const [customers, setCustomers] = useState([])
    const [products, setProducts] = useState([])

    const handleClick = () => {
        logout()
      } 
     
    useEffect(() => {
        getCustomers()
        .then(data => setCustomers(data))
        getProducts()
        .then(data => setProducts(data))
    }, []);    

    const earningData = [
        {
          icon: <BsFillPeopleFill />,
          amount: '7',
          percentage: '+0.1%',
          title: 'Customers',    
          iconColor: 'rgb(255, 244, 229)',
          iconBg: 'rgb(254, 201, 15)',
          pcColor: 'red-600',
        },
        {
          icon: <BsBoxSeam />,
          amount: '30',
          percentage: '+1%',
          title: 'Products',
          iconColor: 'rgb(255, 244, 229)',
          iconBg: 'rgb(254, 201, 15)',
          pcColor: 'green-600',
        },
        {
          icon: <BsFillBarChartLineFill />,
          amount: '0',
          percentage: '0%',
          title: 'Sales',
          iconColor: 'rgb(255, 244, 229)',
          iconBg: 'rgb(254, 201, 15)',
      
          pcColor: 'green-600',
        }
      ];
   
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
                                    dataSource={products} 
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
                        <Tab.Content>
                            <Tab.Pane eventKey="ecommerce">
                                <h3 className="text-center text-white">Ecommerce page</h3>
                            </Tab.Pane>
                            <Tab.Pane eventKey="ecommerce">
                            <hr />
                            <div className="mt-24">
                            <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-bold text-gray-400">Earnings</p>
                                        <p className="text-2xl">KES. 1</p>
                                    </div>
                                    <button
                                    type="button"
                                    style={{ backgroundColor: "green" }}
                                    className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4 w-100"
                                    >
                                    <BsCurrencyExchange />
                                    </button>
                                </div>
                                {/* <div className="mt-6">
                                    <Button
                                    color="white"
                                    bgColor={currentColor}
                                    text="Download"
                                    borderRadius="10px"
                                    />
                                </div> */}
                                </div>
                                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                                {earningData.map((item) => (
                                    <div
                                    key={item.title}
                                    className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
                                    >
                                    <button
                                        type="button"
                                        style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                        className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl w-100"
                                    >
                                        {item.icon}
                                    </button>
                                    <p className="mt-3">
                                        <span className="text-lg font-semibold">{item.amount}</span>
                                        {/* <span className={`text-sm text-${item.pcColor} ml-2`}>
                                        {item.percentage}
                                        </span> */}
                                    </p>
                                    <p className="text-sm text-gray-400  mt-1">{item.title}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
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