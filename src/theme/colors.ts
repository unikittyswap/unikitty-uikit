import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#3b5a27",
  primaryBright: "#3b5a27",
  primaryDark: "#3b5a27",
  secondary: "#6EAC47",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#c1dec0",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#194C30",
  textDisabled: "#BDC2C4",
  textSubtle: "#669f42",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FFFFFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#c1dec0",
  textDisabled: "#666171",
  textSubtle: "#c1dec0",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
