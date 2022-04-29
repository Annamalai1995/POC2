import {Container, Nav, Navbar} from 'react-bootstrap'
export const Menus=()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home">
                Example Router
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="sample" />
            <Navbar.Collapse id="sample">
                <Nav className="ms-auto">
                    <Nav.Link active href="/Login">Login Page</Nav.Link>
                    <Nav.Link href="/sign">NewAccount</Nav.Link>
                    <Nav.Link href="/home">Home Page</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}