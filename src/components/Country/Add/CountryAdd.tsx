import React, {ChangeEvent, useState} from 'react';
import {baseCountryApiUrl, PUT} from "../../../utils/api/api.ts";
import styles from "./CountryAdd.module.css";
import {CountryType} from "../../../utils/api/response/types.ts";

const CountryAdd = () => {
    const [data, setData] = useState<CountryType>({
        id: null,
        isoCode: "",
        name: ""
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        PUT(`${baseCountryApiUrl}/add`, JSON.stringify(data)).then(res => alert(res.message)).catch(console.log)
    }


    console.log(data)

    return (
        <div className={styles.addFormWrapper}>
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
                <button className={styles.add} type={"submit"}>Add</button>
            </form>
        </div>
    );
};

export default CountryAdd;