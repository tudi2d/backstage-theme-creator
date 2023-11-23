import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import createStore from "./state/createStore"
import IndexPage from "./components/Page"

export default function App() {
  const { store, persistor } = createStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IndexPage />
      </PersistGate>
    </Provider>
  )
}
