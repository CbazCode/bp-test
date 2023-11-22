import { useEffect } from "react";

export const useUnMount = (callback: () => void) => {
  useEffect(() => {
    return callback;
  }, []);
};
