import { FeedbackItem } from "../../context/feedback";
import { formatRatings } from "./format-ratings";

describe("format-ratings", () => {
  test("should format ratings for chart", () => {
    const feedbackData = [
      { rating: 1 },
      { rating: 2 },
      { rating: 1 },
      { rating: 5 },
      { rating: 5 },
    ];

    const formatted = formatRatings(feedbackData as FeedbackItem[]);

    const expected = [
      { name: 1, value: 2 },
      { name: 2, value: 1 },
      { name: 3, value: 0 },
      { name: 4, value: 0 },
      { name: 5, value: 2 },
    ];

    expect(formatted).toEqual(expected);
  });

  test("should handle undefined feedback data", () => {
    const feedbackData = undefined;

    const formatted = formatRatings(feedbackData);

    const expected = [
      { name: 1, value: 0 },
      { name: 2, value: 0 },
      { name: 3, value: 0 },
      { name: 4, value: 0 },
      { name: 5, value: 0 },
    ];

    expect(formatted).toEqual(expected);
  });
});
