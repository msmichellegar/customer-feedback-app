import { FeedbackItem } from "@/context/feedback";
import { Formik } from "formik";
import {
  FormWrapper,
  Form,
  FormColumn,
  Label,
  SubmitButton,
  ButtonWrapper,
  Field,
} from "./styles";

type Props = {
  onSubmit: (values: FeedbackItem) => void;
};

export const FeedbackForm = ({ onSubmit }: Props) => {
  return (
    <FormWrapper>
      <h1>Feedback Form</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          rating: "",
          comment: "",
        }}
        onSubmit={async (values) => {
          const feedback = {
            ...values,
            rating: Number(values.rating), // convert string rating to number
          };

          onSubmit(feedback);
        }}
      >
        <Form>
          <FormColumn>
            <Label htmlFor="name">Name:</Label>
            <Field id="name" type="text" name="name" required />

            <Label htmlFor="email">Email:</Label>
            <Field id="email" type="email" name="email" required />

            <Label htmlFor="rating">Rating:</Label>
            <Field id="rating" component="select" name="rating" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Field>
          </FormColumn>

          <FormColumn>
            <Label htmlFor="comment">Comment:</Label>
            <Field
              id="comment"
              rows={8}
              component="textarea"
              name="comment"
              required
            />

            <ButtonWrapper>
              <SubmitButton type="submit" value="Submit Feedback" />
            </ButtonWrapper>
          </FormColumn>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
