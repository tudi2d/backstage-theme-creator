import { BackstageOverrides } from "@backstage/core-components"
import {
  UnifiedThemeProvider,
  createUnifiedThemeFromV4,
  themes,
} from "@backstage/theme"
import Paper from "@material-ui/core/Paper"
import { Theme, makeStyles } from "@material-ui/core/styles"
import { CSSProperties } from "@material-ui/core/styles/withStyles"
import deepmerge from "deepmerge"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"

interface ThemeWrapperProps {
  children: React.ReactNode | React.ReactNodeArray
}

const createCustomThemeOverrides = (theme: Theme): BackstageOverrides => {
  return {
    BackstageSidebar: {
      drawer: {
        position: "absolute",
      },
    },
    BackstagePage: {
      root: {
        height: "100%",
      },
    },
    /** TODO: MobileSidebar needs overridable name */
    MuiBottomNavigation: {
      root: {
        position: value => {
          // @ts-ignore: `value` is object with {children, className, component, data-test-id}
          if (value["data-testid"] === "mobile-sidebar-root") {
            return "absolute !important" as CSSProperties["position"]
          }
          return "inherit"
        },
      },
    },
  }
}

/**
 *
 * Wraps example content in the dynamically controlled theme
 * set by the theme editor sidebar
 */
const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const themeObject: Theme = useSelector(
    (state: RootState) => state.themeObject
  )
  const lightV4 = themes.light.getTheme("v4") as Theme
  const darkV4 = themes.dark.getTheme("v4") as Theme

  const combinedLightTheme = deepmerge(lightV4, themeObject)
  const combinedDarkTheme = deepmerge(darkV4, themeObject)

  let combinedTheme =
    themeObject.palette.type === "light"
      ? combinedLightTheme
      : combinedDarkTheme

  const unifiedTheme = createUnifiedThemeFromV4({
    ...combinedTheme,
    overrides: {
      ...combinedTheme.overrides,
      ...createCustomThemeOverrides(combinedTheme),
    },
  })

  return (
    <UnifiedThemeProvider theme={unifiedTheme}>
      <ThemeContainer>{children}</ThemeContainer>
    </UnifiedThemeProvider>
  )
}

const useStyles = makeStyles(theme => ({
  themeContainer: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "100%",
  },
}))

/**
 *
 * CssBa
 *
 */
const ThemeContainer = ({ children }: ThemeWrapperProps) => {
  const classes = useStyles()
  return (
    <Paper className={classes.themeContainer} elevation={0} square>
      {children}
    </Paper>
  )
}

export default ThemeWrapper
