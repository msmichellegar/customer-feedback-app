import { ResultsWrapper, Button, CommentsWrapper, Comment } from "./styles";
import dynamic from "next/dynamic";
import { FeedbackItem } from "../../context/feedback";
import { useRouter } from "next/router";

// dynamically import Chart component from library to work around a Next.js/Rechart bug
// https://nextjs.org/docs/advanced-features/dynamic-import
const Chart = dynamic(() => import("./Chart").then((lib) => lib.Chart), {
  ssr: false,
});

type Props = {
  results: FeedbackItem[] | undefined;
};

export const Results = ({ results = [] }: Props) => {
  const router = useRouter();

  // handler for "go back" button
  const onNavigateBack = () => {
    router.push("/"); // redirect user to home page
  };

  return (
    <ResultsWrapper>
      <h1>Results</h1>
      <Button onClick={onNavigateBack}>Go back</Button>

      <Chart results={results} />

      <h2>Latest Comments</h2>
      <CommentsWrapper>
        {results.map(({ name, email, comment }) => {
          return (
            <Comment key={name}>
              <h3>
                {name} — <i>{email}</i>
              </h3>
              <p>{comment}</p>
            </Comment>
          );
        })}
      </CommentsWrapper>
    </ResultsWrapper>
  );
};
