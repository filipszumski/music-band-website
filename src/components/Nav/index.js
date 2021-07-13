import React from "react";
import { Button, Link, List, StyledNav } from "./styled";

export const Nav = () => {

    return (
        <StyledNav>
            <List>
                <li><Link href="#about-us">O nas</Link></li>
                <li><Link href="#videos">Muzyka</Link></li>
                <li><Button>Kontakt</Button></li>
            </List>
        </StyledNav>
    )
};