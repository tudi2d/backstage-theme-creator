/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* 
// eslint-disable-next-line @backstage/no-undeclared-imports
import React from "react"

import { Content, InfoCard, ItemCard, Page } from "@backstage/core-components"
import {
  MockStarredEntitiesApi,
  catalogApiRef,
  starredEntitiesApiRef,
} from "@backstage/plugin-catalog-react"
import {
  HomePageCompanyLogo,
  HomePageToolkit,
  TemplateBackstageLogo,
  TemplateBackstageLogoIcon,
} from "@backstage/plugin-home"
import { TestApiProvider } from "@backstage/test-utils"
import { Card, Grid, Input, makeStyles } from "@material-ui/core"

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  svg: {
    width: "auto",
    height: 100,
  },
  path: {
    fill: theme.palette.type === "light" ? "#242526" : "#fff",
  },
}))

export const MockHomepagePlugin = () => {
  const { svg, path, container } = useLogoStyles()
  return (
    <TestApiProvider
      apis={[
        [catalogApiRef, {}],
        [starredEntitiesApiRef, new MockStarredEntitiesApi()],
      ]}
    >
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={6}>
            <HomePageCompanyLogo
              className={container}
              logo={<TemplateBackstageLogo classes={{ svg, path }} />}
            />
            <Grid container item xs={12} justifyContent="center">
              <Input
                value="Mockmock..."
                disabled
                disableUnderline
                style={{
                  width: "1000px",
                  maxWidth: "60vw",
                  height: "80px",
                  paddingLeft: "20px",
                  fontSize: "1.5em",
                  boxShadow:
                    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                  borderRadius: "50px",
                  backgroundColor: "#FFFFFF",
                }}
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageToolkit
                  tools={Array(8).fill({
                    url: "/",
                    label: "link",
                    icon: <TemplateBackstageLogoIcon />,
                  })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </TestApiProvider>
  )
}
 */
