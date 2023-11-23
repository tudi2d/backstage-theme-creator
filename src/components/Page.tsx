import { makeStyles } from "@material-ui/core"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import ErrorBoundary from "src/components/ErrorBoundary"
import MainWindow from "src/components/MainWindow"
import SmallScreenWarning from "src/components/SmallScreenWarning"
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer"
import Tutorial from "src/components/theme-creator/Tutorial"
import theme from "src/siteTheme"

const useStyles = makeStyles(theme => ({
  appRoot: {
    display: "flex",
    height: "100vh",
  },
  headerNavAndMain: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },
  navAndMain: {
    flex: 1,
    display: "flex",
    minHeight: 0,
  },
  main: {
    minWidth: 0,
    minHeight: 0,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#000000",
    [theme.breakpoints.up("md")]: {
      position: "static",
    },
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.appRoot}>
        <ErrorBoundary>
          <div className={classes.headerNavAndMain}>
            <main className={classes.main}>
              <MainWindow />
            </main>
          </div>

          <ThemeConfigDrawer />
        </ErrorBoundary>
      </div>
      <SmallScreenWarning />
      <Tutorial />
    </ThemeProvider>
  )
}

export default IndexPage
