import styled from "styled-components";

export const Footer = styled.footer`
  text-align: center;
  margin-top: 5px;
  width: 100%;
  color: ${(props) => props.theme.colors.gray3};
  font-size: ${(props) => props.theme.fontSize.small};
`;
