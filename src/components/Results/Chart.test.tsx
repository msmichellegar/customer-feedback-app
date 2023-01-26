import { FeedbackItem } from "../../context/feedback";

describe("Chart", () => {
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

  test.todo("should render chart");
});
