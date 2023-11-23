// Interfaces and types from component Day

import { Dayjs } from "dayjs";

// Component Props
export interface DayProps {
  date: Dayjs;
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
  hideExtraDays?: boolean;
}
