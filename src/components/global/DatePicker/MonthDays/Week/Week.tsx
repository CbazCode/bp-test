import { Dayjs } from "dayjs";
import React from "react";
import { View } from "react-native";

import Day from "./Day/Day";
import styles from "./Week.styles";
import { WeekProps as Props } from "./Week.types";

const Week: React.FC<Props> = props => {
  const { dates, selectedDate, setSelectedDate } = props;

  return (
    <View style={styles.container}>
      {dates.map((date: Dayjs) => (
        <Day
          key={date.format("DD/MM/YYYY")}
          date={date}
          hideExtraDays
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ))}
    </View>
  );
};

export default Week;
