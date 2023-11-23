import { Dayjs } from "dayjs";
import React, { forwardRef, useRef, useState } from "react";
import { TextInput } from "react-native";

import styles from "./InputDatePicker.styles";
import { InputDatePickerProps as Props } from "./InputDatePicker.types";
import DatePicker from "../DatePicker/DatePicker";
import Input from "../Input/Input";
import { InputMethods } from "../Input/Input.types";

const InputDatePicker = forwardRef<TextInput, Props>((props, _ref) => {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<InputMethods>(null);
  const [date, setDate] = useState<string | undefined>(undefined);
  const onClose = () => setShowModal(false);
  const onOpen = () => setShowModal(true);
  const onSave = (date: Dayjs) => {
    setDate(date.format("DD-MM-YYYY"));
    inputRef.current?.onChange(date.toDate());
  };

  return (
    <>
      <Input
        {...props}
        ref={inputRef}
        onTouchStart={onOpen}
        value={date}
        editable={false}
        isDate
        style={styles.container}
      />
      <DatePicker visible={showModal} onClose={onClose} onSave={onSave} />
    </>
  );
});

export default InputDatePicker;
