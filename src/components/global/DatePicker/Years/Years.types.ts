// Interfaces and types from component Years

import { Dayjs } from "dayjs";

// Component Props
export interface YearsProps {
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
}
