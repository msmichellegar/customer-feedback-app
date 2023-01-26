import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Helvetica;
    background-color: whitesmoke;
  }

  h1, h2, h3 {
    letter-spacing: 1px;
    font-weight: normal;
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const BasePageStyles = css`
  border: 1px solid grey;
  margin: 20px;
  background-color: white;
  padding: 20px;
  max-width: 1000px;
  position: relative;
`;

export const BaseButtonStyles = css`
  max-width: 250px;
  text-transform: uppercase;
  background-color: black;
  color: white;
  border: 1px solid black;
  padding: 10px;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: whitesmoke;
  }
`;
