import styled from 'styled-components';
import { motion } from "framer-motion";

export const ListContainer = styled(motion.div)`
    display:grid;
    grid-template-columns: 1fr;
    @media (min-width:540px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width:720px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width:992px){
        grid-template-columns: repeat(4,1fr);
    }
`
export const ListItemContainer = styled(motion.div)`
    width:100%;
    display:flex;
    align-items: flex-start;
    justify-content: center;
    padding:0 8px;
`