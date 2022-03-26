import styled from 'styled-components';
import {FaMoon} from 'react-icons/fa';

export const Container = styled.label`
    display: block;
    position: relative;
    padding-left: 24px;
    cursor: pointer;
    user-select: none;
    font-weight: 600;
    font-size:14px;
    color:${({theme})=>theme.color.text};
`
export const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`
export const Icon = styled(FaMoon)`
    position:absolute;
    top:1px;
    left:0;
`