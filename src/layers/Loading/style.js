import styled,{ keyframes } from 'styled-components';

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Container = styled.div`
    width:100%;
    height: 100%;
    min-height:100vh;
    background: ${({theme})=>theme.color.background};
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:24px;
`

export const Paragraph = styled.p`
    color:${({theme})=>theme.color.text};
`

export const Loader = styled.div`
    border:10px solid ${({theme})=>theme.color.element};
    border-top:10px solid ${({theme})=>theme.color.text};
    border-radius: 100%;
    width:44px;
    height:44px; 
    animation: ${rotate} 2s linear infinite;
`
