
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut, isAdmin } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top" className="p-3">
                <Container
                >
                    <Navbar.Brand href="#home">
                        <b style={{
                            color: 'tomato',
                            fontWeight: 600,
                            textShadow: "1px 1px 1px white"
                        }}>🏍️ BIKE ZONE </b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home"><b>Home</b></Nav.Link>
                            <Nav.Link as={Link} to="/explore"><b>Explore</b></Nav.Link>

                            {
                                user.email && <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                                    {
                                        user.email && isAdmin ? <div>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item> <b className="text-centr">👑 Admin</b></NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/managOrders">Manage All Orders</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/manageProducts">Manage Products</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/makeAdmin">Make Admin</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/addProduct">➕Add a Product</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item>
                                                {user.email && <div className="text-center">
                                                    <Button className="w-100" onClick={logOut} variant="warning">LogOut</Button>
                                                </div>
                                                }
                                            </NavDropdown.Item>
                                        </div> : <div>
                                            <div className="text-center"><b>Coustomer</b></div>
                                            <NavDropdown.Item as={Link} to="/userOrder">My Order</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/coustomerReview">Review</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/payment">Payment</NavDropdown.Item>

                                            <NavDropdown.Item>
                                                {user.email && <div className="text-center">
                                                    <Button className="w-100" onClick={logOut} variant="danger">LogOut</Button>
                                                </div>
                                                }
                                            </NavDropdown.Item>
                                        </div>
                                    }
                                </NavDropdown>
                            }

                            <Nav.Link as={Link} to="/ourProducts"><b>About</b></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user.email ? <><b className="text-white">{user.displayName}</b><Button onClick={logOut} variant="danger" className="ms-2"><b>LogOut</b></Button></>
                                    :
                                    <Nav.Link as={Link} to="/login"><b>Login</b></Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;
