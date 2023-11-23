import { Dayjs } from "dayjs";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Day.styles";
import { DayProps as Props } from "./Day.types";

const Day: React.FC<Props> = props => {
  const { date, selectedDate, hideExtraDays, setSelectedDate } = props;
  const selectedMonthNumber = selectedDate.get("month");
  const dateMonthNumber = date.get("month");
  const selectedDateFormatted = selectedDate.format("DD MM YYYY");
  const dateFormatted = date.format("DD MM YYYY");
  const hideExtraDaysStyle = hideExtraDays ? styles.hideExtraDays : {};
  const isSameMonth = selectedMonthNumber === dateMonthNumber;
  const activeDateStyle = isSameMonth ? styles.activeDate : hideExtraDaysStyle;

  const onPressDayHandler = (date: Dayjs) => setSelectedDate(date);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressDayHandler(date)}
    >
      <>
        {selectedDateFormatted === dateFormatted ? (
          <View style={styles.activeCircle} />
        ) : null}

        <Text style={[styles.day, activeDateStyle]}>{date.get("D")}</Text>
      </>
    </TouchableOpacity>
  );
};

Day.defaultProps = {};

export default Day;
