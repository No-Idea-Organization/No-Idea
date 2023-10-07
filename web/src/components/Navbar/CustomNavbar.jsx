import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const CustomNavbar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>No Idea</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Catagories</Nav.Link>
                        <Nav.Link>Products</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}