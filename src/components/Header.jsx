import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../scss/header.scss';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"
            fixed='top'
            className="headernav" >
                <Container>
                    <Navbar.Brand><img className="logo" src={process.env.PUBLIC_URL + "../img/logo.png"} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link >주차정산</Nav.Link>
                            <Nav.Link >이용내역</Nav.Link>
                            <Nav.Link >정기권 신청</Nav.Link>
                            <Nav.Link >공지사항</Nav.Link>
                            <Nav.Link >로그인</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header