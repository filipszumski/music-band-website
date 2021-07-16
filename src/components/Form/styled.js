import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 50vw;
    color: #eeee;
    background-color: #2A2A2A ;
    overflow-y: auto;
    padding: 25px;
    display: none;
    z-index: 2;
    animation-name: rightSideEject;
    animation-duration: 0.5s;

    @keyframes rightSideEject {
        from {right: -50vw; opacity: 0}
        to {right: 0px; opacity: 1}
    }

    ${({ isActive }) => isActive && css`
        display:block;
    `}
`;

export const FormContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
`;

export const Button = styled.button`
    padding: 7px;
    border-radius: 0.5rem;
    background-color: #eeee;
    border: none;

    &:hover{
        filter: brightness(115%);
    }

    ${({ justifyStart }) => justifyStart && css`
        color: #eeee;
        border: none;
        background-color: inherit;
        justify-self: start;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 18px;
        gap: 10px;
    `}

    &:hover {
        cursor: pointer;
    }
`;