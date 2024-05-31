"use client"
import { useState } from "react"

import Button from "react-bootstrap/Button"
import Container  from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar  from "react-bootstrap/Navbar";
import NavDropdown  from "react-bootstrap/NavDropdown";

import Avatar from "./avatar";
// import SignOutButton from "./auth/signout-button";
export default function TPKNavBar({session}: {session: any | undefined}) {
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => setCollapsed(!collapsed)
    const user = (!!session) ? session.user : undefined;

    // @ts-ignore
    // function handleDropDown(eventKey, event) {
    //     console.log(eventKey, event);
    // }
    // onSelect={handleDropDown
    return (
    <Navbar expand="sm">
        <Container fluid>
            <Navbar.Brand>TPK</Navbar.Brand>
            <Navbar.Toggle onClick={toggleCollapsed}/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/dashboard/">Home</Nav.Link>
                    <Nav.Link href="/dashboard/games">Games</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    {user &&
                    <>
                    <Avatar href={user.image} />
                    <NavDropdown title="" align="end">
                        <NavDropdown.ItemText>{user.email}</NavDropdown.ItemText>
                        <NavDropdown.ItemText>Settings</NavDropdown.ItemText>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/signout">Sign Out</NavDropdown.Item>
                    </NavDropdown>
                    </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );


}