import { FeedbackItem } from "../../context/feedback";

jest.mock("next/router", () => require("next-router-mock"));

describe("Results", () => {
  let feedbackData: FeedbackItem[];

  beforeEach(() => {
    feedbackData = [
      {
        name: "Michelle 1",
        email: "hello@michelle.com",
        comment: "Amazing!",
        rating: 5,
      },
      {
        name: "Michelle 2",
        email: "hello@michelle.com",
        comment: "Terrible :(",
        rating: 1,
      },
    ];
  });

  test.todo("should navigate to homepage if button is clicked");

  test.todo("should render chart");

  test.todo("should render comments");
});
