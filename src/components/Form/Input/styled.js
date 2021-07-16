import styled, { css } from "styled-components";

export const Wrapper = styled.p`
    display: grid;
    justify-content: space-between;
    grid-template-columns: 150px 1fr;
`;

export const StyledInput = styled.input`
    background-color: #eeee;

${({ error }) => error && css`
    border: 2px solid crimson;
`}
`;

export const ErrorText = styled.span`
    grid-column-start: 2;
    color: crimson;
    font-size: 12px;
`;