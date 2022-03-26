import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content: center;
`

export const Container = styled.div`
    width:200px;
    position: relative;
    z-index:10;
`

export const Button = styled.button`
    width:100%;
    height:48px;
    border-radius: 4px;
    background:${({theme})=>theme.color.element};
    box-shadow: 0px 0px 1px 0px ${({theme})=>theme.color.input};
    text-align: left;
    padding:0 24px;
    color:${({theme})=>theme.color.text};
`

export const List = styled.ul`
    margin-top:10px;
    background: ${({theme})=>theme.color.element};
    box-shadow: 0px 0px 1px 0px ${({theme})=>theme.color.input};
    padding: 24px 0;
    position:absolute;
    width:100%;
    display:${({isactive})=>isactive ? "block": "none"};
`

export const Item = styled.li`
    color:${({theme})=>theme.color.text};
    &[aria-selected="true"], &:active, &:focus, &:hover{
        background:${({theme})=>theme.color.background};
        cursor: pointer;

    }
    padding:4px 24px;
`