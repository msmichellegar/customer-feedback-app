import styled from "styled-components";
import { Form as FormikForm, Field as FormikField } from "formik";
import { BaseButtonStyles, BasePageStyles } from "@/globalStyles";

export const FormWrapper = styled.div`
  ${BasePageStyles}
`;

export const Form = styled(FormikForm)`
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: row;
  width: 100%;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`;

export const Field = styled(FormikField)`
  max-width: 90%;
  padding: 4px;
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  text-align: right;
`;

export const SubmitButton = styled.input`
  ${BaseButtonStyles}
  margin: 0 auto;
`;
