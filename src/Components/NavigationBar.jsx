// Bootstrap Imports
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";

// React Router Dom Imports
import { Form, NavLink } from 'react-router-dom';

// React Imports
import { useState } from "react";

// Heroicon Imports
import { MoonIcon, UserIcon  } from "@heroicons/react/24/solid";

// Sass
import "../Sass/Navigationbar.scss"

const NavigationBar = () => {
    // useState to set the initial state of the navbar on mobile screen
    const [isOpen, setIsOpen] = useState(false);
    // useState to set initial width(state) of the navbar on mobile screen
    const [navWidth, setNavWidth] = useState(0);
    // function to open the navbar on mobile screen
    function openNav() {
      setIsOpen(true);
      setNavWidth(280);
    }
    // function to close the navbar on mobile screen
    function closeNav() {
      setIsOpen(false);
      setNavWidth(0);
    }
    return ( 
        <Navbar expand="lg" className="align-items-center d-flex"
            bg="dark" data-bs-theme="dark"
        >
            <Container fluid className="d-flex align-items-center py-4 px-lg-5 py-lg-4">
                <div className="d-flex align-items-center">
                    <button className="me-2 me-sm-4 d-lg-none d-inline burger-nav" onClick={openNav}>
                        <span>&#9776;</span>
                    </button>
                    <Navbar.Brand to="" className="brand"><NavLink><h2>Cardano</h2></NavLink></Navbar.Brand>
                </div>
                <div className="d-flex">
                    <Navbar.Collapse  id="mySidenav">
                        <Nav style={{ width: navWidth}} 
                            className={`mx-auto align-items-center d-flex justify-content-center ${isOpen ? 'open' : ''}`}
                        >
                            <button className="closebtn" onClick={closeNav} style={{fontSize: "40px"}}>&times;</button>
                            <Nav.Link to="#" className="px-3 nav-link home">Home</Nav.Link>
                            <NavDropdown title="Blockchain" className="px-3 nav-link" id="navbarScrollingDropdown">
                                <NavDropdown.Item to="#" className="nav-link-item">Mempool Transactions</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Transactions</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Blocks</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Epochs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="#" className="nav-link-item">Contract Transaction</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Withdrawals</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Protocol Updates</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link to="#" className="px-3 nav-link">Metadata</Nav.Link>
                            <NavDropdown title="Tokens" className="px-3 nav-link" id="navbarScrollingDropdown">
                                <NavDropdown.Item to="#" className="nav-link-item">Tokens</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Tokens Transactions</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Mint Transactions</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link to="#" className="nav-link">Pools</Nav.Link>
                            <NavDropdown title="Certificates" className="px-3 nav-link" id="navbarScrollingDropdown">
                                <NavDropdown.Item to="#" className="nav-link-item">Pool Registration</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Pool Deregistration</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Delegations</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Instaneous Rewards</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className="d-flex" style={{color: "darkgrey"}}>
                    <div className="me-4 logout">
                        <NavDropdown title={<UserIcon width={20}/>} className="pe-md-5 nav-link" id="navbarScrollingDropdown">
                            <NavDropdown.Item className="nav-link-item">
                                <Form method="post" action="/create">
                                    <button type="submit" className="logout">Create Account</button>
                                </Form>
                                <Form method="post" action="/logout">
                                    <button type="submit" className="logout">Logout</button>
                                </Form>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <Nav.Link><MoonIcon width={20}/></Nav.Link>
                </div>
            </Container>
        </Navbar>
    );
}
 
export default NavigationBar;
