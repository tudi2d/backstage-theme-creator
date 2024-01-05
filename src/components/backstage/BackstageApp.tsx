import { createApp } from "@backstage/app-defaults"
import { AppRouter, FlatRoutes } from "@backstage/core-app-api"
import { AlertDisplay, OAuthRequestDialog } from "@backstage/core-components"
import { ApiExplorerPage } from "@backstage/plugin-api-docs"
import { TechRadarPage } from "@backstage/plugin-tech-radar"
import React from "react"
import { Navigate, Route } from "react-router-dom"
import PreviewWrapper from "./PreviewWrapper"
import { Root } from "./Root"
import { apis } from "./apis"
import { MockCatalogPlugin } from "./mock/MockCatalogPlugin"
import * as plugins from "./plugins"
import { MockHomepagePlugin } from "./mock/MockHomepage"

export const previewNavTabsId = "preview-nav-tabs"
const app = createApp({
  plugins: Object.values(plugins),
  apis,
  themes: [
    {
      id: "light",
      title: "Light",
      variant: "light",
      Provider: ({ children }) => <div>{children}</div>,
    },
    {
      id: "dark",
      title: "Dark",
      variant: "dark",
      Provider: ({ children }) => <div>{children}</div>,
    },
  ],
  configLoader: async () => {
    return [
      {
        context: "theme_creator",
        data: {
          app: { baseUrl: "http://localhost:5173/" },
          backend: { baseUrl: "http://localhost:7000" },
        },
      },
    ]
  },
})

const component = (
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>
        <FlatRoutes>
          <Navigate key="/" to="catalog" replace />
          {/* Home plugin does not work in production due to weird dependency-vite issue with `@rfjs` material UI import*/}
          <Route path="/home" element={<MockHomepagePlugin />} />
          <Route path="/api-docs" element={<ApiExplorerPage />} />
          <Route path="/catalog" element={<MockCatalogPlugin />} />
          <Route
            path="/tech-radar"
            element={<TechRadarPage width={1500} height={800} />}
          />
        </FlatRoutes>
      </Root>
    </AppRouter>
  </>
)

const root = React.createElement(app.createRoot(component))

export const BackstageApp = () => {
  return <PreviewWrapper>{root}</PreviewWrapper>
}
