import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(value || "none");
    }, delay);

    return () => clearTimeout(timeOut);
  }, [value]);

  return debounceValue;
};

export default useDebounce;
