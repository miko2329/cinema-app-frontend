import React, {ChangeEvent, useState} from 'react';
import styles from "./Sign.module.css";
import {SigninType} from "../../utils/api/request/types.ts";
import {baseAuthApiUrl, POST} from "../../utils/api/api.ts";
import {useDispatch} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {set, userSelector} from "../../store/slices/userSlice.ts";
import {useNavigate, useSearchParams} from "react-router-dom";

const Signin = () => {

    const dispatch = useAppDispatch();

    const user = useAppSelector(userSelector)

    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams();
    const callbackUrl = searchParams.get("callbackurl")

    const [data, setData] = useState<SigninType>({
        email: "",
        password: ""
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        POST(`${baseAuthApiUrl}/authenticate`, JSON.stringify(data)).then(res => {
            dispatch(set(res))
            alert("Successfully signed in")
            if(callbackUrl) {
                navigate(callbackUrl)
            }
            else{
                navigate("/")
            }
        }).catch(console.log)
    }

    console.log(user)

    return (
        <div className={styles.signFormWrapper}>
            <form onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor={"email"}>Email:</label>
                <input className={styles.input} type="text" name={"email"} id={"email"} value={data.email} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.email = e.target.value;
                    setData(newData)
                }}/>
                <label className={styles.label} htmlFor={"password"}>Password:</label>
                <input className={styles.input} type="text" name={"password"} id={"password"} value={data.password} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.password = e.target.value;
                    setData(newData)
                }}/>
                <button className={styles.add} type={"submit"}>Sign in</button>
            </form>
        </div>
    );
};

export default Signin;