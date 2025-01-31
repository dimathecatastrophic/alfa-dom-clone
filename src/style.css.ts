import { style, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});

const subscription = style({
  display: "flex",
  alignItems: "center",
  border: "2px solid #F3F4F5",
  borderRadius: "24px",
  boxSizing: "border-box",
  padding: "1rem",
  justifyContent: "space-evenly",
  gap: "1.2rem",
});

const subscriptionText = style({
  fontSize: "15px",
  lineHeight: "20px",
});

const bottomBtn = style({
  background: "white",
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
  textAlign: "center",
});

const productsTitle = style({
  fontSize: "22px",
  marginBottom: "1rem",
});

const products = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const product = style({
  flex: "1 1 calc(50% - 1rem)",
  flexDirection: "column",
  maxWidth: "50%",
  boxSizing: "border-box",
  backgroundColor: "#F2F9FF",
  borderRadius: "24px",
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
  minHeight: "100px",
  border: "2px solid #F2F9FF",
  position: "relative",
  marginBottom: "16px"
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "17px",
  marginBottom: "0",
});

const productIcon = style({
  position: "absolute",
  right: 0,
  bottom: 0,
});

const productText = style({
  marginBottom: 0,
});

const plans = style({
  display: "flex",
  justifyContent: "center",
  gap: "0.5rem",
  position: "sticky",
  top: "0",
  zIndex: 100,
  boxSizing: "border-box",
  backgroundColor: "white",
  padding: "1rem 0",
  marginTop: "-19px",
});

const swSlide = recipe({
  base: {
    minWidth: "58px",
    maxWidth: "max-content",
    height: "32px",
    backgroundColor: "#F8F8F8",
    padding: "8px 16px",
    borderRadius: "1rem",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "center",
    color: "#6F6F6F",
    transition: "all .25s ease",
    display: "flex",
    alignItems: "center",
    marginRight: "16px",
  },
  variants: {
    selected: {
      true: {
        backgroundColor: "#000",
        color: "#FFF",
      },
    },

    default: {
      true: {
        background: "#FFEFD9",
        color: "#FF6838",
      },
    },
  },
});

globalStyle(`.swiper-slide:last-of-type`, {
  marginRight: '24px',
});

const serviceContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  subscription,
  subscriptionText,
  productsTitle,
  products,
  productTitle,
  product,
  productIcon,
  productText,
  plans,
  swSlide,
  serviceContainer,
};
