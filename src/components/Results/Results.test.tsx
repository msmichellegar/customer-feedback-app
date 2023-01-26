import { render, screen, act } from "@testing-library/react";
import { FeedbackItem } from "../../context/feedback";
import { Results } from "./Results";
import userEvent from "@testing-library/user-event";

import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Results", () => {
  let feedbackData: FeedbackItem[];

  beforeEach(() => {
    feedbackData = [
      {
        name: "Michelle",
        email: "hello@michelle.com",
        comment: "Amazing!",
        rating: 5,
      },
      {
        name: "Nigella",
        email: "hello@nigella.com",
        comment: "Terrible :(",
        rating: 1,
      },
    ];
  });

  test("should navigate to homepage if button is clicked", async () => {
    mockRouter.push("/results");

    render(<Results results={feedbackData} />);

    const user = userEvent.setup();

    await user.click(screen.getByText(/Go back/i));

    expect(mockRouter).toMatchObject({
      asPath: "/",
      pathname: "/",
      query: {},
    });
  });

  test("should render chart with all ratings", () => {
    render(<Results results={feedbackData} />);

    expect(screen.getByText(/1/i, { selector: "tspan" })).toBeInTheDocument();
    expect(screen.getByText(/2/i, { selector: "tspan" })).toBeInTheDocument();
    expect(screen.getByText(/3/i, { selector: "tspan" })).toBeInTheDocument();
    expect(screen.getByText(/4/i, { selector: "tspan" })).toBeInTheDocument();
    expect(screen.getByText(/5/i, { selector: "tspan" })).toBeInTheDocument();
  });

  test("should render comments", () => {
    render(<Results results={feedbackData} />);

    expect(screen.getByText(/Amazing!/i)).toBeInTheDocument();
    expect(screen.getByText(/Terrible :\(/i)).toBeInTheDocument();
  });
});
