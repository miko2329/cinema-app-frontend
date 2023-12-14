import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import CountryAll from "../components/Country/All/CountryAll.tsx";
import {countryAllLoader} from "../utils/loaders/CountryAllLoader.ts";
import CountryOne from "../components/Country/One/CountryOne.tsx";
import {countryOneLoader} from "../utils/loaders/CountryOneLoader.ts";
import NotFound from "../components/NotFound/NotFound.tsx";
import CountryEdit from "../components/Country/Edit/CountryEdit.tsx";
import CountryAdd from "../components/Country/Add/CountryAdd.tsx";
import AwardAll from "../components/Award/All/AwardAll.tsx";
import AwardOne from "../components/Award/One/AwardOne.tsx";
import {awardOneLoader} from "../utils/loaders/AwardOneLoader.ts";
import {awardAllLoader} from "../utils/loaders/AwardAllLoader.ts";
import AwardAdd from "../components/Award/Add/AwardAdd.tsx";
import AwardEdit from "../components/Award/Edit/AwardEdit.tsx";
import PersonAll from "../components/Person/All/PersonAll.tsx";
import PersonEdit from "../components/Person/Edit/PersonEdit.tsx";
import React from "react";
import PersonAdd from "../components/Person/Add/PersonAdd.tsx";
import PersonOne from "../components/Person/One/PersonOne.tsx";
import {personOneLoader} from "../utils/loaders/PersonOneLoader.ts";
import {personAllLoader} from "../utils/loaders/PersonAllLoader.ts";
import Signin from "../components/Sign/Signin.tsx";
import Signup from "../components/Sign/Signup.tsx";
import WithAuthProtect from "../hoc/withAuthProtect.tsx";
import WithAdminProtect from "../hoc/withAdminProtect.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/404",
                element: <NotFound/>
            },
            {
                path: "/country/all",
                element: <WithAuthProtect>
                    <CountryAll/>
                </WithAuthProtect>,
                loader: countryAllLoader,
            },
            {
                path: "/country/:countryId",
                element: <WithAuthProtect>
                    <CountryOne/>
                </WithAuthProtect>,
                loader: countryOneLoader,
            },
            {
                path: "/country/:countryId/edit",
                element: <WithAdminProtect>
                    <CountryEdit/>
                </WithAdminProtect>,
                loader: countryOneLoader
            },
            {
                path: "/country/add",
                element: <WithAdminProtect>
                    <CountryAdd/>
                </WithAdminProtect>
            },
            {
                path: "/award/all",
                element: <WithAuthProtect>
                    <AwardAll/>
                </WithAuthProtect>,
                loader: awardAllLoader,
            },
            {
                path: "/award/:awardId",
                element: <WithAuthProtect>
                    <AwardOne/>
                </WithAuthProtect>,
                loader: awardOneLoader,
            },
            {
                path: "/award/:awardId/edit",
                element: <WithAdminProtect>
                    <AwardEdit/>
                </WithAdminProtect>,
                loader: awardOneLoader
            },
            {
                path: "/award/add",
                element: <WithAdminProtect>
                    <AwardAdd/>
                </WithAdminProtect>
            },
            {
                path: "/person/all",
                element: <WithAuthProtect>
                        <PersonAll/>
                    </WithAuthProtect>,
                loader: personAllLoader,
            },
            {
                path: "/person/:personId",
                element: <WithAuthProtect>
                    <PersonOne/>
                </WithAuthProtect>,
                loader: personOneLoader,
            },
            {
                path: "/person/:personId/edit",
                element: <WithAdminProtect>
                    <PersonEdit/>
                </WithAdminProtect>,
                loader: personOneLoader
            },
            {
                path: "/person/add",
                element: <WithAdminProtect>
                    <PersonAdd/>
                </WithAdminProtect>
            },
            {
                path: "/signin",
                element: <Signin/>
            },
            {
                path: "/signup",
                element: <Signup/>
            },
        ]
    },
])