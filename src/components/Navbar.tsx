import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-bottom: 10px;

  ul {
    list-style-type: none;
    margin-top: 8px;
  }
  li a {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      padding-left: 40px;
    }
  }
`;
