// Interfaces and types from component MonthDays

import { Dayjs } from "dayjs";

// Component Props
export interface MonthDaysProps {
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
  firstDayOfWeek?: number;
}
