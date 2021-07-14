import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    padding: 20px 30px;
    top: 0;

    ${({ isScrolled }) => isScrolled && css`
    background: rgba(0, 0, 0, 0.95);
  `}
`;