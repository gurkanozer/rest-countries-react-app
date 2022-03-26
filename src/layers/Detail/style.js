import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    padding:0 16px;
    @media (min-width:768px){
        flex-direction: row;
        justify-content: space-between;
    }
`

export const ImageContainer = styled(motion.div)`
    width:100%;
    height:100%;
    max-width: 560px;
    max-height: 400px;
    margin-bottom: 48px;
`
export const ContentContainer = styled.div`
    width:100%;
    max-width:624px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    @media (min-width:768px){
        padding-left:24px;
    }
`
export const FlexContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    @media (min-width:768px){
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 48px;
    }
`
export const InfoContainer = styled(motion.div)``
export const BorderContainer = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width:768px){
        flex-direction: row;
    }
`
export const ButtonGroup = styled.div`
    display:flex;
    gap:24px;
    flex-wrap: wrap;
    @media (min-width:768px){
        margin-left:12px;
    }
`


export const Image = styled.img`
    width:100%;
    height:100%;
    max-width: 560px;
    max-height: 400px;
    object-fit: cover;
`
export const Title = styled(motion.p)`
    font-size:22px;
    font-weight: 800;
    margin-bottom:24px;
    color:${({theme})=>theme.color.text};
`
export const Paragraph = styled.p`
    color:${({theme})=>theme.color.text};
    margin-bottom: 14px;
`
export const Strong = styled.span`
    font-weight: 800;
    margin-right:4px;
`

export const Tag = styled.span`
    position: relative;
    padding-right:8px;
    &:not(:last-child){
        &::after{
        position: absolute;
        top:0;
        right:3px;
        content:', ';
    }
    }

`