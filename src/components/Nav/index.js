// import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


const NavB = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const handleNavclick = (event) => {
        console.log(event.target.textContent)
        props.setCurrentPage(event.target.textContent)

    }
    return (
        <div>

            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">MATTHWEW O BURT</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>

                            <NavLink onClick={handleNavclick} href="#">About Me</NavLink>
                        </NavItem>

                        <NavItem  nav caret>
                            <NavLink onClick={handleNavclick} href='#'>Portfolio</NavLink>
                        </NavItem>


                        <NavItem>

                            <NavLink href="https://github.com/COcoder555">GitHub</NavLink>
                        </NavItem>

                        <NavItem>
                            <a href="/MOBR.pdf">
                                <NavLink >Resume</NavLink>
                            </a>
                        </NavItem>


                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Contact
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink a href="tel:9702196325" onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">9702196325

                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="mailto:COcoder555@gmail.com">cocoder555@gmail.com</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink onClick={handleNavclick} href='#'>Leave me a message</NavLink>
                                </DropdownItem>



                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>

                </Collapse>
            </Navbar>
           
        </div>

    )
};




export default NavB;

