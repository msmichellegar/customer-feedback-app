import { BaseButtonStyles, BasePageStyles } from "../../globalStyles";
import styled from "styled-components";

export const ResultsWrapper = styled.div`
  ${BasePageStyles}
`;

export const Button = styled.button`
  ${BaseButtonStyles}
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const CommentsWrapper = styled.div`
  div:not(:last-child) {
    &::after {
      content: "";
      background-color: grey;
      width: 60px;
      height: 4px;
      display: block;
    }
  }
`;

export const Comment = styled.div`
  margin-bottom: 16px;
`;

export const ChartWrapper = styled.div`
  border: 1px solid black;
  padding-top: 20px;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
`;
