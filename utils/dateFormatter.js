import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
// const customParseFormat = require("dayjs/plugin/customParseFormat");
// dayjs.extend(customParseFormat);
dayjs.extend(localeData);

const dateFormatter = (
  date,
  type = "small",
  nullValue = "-",
  toAdd = null,
  toAddType = "hours"
) => {
  return date
    ? type === "small"
      ? toAdd
        ? dayjs(date).add(toAdd, toAddType).format("DD MMM YYYY")
        : dayjs(date).format("DD MMM YYYY")
      : toAdd
      ? dayjs(date).add(toAdd, toAddType).format("DD MMM YYYY HH:mm:ss")
      : dayjs(date).format("DD MMM YYYY HH:mm:ss")
    : nullValue;
};

export default dateFormatter;
