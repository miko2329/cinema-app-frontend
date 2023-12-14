import React from 'react';
import styles from "./CountryOne.module.css"
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {baseCountryApiUrl, DELETE} from "../../../utils/api/api.ts";
import {CountryType} from "../../../utils/api/response/types.ts";
import {useAppSelector} from "../../../hooks";
import {userSelector} from "../../../store/slices/userSlice.ts";

const CountryOne = () => {

    const country = useLoaderData() as CountryType;
    const navigate = useNavigate();
    const userResponse = useAppSelector(userSelector).userResponse

    const onClickDelete = () => {
        DELETE(`${baseCountryApiUrl}/delete/${country.id}`).then(res => {
            alert(res.message)
            navigate('/country/all')
        }).catch(console.log)
    }

    return (
        <div className={styles.countryWrapper}>
            <p className={styles.countryInfo}>Name: {country.name}</p>
            <p className={styles.countryInfo}>ISO code: {country.isoCode}</p>
            <img src={`https://flagsapi.com/${country.isoCode}/flat/64.png`}/>

            {userResponse.role === "ADMIN" && <>
                <Link className={`${styles.edit} link`} to={`/country/${country.id}/edit`}>Edit</Link>
                <button onClick={onClickDelete} className={styles.button}>Delete</button>
            </>}
        </div>
    );
};

export default CountryOne;