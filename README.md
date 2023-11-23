# Backstage Theme Creator

The _Backstage Theme Creator_ is a fork of the [_mui-theme-creator_](https://github.com/bareynol/mui-theme-creator) created by @bareynol. It helps visualising changes to the `ThemeOptions` in a Backstage application by showcasing them in a small example application. In difference to the `MUI Theme Creator` this application is a React SPA not build on Gatsby.

https://backstage-theme-creator.vercel.app

## To be done

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
