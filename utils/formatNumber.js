function formatNumber(number) {
  const formattedNumber = number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedNumber;
}
export { formatNumber };
