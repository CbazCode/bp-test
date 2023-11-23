// Interfaces and types from component DatePicker

import { Dayjs } from "dayjs";

// Component Props
export interface DatePickerProps {
  visible: boolean;
  onClose: () => void;
  onSave: (date: Dayjs) => void;
  hideExtraDays?: boolean;
}

export interface Month {
  name: string;
  id: number;
}
