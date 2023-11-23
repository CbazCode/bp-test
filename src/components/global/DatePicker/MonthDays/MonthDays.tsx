import React, { Fragment, ReactNode } from "react";
import { View } from "react-native";

import styles from "./MonthDays.styles";
import { MonthDaysProps as Props } from "./MonthDays.types";
import Week from "./Week/Week";
import { page } from "../DatePicker.helpers";

const MonthDays: React.FC<Props> = props => {
  const { selectedDate, firstDayOfWeek = 0, setSelectedDate } = props;
  const dates = page(selectedDate, firstDayOfWeek);
  const weeks: ReactNode[] = [];

  while (dates.length) {
    weeks.push(
      <Week
        dates={dates.splice(0, 7)}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    );
  }

  return (
    <View style={styles.month}>
      {weeks.map((week: ReactNode, index) => (
        <Fragment key={index}>{week}</Fragment>
      ))}
    </View>
  );
};

export default MonthDays;
