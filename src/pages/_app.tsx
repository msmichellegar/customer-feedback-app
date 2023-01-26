import "normalize.css/normalize.css";
import type { AppProps } from "next/app";
import { FeedbackProvider } from "../context/feedback";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FeedbackProvider>
      <Component {...pageProps} />
    </FeedbackProvider>
  );
}
