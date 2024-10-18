import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
// import { PersistGate } from 'redux-persist/integration/react';
import store  from "./store/store";
import App from "./App.jsx";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     {/* <PersistGate loading={null} persistor={persistor}> */}

      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
       {/* </PersistGate> */}

    </Provider>
  </React.StrictMode>
);



