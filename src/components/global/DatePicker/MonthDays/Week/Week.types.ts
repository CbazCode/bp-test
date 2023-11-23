// Interfaces and types from component Week

import { Dayjs } from "dayjs";

// Component Props
export interface WeekProps {
  dates: Dayjs[];
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
}
