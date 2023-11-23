import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Years.styles";
import { YearsProps as Props } from "./Years.types";
import Colors from "styles/Colors";

import ChevronSVG from "assets/icons/chevron.svg";

const iconProps = {
  fill: Colors.light.secondary,
  stroke: Colors.light.secondary,
  height: 14,
  width: 14
};

const Years: React.FC<Props> = props => {
  const { selectedDate, setSelectedDate } = props;

  const onChangeYear = (year: number) => {
    const date = selectedDate.set("year", year);
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.shadow}
        onPress={() => onChangeYear(selectedDate.get("year") - 1)}
      >
        <ChevronSVG style={styles.rotate} {...iconProps} />
      </TouchableOpacity>
      <Text style={styles.text}>{selectedDate.get("year")}</Text>
      <TouchableOpacity
        style={styles.shadow}
        onPress={() => onChangeYear(selectedDate.get("year") + 1)}
      >
        <ChevronSVG {...iconProps} />
      </TouchableOpacity>
    </View>
  );
};

Years.defaultProps = {};

export default Years;
