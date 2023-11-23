import { View, Text } from "react-native";

import styles from "./WeekDaysNames.styles";
import { WeekDaysNamesProps as Props } from "./WeekDaysNames.types";
import { WEEKDAYS_NAMES } from "../DatePicker.helpers";

const WeekDaysNames: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      {WEEKDAYS_NAMES["es"].map(weekDayName => {
        return (
          <Text style={styles.weekDayName} key={weekDayName}>
            {weekDayName.toLocaleUpperCase()}
          </Text>
        );
      })}
    </View>
  );
};

export default WeekDaysNames;
