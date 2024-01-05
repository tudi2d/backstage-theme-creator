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

import React from "react"

import { EntityAboutCard, EntityLayout } from "@backstage/plugin-catalog"
import {
  EntityProvider,
  MockStarredEntitiesApi,
  catalogApiRef,
  starredEntitiesApiRef,
} from "@backstage/plugin-catalog-react"
import { TestApiProvider } from "@backstage/test-utils"
import { Grid } from "@material-ui/core"
import { mockEntity } from "./mock"

export const MockCatalogPlugin = () => (
  <TestApiProvider
    apis={[
      [catalogApiRef, {}],
      [starredEntitiesApiRef, new MockStarredEntitiesApi()],
    ]}
  >
    <EntityProvider entity={mockEntity}>
      <EntityLayout>
        <EntityLayout.Route title="Entity Card" path="/">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <EntityAboutCard variant="gridItem" />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Here you could add custom `EntityCards` */}
            </Grid>
          </Grid>
        </EntityLayout.Route>
        <EntityLayout.Route title="Entity Plugin" path="/plugin">
          <span>Entity Page</span>
        </EntityLayout.Route>
      </EntityLayout>
    </EntityProvider>
  </TestApiProvider>
)
