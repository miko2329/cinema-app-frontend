import React from 'react';
import styles from "./CountryAll.module.css"
import {Link, useLoaderData} from "react-router-dom";

export type CountryType = {
    id: number,
    isoCode: string,
    name: string
}

const CountryAll = () => {

    const countries = useLoaderData() as CountryType[];

    return (
        <div className={styles.gridWrapper}>
            {
                countries.map((country) => (
                    <Link to={`/country/${country.id}`} relative={"route"}>
                        <div key={country.isoCode} className={styles.countryWrapper}>
                            <p className={styles.countryInfo}>Name: {country.name}</p>
                            <p className={styles.countryInfo}>ISO code: {country.isoCode}</p>
                            <img src={`https://flagsapi.com/${country.isoCode}/flat/64.png`}/>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default CountryAll;