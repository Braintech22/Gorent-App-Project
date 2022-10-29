import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, } from 'react-bootstrap'
import logo from '../logo.png';
// import mainimage from './mainimage.png';


function NavBar() {
    return ( <
        Navbar bg = "success p-3"
        variant = "dark" >
        <
        Container >
        <
        Navbar.Brand href = "#home" >
        <
        img alt = ""
        src = { logo }
        width = "100"
        height = "50"
        className = "d-inline-block align-top" /
        > { ' ' } <
        b > Rent || Sale < /b> <
        /Navbar.Brand> <
        /Container>

        <
        Nav className = "justify-content-center"
        activeKey = "/home" >
        <
        Nav.Item >
        <
        Nav.Link href = "/home" > Buy < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link href = "/home" > Rent < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link href = "/home" > Sale < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link href = "/home" > Get Loan < /Nav.Link> <
        /Nav.Item>

        <
        /Nav> <
        /Navbar>
    )
}

export default NavBar