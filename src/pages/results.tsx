import { Results } from "@/components/Results";
import { useFeedback } from "@/context/feedback";
import { GlobalStyles } from "@/globalStyles";
import Head from "next/head";

export default function ResultsPage() {
  const { feedback } = useFeedback(); // fetch feedback

  return (
    <>
      <Head>
        <title>Customer Feedback App - Results</title>
        <meta name="description" content="An application for giving feedback" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Results results={feedback} />
    </>
  );
}
