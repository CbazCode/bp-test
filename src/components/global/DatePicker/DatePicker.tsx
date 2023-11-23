import dayjs from "dayjs";
import React, { useMemo, useRef, useState } from "react";
import { View, FlatList, ListRenderItem, Modal } from "react-native";
import { TouchableOpacity, Text } from "react-native";

import { MONTHS, getDateRelyingMonth } from "./DatePicker.helpers";
import { sortElementsFromIndex } from "./DatePicker.helpers";
import styles from "./DatePicker.styles";
import { Month, DatePickerProps as Props } from "./DatePicker.types";
import MonthDays from "./MonthDays/MonthDays";
import WeekDaysNames from "./WeekDaysNames/WeekDaysNames";
import Years from "./Years/Years";
import Button from "../Button/Button";

const DatePicker: React.FC<Props> = props => {
  const { visible, onClose, onSave } = props;
  const listRef = useRef<FlatList>(null);
  const [selectedDate, setSelectedDate] = useState(() => dayjs());
  const monthIndex = useMemo(() => dayjs().month() - 1, []);
  const months = sortElementsFromIndex(MONTHS["es"], monthIndex);

  const onSaveDate = () => {
    onSave(selectedDate);
    onClose();
  };

  const onChangeMonth = (month: number, year: number) => {
    const date = getDateRelyingMonth(month, year);
    setSelectedDate(date);
  };

  const renderMonthName: ListRenderItem<Month> = props => {
    const { item: month } = props;
    const { id, name } = month;
    const isActiveMonth = MONTHS["es"][selectedDate.get("month")] === name;
    const activeMonthStyle = isActiveMonth && styles.activeMonthStyle;
    const activeMonthTextStyle = isActiveMonth && styles.activeMonthTextStyle;
    const selectedYear = selectedDate.get("year");
    return (
      <TouchableOpacity
        style={[styles.month, activeMonthStyle]}
        onPress={() => onChangeMonth(id, selectedYear)}
      >
        <Text style={[styles.monthText, activeMonthTextStyle]}>
          {name.toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      presentationStyle="overFullScreen"
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.background} onTouchStart={onClose} />
      <View style={styles.content}>
        <Years selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <View>
          <FlatList
            ref={listRef}
            renderItem={renderMonthName}
            data={months}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
        <WeekDaysNames />
        <MonthDays
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Button text="Guardar" onPress={onSaveDate} style={styles.button} />
      </View>
    </Modal>
  );
};

DatePicker.defaultProps = {};

export default DatePicker;
