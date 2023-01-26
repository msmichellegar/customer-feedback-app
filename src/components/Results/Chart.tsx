import { FeedbackItem } from "@/context/feedback";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import { formatRatings } from "./format-ratings";
import { ChartWrapper } from "./styles";

type Props = {
  results: FeedbackItem[] | undefined;
};

export const Chart = ({ results }: Props) => {
  const data = formatRatings(results);

  return (
    <ChartWrapper>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ChartWrapper>
  );
};
