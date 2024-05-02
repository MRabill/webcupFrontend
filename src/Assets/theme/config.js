const CONFIG_THEME = ({ theme }) => ({
  token: {
    colorPrimary: "#615AF1",
    colorBgContainer: theme.mode === "DARK" ? "black" : "white",
  },
  components: {
    Input: {
      controlOutline: "red",
    },
    Button: {
      textHoverBg: "red",
      defaultColor: "black",
      defaultBorderColor: "#E8E8E8",
      defaultBg: "blue",
      groupBorderColor: "yellow",
    },
    Segmented: {
      itemActiveBg: "#F5F5F5",
      //   itemHoverBg: theme.raw.secondaryButton,
      itemHoverColor: theme.mode === "DARK" ? "white" : "black",
      itemSelectedBg: theme.mode === "DARK" ? "#30363D" : "#fff",
      itemSelectedColor: theme.raw.text,
    },
  },
});

export { CONFIG_THEME };
