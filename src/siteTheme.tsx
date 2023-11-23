import { themes } from "@backstage/theme"
import {
  ThemeOptions,
  Theme,
  PaletteType,
  createTheme,
} from "@material-ui/core"

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    type: "light" as PaletteType,
    primary: {
      main: "#3f51b5", // the default primary color
    },
    secondary: {
      main: "#f50057", // the default secondary color
    },
  },
}

export const defaultTheme: Theme = createTheme()

const backstageDark = themes.dark.getTheme("v4")

export const themeConfig: ThemeOptions = {
  palette: backstageDark?.palette,
  props: {
    MuiAccordion: {
      square: true,
      TransitionProps: {
        unmountOnExit: true,
      },
    },
  },
  overrides: {
    MuiAccordion: {
      root: {
        border: "1px solid rgba(255, 255, 255, .125)",
        boxShadow: "none",
        transition: defaultTheme.transitions.create("margin-left"),
        "&:not(:last-child)": {
          borderBottom: 0,
        },
        "&:before": {
          display: "none",
        },
        "&$expanded": {
          margin: "auto",
        },
        "&$disabled": {
          marginLeft: 32,
        },
      },
    },
    MuiAccordionSummary: {
      root: {
        borderBottom: "1px solid rgba(255, 255, 255, .125)",
        minHeight: 56,
        "&$expanded": {
          minHeight: 56,
        },
      },
      content: {
        alignItems: "center",
        justifyContent: "space-between",
        "&$expanded": {
          margin: "12px 0",
        },
      },
    },
    MuiAccordionDetails: {
      root: {
        backgroundColor: "#212121",
      },
    },
    MuiDrawer: {
      docked: {
        "& $paper": {
          position: "static",
        },
      },
      paper: {},
    },
    MuiPopover: {
      paper: {
        backgroundColor: "#121212",
      },
    },
  },
}

export default createTheme(themeConfig)
