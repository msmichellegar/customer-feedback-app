import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export type FeedbackItem = {
  name: string;
  email: string;
  rating: number;
  comment: string;
};

type Props = {
  children: React.ReactNode;
};

type Context = {
  feedback: FeedbackItem[] | undefined;
  setFeedback: Dispatch<SetStateAction<FeedbackItem[] | undefined>> | undefined;
};

const FeedbackContext = createContext<Context>({
  feedback: undefined,
  setFeedback: undefined,
});

export const FeedbackProvider = ({ children }: Props) => {
  const [feedback, setFeedback] = useState<FeedbackItem[]>();

  // fetch feedback data
  useEffect(() => {
    const url = "/api/feedback";

    fetch(url)
      .then((res) => res.json())
      .then((feedbackData) => {
        const parsedFeedback = JSON.parse(feedbackData).data;

        setFeedback(parsedFeedback);
      });
  }, []);

  const contextValue = { feedback, setFeedback };

  return (
    <FeedbackContext.Provider value={contextValue}>
      {children}
    </FeedbackContext.Provider>
  );
};

// custom hook for easily accessing feedback data
export function useFeedback() {
  return useContext(FeedbackContext);
}
