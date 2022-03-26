import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width:100%;
    background: ${({theme})=>theme.color.element};
    box-shadow: 0 -2px 6px 0px ${({theme})=>theme.color.input};
    margin-bottom:24px;
    @media (min-width:768px){
        margin-bottom:48px;
    }
`
export const HeaderInner = styled.div`
    width: 100%;
    max-width: 1280px;
    height:80px;
    margin:0 auto;
    margin-bottom:24px;
    padding:16px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
export const Title = styled.h1``