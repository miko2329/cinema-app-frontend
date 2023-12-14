import React from 'react';
import styles from "./CountryAll.module.css"
import {Link, useLoaderData} from "react-router-dom";
import {CountryType} from "../../../utils/api/response/types.ts";

const CountryAll = () => {

    const countries = useLoaderData() as CountryType[];

    return (
        <>
            <div className={styles.gridWrapper}>
                {
                    countries.map((country) => (
                        <Link key={country.isoCode} className={"link"} to={`/country/${country.id}`} relative={"route"}>
                            <div className={styles.countryWrapper}>
                                <p className={styles.countryInfo}>Name: {country.name}</p>
                                <p className={styles.countryInfo}>ISO code: {country.isoCode}</p>
                                <img src={`https://flagsapi.com/${country.isoCode}/flat/64.png`}/>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className={styles.addWrapper}>
                <Link to={'/country/add'} relative={"route"} className={styles.add}>Add new country</Link>
            </div>
        </>
    );
};

export default CountryAll;