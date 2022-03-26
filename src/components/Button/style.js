import styled from 'styled-components';

export const Input = styled.button`
    border-radius: 4px;
    box-shadow: 0px 0px 4px 0px ${({theme})=>theme.color.input};
    background: ${({theme})=>theme.color.element};
    color:${({theme})=>theme.color.text};
    height: ${({sm})=>sm ? "28px" : "32px"};
    font-size:14px;
    padding:0 24px;
    display:flex;
    align-items: center;
    justify-content: center;
`