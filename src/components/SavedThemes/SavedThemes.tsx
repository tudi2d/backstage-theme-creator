import React from "react"
import {
  Paper,
  Card,
  CardContent,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Button,
  Divider,
} from "@material-ui/core"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import ThemeThumbnail from "./ThemeThumbnail"
import DefaultThemes from "./DefaultThemes"
import SavedThemeItem from "./SavedThemeItem/SavedThemeItem"
import SavedThemeList from "./SavedThemeList"
import AddThemeButton from "./AddThemeButton"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    savedThemesRoot: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      display: "flex",
      justifyContent: "space-between",
      overflowY: "auto",
    },
    savedThemes: {
      flex: 1,
      overflowY: "auto",
    },
    divider: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    themeActions: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginTop: theme.spacing(),
      },
    },
  })
)

function SavedThemes() {
  const classes = useStyles()
  return (
    <div className={classes.savedThemesRoot}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h4">Current Theme</Typography>
          <CurrentTheme />
          <div className={classes.themeActions}>
            <AddThemeButton />
            <DefaultThemes />
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.divider} />

        <Grid item className={classes.savedThemes}>
          <Typography variant="h4" gutterBottom>
            Saved Themes
          </Typography>
          <SavedThemeList />
        </Grid>
      </Grid>
    </div>
  )
}

export default SavedThemes

export const currentThemeThumbnailId = "current-theme-thumbnail"

function CurrentTheme() {
  const themeOptions = useSelector((state: RootState) => state.themeOptions)
  const themeId = useSelector((state: RootState) => state.themeId)
  const themeName = useSelector(
    (state: RootState) => state.savedThemes[state.themeId].name
  )
  const lastUpdated = useSelector(
    (state: RootState) => state.savedThemes[state.themeId].lastUpdated
  )
  return (
    <div id={currentThemeThumbnailId}>
      <SavedThemeItem
        name={themeName}
        themeOptions={themeOptions}
        themeId={themeId}
        lastUpdated={lastUpdated}
        large
      />
    </div>
  )
}
