import { FeedbackItem } from "../../context/feedback";

export const formatRatings = (results: FeedbackItem[] | undefined = []) => {
  const initRatings = Array(6).fill(0);

  const ratings = results.reduce((acc, feedback) => {
    const rating = feedback.rating;
    acc[rating] = acc[rating] + 1;
    return acc;
  }, initRatings);

  const formattedRatings = ratings
    .map((rating, index) => ({
      name: index,
      value: rating,
    }))
    .slice(1);

  return formattedRatings;
};
