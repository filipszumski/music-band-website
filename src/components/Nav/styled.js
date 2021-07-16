import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    list-style-type: none;
    padding-left: 0px;
    gap: 30px;
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
`;

export const StyledNav = styled.nav`
    align-self: center;
`;

export const Link = styled.a`
    text-decoration: none;
    color: inherit;

    &:visited {
        color: inherit;
    };

    &:hover {
        cursor: pointer;
    };
`;

export const Button = styled.button`
    border: none;
    background-color: inherit;
    font-size: inherit;
    color: inherit;
    font-weight: inherit;
    padding :0px;
    
    &:hover {
        cursor: pointer;
    };
`;