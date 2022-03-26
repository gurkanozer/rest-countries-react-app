import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    font-size:16px;
    font-family:'Nunito Sans', sans-serif;
}
body{
    width:100%;
    height:100%;
    min-height:100vh;
    background:${({theme})=>theme.color.background};
    transition: background .3s;
}
*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
button{
    border:none;
    outline:none;
    cursor:pointer;
    background:none;
}

img {
    width: 100%;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color:inherit;
    font-size:1rem;
}
h1{
    font-size: clamp(0.875rem,0.663rem + 0.9vw,1.5rem);
    font-weight: 800;
    color:${({theme})=>theme.color.text};
}
`
export default GlobalStyle;
