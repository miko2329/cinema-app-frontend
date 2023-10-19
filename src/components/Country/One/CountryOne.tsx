import React from 'react';
import styles from "./CountryOne.module.css"
import {useLoaderData} from "react-router-dom";
import {CountryType} from "../All/CountryAll.tsx";

const CountryOne = () => {

    const country = useLoaderData() as CountryType;

    return (
        <div className={styles.countryWrapper}>
            <p className={styles.countryInfo}>Name: {country.name}</p>
            <p className={styles.countryInfo}>ISO code: {country.isoCode}</p>
            <img src={`https://flagsapi.com/${country.isoCode}/flat/64.png`}/>
        </div>
    );
};

export default CountryOne;