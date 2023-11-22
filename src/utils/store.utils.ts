import { StorePreviousValue, StoreSetState } from "types/store.types";

export const getStoreSetState = <T = unknown>(
  payload: Parameters<StoreSetState<T>>[0],
  prev: T
): T => {
  let selectedItem: StorePreviousValue<T> | T;
  if (typeof payload === "function") {
    selectedItem = (payload as StorePreviousValue<T>)(prev);
  } else {
    selectedItem = payload;
  }
  return selectedItem;
};
