import React from 'react';
import {useAppSelector} from "../hooks";
import {userSelector} from "../store/slices/userSlice.ts";
import {Navigate, useLocation} from "react-router-dom";

type Props = {
    children: React.ReactNode
}

const WithAuthProtect = ({children}: Props) => {

    const user = useAppSelector(userSelector)
    const pathname = useLocation().pathname

    return (
        user.userResponse.id === 0 ?
            <Navigate to={`/signin?callbackurl=${pathname}`}/>
            :
            <>
                {children}
            </>
    );
};

export default WithAuthProtect;