import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import CountryAll from "../components/Country/All/CountryAll.tsx";
import {countryAllLoader} from "../utils/loaders/CountryAllLoader.ts";
import CountryOne from "../components/Country/One/CountryOne.tsx";
import {countryOneLoader} from "../utils/loaders/CountryOneLoader.ts";
import NotFound from "../components/NotFound/NotFound.tsx";
import CountryEdit from "../components/Country/Edit/CountryEdit.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/country/all",
                element: <CountryAll/>,
                loader: countryAllLoader,
            },
            {
                path: "/country/:countryId",
                element: <CountryOne/>,
                loader: countryOneLoader,
            },
            {
                path: "/country/:countryId/edit",
                element: <CountryEdit/>,
                loader: countryOneLoader,
            },
            {
                path: "/country/add"
            }
        ]
    },
])