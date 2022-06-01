import styled from "styled-components";
// membuat component Li

const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: column;
  
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  
  li {
    margin-bottom: 1rem;
  }
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  
    h1 {
      margin-bottom: 0;
    }

    a{
      text-decoration: none;
      color: white;
    }
    ul {
      flex-direction: row;
    }
  
    li {
      margin: 0 1rem;
    }
    }
`;
export default StyledNavbar;