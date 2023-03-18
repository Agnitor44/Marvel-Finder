import { persistor, store } from "@/globalRedux/store";

import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { createStoreHook, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
