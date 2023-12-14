import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import "./index.css"
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store";
import {Provider} from "react-redux";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
)
