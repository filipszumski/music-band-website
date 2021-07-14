import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    padding: 100vh 20px 20px 20px;
    transition: all 0.5s;

    ${({ isScrolled }) => isScrolled && css`
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
  `}
`;