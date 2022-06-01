// import styled component
import styled, { css } from "styled-components";
// membuat objcet color
const color = {
    primary : "blue",
    secondary : "pink",
    orange : "orange",
}
// membuat component button
const Button = styled.button`
padding: 1rem;
border-radius : 10px;
color : #fff;
background-color : blue;
cursor : pointer;
border : none;
text-decoration : none;
background-color : ${ (props) =>{
    // props adalah object
    // PROPS VARIANT jadi props nya itu menampung data variant
    // props ibaratkan parameter
    // jika variant primary, maka warna biru
    // jika variant orange, maka warna orange
    // jika ga ada variant yang di kirim di property button maka warna defult biru
    if (props.variant) {
        return color[props.variant];
    }else{
        return color.primary;
    }
}};

${(props) => props.full && css`
display: block;
width: 100%;
`}
`;


// export button
export default Button;