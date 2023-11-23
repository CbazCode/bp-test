// Match calendar helpers

import dayjs, { Dayjs } from "dayjs";

import { CONSTANTS } from "config/constants";
const { APP } = CONSTANTS;
const { DATE } = APP;
const { ENGLISH_MONTHS, SPANISH_MONTHS, ENGLISH_DAYS, SPANISH_DAYS } = DATE;

export const MONTHS = { en: ENGLISH_MONTHS, es: SPANISH_MONTHS };
export const WEEKDAYS_NAMES = { en: ENGLISH_DAYS, es: SPANISH_DAYS };

export const getDateRelyingMonth = (
  monthNumber: number,
  yearNumber: number
): Dayjs => {
  let date = dayjs().set("year", yearNumber);
  const currentMonthNumberInAnyYear = date.month();
  const firstDateOfMonth = dayjs()
    .set("month", monthNumber)
    .set("year", yearNumber)
    .startOf("month");
  if (currentMonthNumberInAnyYear !== monthNumber) date = firstDateOfMonth;
  return date;
};

function getArrayOfDaysBetween(a: Dayjs, b: Dayjs): Dayjs[] {
  const days: Dayjs[] = [];
  let from = a;
  let msDayFrom = a.valueOf();
  const msDayTo = b.add(1, "day").valueOf();

  for (; msDayFrom <= msDayTo; msDayFrom = from.add(1, "day").valueOf()) {
    days.push(from);
    from = from.add(1, "day");
  }
  return days;
}

export function isGTE(a: Dayjs, b: Dayjs) {
  return a.diff(b, "day") > -1;
}

export function isLTE(a: Dayjs, b: Dayjs) {
  return b.diff(a, "day") > -1;
}

export function month(date: Dayjs) {
  const year = date.get("year");
  const month = date.get("month");
  const days = new Date(year, month + 1, 0).getDate();

  const firstDay = dayjs(new Date(year, month, 1, 0, 0, 0));
  const lastDay = dayjs(new Date(year, month, days, 0, 0, 0));

  return getArrayOfDaysBetween(firstDay, lastDay);
}

export function page(date: Dayjs, firstDayOfWeek = 0) {
  const days = month(date);

  let before: Dayjs[] = [];
  let after: Dayjs[] = [];

  const fdow = (7 + firstDayOfWeek) % 7 || 7;
  const ldow = (fdow + 6) % 7;

  firstDayOfWeek = firstDayOfWeek || 0;

  const from = days[0]?.clone() ?? dayjs();

  let newFrom: Dayjs = dayjs();

  if (from?.get("day") !== fdow) {
    newFrom = from.subtract((from.get("day") + 7 - fdow) % 7, "day");
  }

  const to = days[days.length - 1]?.clone() ?? dayjs();
  let newTo: Dayjs = dayjs();
  const day = to?.get("day");

  if (day !== ldow) newTo = to?.add((ldow + 7 - day) % 7, "day");
  if (day === ldow) newTo = to;

  if (isLTE(newFrom, days[0] ?? dayjs())) {
    before = getArrayOfDaysBetween(newFrom, days[0] ?? dayjs());
  }

  if (isGTE(newTo, days[days.length - 1] ?? dayjs())) {
    after = getArrayOfDaysBetween(days[days.length - 1] ?? dayjs(), newTo);
  }

  return before.concat(days.slice(1, days?.length - 1), after);
}

export const sortElementsFromIndex = (arr: string[], index: number) => {
  if (index >= arr.length || index < 0) {
    return arr.map((month, index) => ({ name: month, id: index }));
  }
  const clone = arr.map((month, index) => ({ name: month, id: index }));
  const previousElements = clone.splice(0, index + 1);
  clone.push(...previousElements);

  return clone;
};
