import React, {ChangeEvent, useState} from 'react';
import styles from "./CountryEdit.module.css"
import {useLoaderData} from "react-router-dom";
import {baseCountryApiUrl, PATCH} from "../../../utils/api/api.ts";
import {CountryType} from "../../../utils/api/response/types.ts";

const CountryEdit = () => {

    const initState = useLoaderData() as CountryType

    const [data, setData] = useState<CountryType>(initState);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        PATCH(`${baseCountryApiUrl}/update`, JSON.stringify(data)).then(res => alert(res.message)).catch(console.log)
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