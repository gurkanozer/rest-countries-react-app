import styled from "styled-components";
import {CgArrowLongLeft} from "react-icons/cg";

export const NavbarContainer = styled.nav`
    width:100%;
    max-width: 1280px;
    margin:0 auto;
    margin-bottom: 24px;
    padding:0 16px;
    display:flex;
    align-items: flex-start;
    flex-direction: column;
    gap:2rem;
    @media (min-width:480px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 42px;
    }
`
export const Arrow = styled(CgArrowLongLeft)`
    font-size:18px;
    margin-right:6px;
`