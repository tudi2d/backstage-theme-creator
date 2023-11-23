# [Backstage Theme Creator](https://backstage-theme-creator.vercel.app)


The _Backstage Theme Creator_ is a fork of the [_mui-theme-creator_](https://github.com/bareynol/mui-theme-creator) created by @bareynol. It helps visualising changes to the `ThemeOptions` in a Backstage application by showcasing them in a small example application. In difference to the `MUI Theme Creator` this application is a React SPA not build on Gatsby.

<img width="1452" alt="Screenshot 2023-11-23 at 16 40 27" src="https://github.com/tudi2d/backstage-theme-creator/assets/8904624/d2439226-7b89-47d1-b212-0acea69412a7">


## To be done

The project is in a very early state & has still some work to do to work smoothly:

- Support Material UI v5 `ThemeOptions` & make them the primary input
- Fix routing
- Improve `vite` build to support the Homepage plugin
- Add more relevant theme variables to the editor
- Create a more sane default based on the `buildinThemes`
- Clean-up unsused code
- Fix `font` imports
- Convert `redux` store to React `context`
- Support code highlighting for Backstage custom `ThemeOptions`
- Support customizing `PageThemes`
- Improve mocked catalog
- Add `@backstage/core-components` to component list
- `theme` directory export to easily add it to existing apps
- Change to a more common, compatible license (e.g. Appache v2 or MIT)

## Why

Backstage is an open-source framework for building developer portals. When choosing to create an internal developer portal using Backstage it should really feel like a tool for your organization. The Backstage Theme Creator should make it easier to align the look-and-feel of Backstage with your corporate identity. It can be a good way to play around with customizing the UI before finalizing it in your application.

## Local development

```shell
yarn install
yarn dev
```
