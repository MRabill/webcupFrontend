import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
// const customParseFormat = require("dayjs/plugin/customParseFormat");
// dayjs.extend(customParseFormat);
dayjs.extend(localeData);

const TableSortFilter = ({ type, valueToCompare }) => {
  if (type === "text") {
    return {
      sorter: (a, b) => {
        a = a[valueToCompare] || "z";
        b = b[valueToCompare] || "z";
        return a.localeCompare(b);
      },
    };
  }
  if (type === "number") {
    return {
      sorter: (a, b) => {
        return (
          (b[valueToCompare] || a[valueToCompare]) &&
          a[valueToCompare] - b[valueToCompare]
        );
      },
    };
  }
  if (type === "date") {
    return {
      sorter: (a, b) => {
        a = a[valueToCompare] || dayjs(8640000000000000);
        b = b[valueToCompare] || dayjs(8640000000000000);
        return dayjs(a) - dayjs(b);
      },
    };
  }
};

export default TableSortFilter;
