import { FeedbackForm } from "@/components/FeedbackForm";
import { FeedbackItem, useFeedback } from "@/context/feedback";
import { GlobalStyles } from "@/globalStyles";
import Head from "next/head";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const { feedback = [], setFeedback } = useFeedback();

  const onFormSubmit = (values: FeedbackItem) => {
    const newFeedback = { ...values };
    const updatedFeedback = [newFeedback, ...feedback];

    if (setFeedback) {
      setFeedback(updatedFeedback);
    }

    // redirect to results page
    router.push("/results");
  };

  return (
    <>
      <Head>
        <title>Customer Feedback App - Home</title>
        <meta name="description" content="An application for giving feedback" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <FeedbackForm onSubmit={onFormSubmit} />
    </>
  );
}
