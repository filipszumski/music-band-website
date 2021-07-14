import React from "react";
import { Button, Link, List, StyledNav } from "./styled";

export const Nav = ({ setIsFormActive }) => {

    const handleClick = () => {
        setIsFormActive(prevState => !prevState)
    };

    return (
        <StyledNav>
            <List>
                <li><Link href="#about-us">O nas</Link></li>
                <li><Link href="#videos">Muzyka</Link></li>
                <li><Button onClick={handleClick}>Kontakt</Button></li>
            </List>
        </StyledNav>
    )
};