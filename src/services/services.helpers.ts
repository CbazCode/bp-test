import { CONSTANTS } from "config/constants";

const { API } = CONSTANTS;
const { AUTHOR_ID } = API;

export const buildHeaders = (
  additionalHeaders?: Record<string, string | number | boolean | undefined>
) => {
  const headers = {
    "Content-Type": "application/json",
    authorId: AUTHOR_ID,
    ...additionalHeaders
  };
  return headers;
};
