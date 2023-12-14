import React from 'react';
import {useAppSelector} from "../hooks";
import {userSelector} from "../store/slices/userSlice.ts";
import {Navigate} from "react-router-dom";

type Props = {
    children: React.ReactNode
}

const WithAdminProtect = ({children}: Props) => {
    const userResponse = useAppSelector(userSelector).userResponse

    return (
        userResponse.role !== "ADMIN" ?
            <Navigate to={`/404`}/>
            :
            <>
                {children}
            </>
    );
};

export default WithAdminProtect;