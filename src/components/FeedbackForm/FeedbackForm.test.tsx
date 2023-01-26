import { FeedbackItem } from "../../context/feedback";

describe("FeedbackForm", () => {
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

  test.todo("should render form");

  test.todo("should call onSubmit with correct values");

  test.todo("rating should be converted from a string to a number");
});
