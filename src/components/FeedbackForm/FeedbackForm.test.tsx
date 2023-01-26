import { render, screen } from "@testing-library/react";
import { FeedbackForm } from "./FeedbackForm";
import userEvent from "@testing-library/user-event";

describe("FeedbackForm", () => {
  test("should submit form with correct values", async () => {
    const onSubmit = jest.fn();

    render(<FeedbackForm onSubmit={onSubmit} />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/name/i), "Michelle");
    await user.type(screen.getByLabelText(/email/i), "michelle@hello.com");
    await user.selectOptions(screen.getByLabelText(/rating/i), "4"); // string input
    await user.type(screen.getByLabelText(/comment/i), "Amazing!");

    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(onSubmit).toHaveBeenCalledWith({
      comment: "Amazing!",
      email: "michelle@hello.com",
      name: "Michelle",
      rating: 4, // should be a number, not a string
    });
  });
});
