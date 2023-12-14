import React from 'react';
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {PersonType} from "../../../utils/api/response/types.ts";
import {basePersonApiUrl, DELETE} from "../../../utils/api/api.ts";
import styles from "./PersonOne.module.css";
import {useAppSelector} from "../../../hooks";
import {userSelector} from "../../../store/slices/userSlice.ts";

const PersonOne = () => {
    const person = useLoaderData() as PersonType;
    const navigate = useNavigate();
    const userResponse = useAppSelector(userSelector).userResponse

    const onClickDelete = () => {
        DELETE(`${basePersonApiUrl}/delete/${person.id}`).then(res => {
            alert(res.message)
            navigate('/person/all')
        }).catch(console.log)
    }

    return (
        <div className={styles.personWrapper}>
            <p className={styles.personInfo}>Activity: {person.activity.name}</p>
            <p className={styles.personInfo}>First name: {person.firstName}</p>
            <p className={styles.personInfo}>Last name: {person.lastName}</p>
            <p className={styles.personInfo}>Birth date: {person.birthDate}</p>
            {person.deathDate && <p className={styles.personInfo}>Death date: {person.deathDate}</p>}
            <img src={person.imageUrl}/>
            <p className={styles.personInfo}>Country: {person.country.name}</p>
            <img src={`https://flagsapi.com/${person.country.isoCode}/flat/64.png`}/>

            {userResponse.role === "ADMIN" && <><
                Link className={`${styles.edit} link`} to={`/person/${person.id}/edit`}>Edit</Link>
                <button onClick={onClickDelete} className={styles.button}>Delete</button>
            </>}
        </div>
    );
};

export default PersonOne;