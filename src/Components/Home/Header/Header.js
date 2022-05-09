import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleLogOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='home'>NuFarm Fresh</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/inventorys">Manage Inventorys</Nav.Link>
                                    <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>
                                </>
                            }

                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='log-out-button' onClick={handleLogOut}>Log Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">Log In</Nav.Link>
                            }

                            <Nav.Link eventKey={2} as={Link} to="/blogs">
                                Blogs
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;