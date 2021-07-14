import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    position: sticky;
    top: 0;

    ${({ isScrolled }) => isScrolled && css`
    background: rgba(0, 0, 0, 0.4);
  `}
`;