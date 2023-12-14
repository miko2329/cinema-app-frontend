import React, {ChangeEvent, useState} from 'react';
import styles from "./Sign.module.css";
import {SignupType} from "../../utils/api/request/types.ts";
import {baseAuthApiUrl, POST} from "../../utils/api/api.ts";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {set, userSelector} from "../../store/slices/userSlice.ts";
import {useNavigate} from "react-router-dom";

const Signup = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate()

    const [data, setData] = useState<SignupType>({
        email: "", firstname: "", lastname: "", password: "", role: "USER"
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        POST(`${baseAuthApiUrl}/register`, JSON.stringify(data)).then(res => {
            dispatch(set(res))
            alert("Successfully signed up and signed in")
            navigate("/")
        }).catch(console.log)
    }

    const handleChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const newData = {...data};
        newData.role = value
        setData(newData)
    };


    return (
        <div className={styles.signFormWrapper}>
            <form onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor={"firstname"}>First name:</label>
                <input className={styles.input} type="text" name={"firstname"} id={"firstname"} value={data.firstname} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.firstname = e.target.value;
                    setData(newData)
                }}/>
                <label className={styles.label} htmlFor={"lastName"}>Last name:</label>
                <input className={styles.input} type="text" name={"lastname"} id={"lastname"} value={data.lastname} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.lastname = e.target.value;
                    setData(newData)
                }}/>
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
                <select className={styles.select} name="activity" id="activity" value={data.role} onChange={handleChangeRole}>
                    <option value={"USER"}>USER</option>
                    <option value={"ADMIN"}>ADMIN</option>
                </select>
                <button className={styles.add} type={"submit"}>Sign up</button>
            </form>
        </div>
    );
};

export default Signup;