import {createMuiTheme} from "@material-ui/core";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobileXS: true,
    mobile: true,
    lSPhones: true,
    tablets: true,
    desktops: true,
    xxl: true,
  }
}

 export const  theme = createMuiTheme({
  breakpoints: {
    values: {
      mobileXS: 374.98,
      mobile: 575.98,
      lSPhones: 767.98,
      tablets: 991.98,
      desktops: 1199.98,
      xxl: 1440,
    },
  },
})