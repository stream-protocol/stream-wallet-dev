import React, { FunctionComponent, useEffect, useState } from "react";

import { createRootStore, RootStore } from "./root";
import { getStreamFromWindow } from "@stream-wallet/stores";
import { StreamCoreTypes } from "@stream-wallet/provider/build/core-types";
import { Stream } from "@stream-wallet/types";

const storeContext = React.createContext<RootStore | null>(null);

export const StoreProvider: FunctionComponent = ({ children }) => {
  const [stores] = useState(() => createRootStore());

  useEffect(() => {
    getStreamFromWindow().then(
      (stream-wallet: (Stream & Partial<StreamCoreTypes>) | undefined) => {
        // Remember that `StreamCoreTypes` is only usable on privileged env.
        // Definitely, extension is privileged env. So, we can use `getAnalyticsId()`.
        if (stream-wallet && stream-wallet.__core__getAnalyticsId) {
          stream-wallet.__core__getAnalyticsId().then((id) => {
            stores.analyticsStore.setUserId(id);
          });
        }
      }
    );
  }, [stores.analyticsStore]);

  return (
    <storeContext.Provider value={stores}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("You have forgot to use StoreProvider");
  }
  return store;
};

export { ChainStore } from "./chain";
