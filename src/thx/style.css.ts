import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1rem",
  textAlign: "center",
});

const rocket = style({
  marginTop: "24px",
});

const title = style({
  marginTop: "66px",
  marginBottom: "15px",
});

export const thxSt = {
  container,
  rocket,
  title,
};
