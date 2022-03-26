import styled from 'styled-components';
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
    width:100%;
    max-width:264px;
    border-radius: 4px;
    background:${({theme})=>theme.color.element};
    box-shadow: 0px 0px 1px 0px ${({theme})=>theme.color.input};
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding-bottom: 28px;
    margin-bottom: 42px;
    transition: all .3s ease;
    cursor:pointer;
    @media (min-width:480px){
        margin-bottom: 72px;
    }
`
export const CardHeader = styled.div`
    width:100%;
    height:160px;
`
export const Flag = styled.img`
    height: 100%;
    object-fit: cover;
`
export const CardBody = styled.div`
    width:100%;
    padding:24px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: center;
`
export const Title = styled.span`
    font-size:18px;
    font-weight: 800;
    margin-bottom: 16px;
    color:${({theme})=>theme.color.text};
`
export const List = styled.ul``
export const Item = styled.li`
    padding:4px 0;
`
export const Strong = styled.span`
    font-weight: 800;
    padding-right: 4px;
    color:${({theme})=>theme.color.text};
`
export const Paragraph = styled.p`
    font-size:14px;
    color:${({theme})=>theme.color.text };
`