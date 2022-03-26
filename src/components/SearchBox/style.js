import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';


export const SearchContainer = styled.div`
    width:100%;
    max-width:480px;
    position:relative;
`
export const SearchInput = styled.input`
    width: 100%;
    height:48px;
    border-radius: 4px;
    background: ${({theme})=>theme.color.element};
    border:none;
    box-shadow: 0px 0px 1px 0px ${({theme})=>theme.color.input};
    padding-left: 72px;
    color:${({theme})=>theme.color.text};
    &::placeholder{
        color:${({theme})=>theme.color.text};
        opacity: 0.4;
    }
`
export const SearchIcon = styled(FaSearch)`
    position:absolute;
    top:16px;
    left:32px;
    color:${({theme})=>theme.color.text};
    opacity: 0.4;
`