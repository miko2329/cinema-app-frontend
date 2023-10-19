import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from "./CountryEdit.module.css"
import {useLoaderData} from "react-router-dom";
import {CountryType} from "../All/CountryAll.tsx";

const CountryEdit = () => {

    const initState = useLoaderData() as CountryType

    const [data, setData] = useState<CountryType>(initState);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    console.log(data)

    return (
        <div className={styles.editFormWrapper}>
            <form onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor={"isoCode"}>ISO code:</label>
                <input className={styles.input} type="text" name={"isoCode"} id={"isoCode"} value={data.isoCode} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.isoCode = e.target.value;
                    setData(newData)
                }}/>
                <label className={styles.label} htmlFor={"name"}>Name:</label>
                <input className={styles.input} type="text" name={"name"} id={"name"} value={data.name} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.name = e.target.value;
                    setData(newData)
                }}/>
                <button className={styles.reset} type={"reset"} onClick={() => setData(initState)}>Reset</button>
                <button className={styles.submit} type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default CountryEdit;