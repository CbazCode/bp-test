import { Dayjs } from "dayjs";
import { useRef, useState } from "react";
import { forwardRef, useImperativeHandle } from "react";

import styles from "./InputDatePicker.styles";
import { InputDatePickerMethods } from "./InputDatePicker.types";
import { InputDatePickerProps as Props } from "./InputDatePicker.types";
import DatePicker from "../DatePicker/DatePicker";
import Input from "../Input/Input";
import { InputMethods } from "../Input/Input.types";
import { formatDate } from "utils/date.utils";

const InputDatePicker = forwardRef<InputDatePickerMethods, Props>(
  (props, ref) => {
    const { defaultValue, editable } = props;
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef<InputMethods>(null);
    const [date, setDate] = useState<string | undefined>(defaultValue);
    const onClose = () => setShowModal(false);

    const onOpen = () => {
      if (!editable) return;
      setShowModal(true);
    };

    const onSave = (date: Dayjs) => {
      setDate(formatDate(date.toDate()));
      inputRef.current?.onChange(date.toISOString());
    };

    useImperativeHandle(ref, () => ({
      reset: () => {
        setDate(undefined);
      }
    }));

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
  }
);

export default InputDatePicker;
