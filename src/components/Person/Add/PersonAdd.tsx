import React, {ChangeEvent, useEffect, useState} from 'react';
import {CountryType, PersonType} from "../../../utils/api/response/types.ts";
import {baseCountryApiUrl, basePersonApiUrl, PATCH, PUT} from "../../../utils/api/api.ts";
import styles from "./PersonAdd.module.css";
import {activities} from "../Edit/PersonEdit.tsx";
import {countryAllLoader} from "../../../utils/loaders/CountryAllLoader.ts";
import {PersonAddType} from "../../../utils/api/request/types.ts";

const PersonAdd = () => {

    const [countries, setCountries] = useState<CountryType[] | null>(null);
    const [data, setData] = useState<PersonAddType>({
        activity: activities[0],
        birthDate: "",
        countryId: 1,
        deathDate: "",
        firstName: "",
        id: 0,
        imageUrl: "",
        lastName: ""

    });
    // const [countryId, setCountryId] = useState<number>(1)

    // useEffect(() => {
    //     setCountryId(data.countryId)
    // }, [data])

    useEffect(() => {
        countryAllLoader().then(res => setCountries(res)).catch(console.log);
    }, [])

    console.log(countries)

    const handleChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const newData: PersonAddType = {...data};
        newData.countryId = countries?.find((country) => country.id === parseInt(value))?.id || 1
        setData(newData)
    }

    const handleChangeActivity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const newData = {...data};
        newData.activity = activities[parseInt(value)-1]
        setData(newData)
    }

    console.log("data state", data)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        PUT(`${basePersonApiUrl}/add`, JSON.stringify(data)).then(res => alert(res.message)).catch(console.log)
    }


    console.log(data)

    return (
        <div className={styles.addFormWrapper}>
            <form onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor={"firstName"}>First name:</label>
                <input className={styles.input} type="text" name={"firstName"} id={"firstName"} value={data.firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.firstName = e.target.value;
                    setData(newData)
                }}/>
                <label className={styles.label} htmlFor={"lastName"}>Last name:</label>
                <input className={styles.input} type="text" name={"lastName"} id={"lastName"} value={data.lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.lastName = e.target.value;
                    setData(newData)
                }}/>
                <label className={styles.label} htmlFor={"birthDate"}>Birth date:</label>
                <input className={styles.input} type="date" name={"birthDate"} id={"birthDate"} value={data.birthDate || ""} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.birthDate = e.target.value;
                    setData(newData)
                }}/>
                <label className={styles.label} htmlFor={"deathDate"}>Death date:</label>
                <input className={styles.input} type="date" name={"deathDate"} id={"deathDate"} value={data.deathDate || ""} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.deathDate = e.target.value;
                    setData(newData)
                }}/>
                <label className={styles.label} htmlFor={"imageUrl"}>Image URL:</label>
                <input className={styles.input} type="text" name={"imageUrl"} id={"imageUrl"} value={data.imageUrl} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const newData = {...data}
                    newData.imageUrl = e.target.value;
                    setData(newData)
                }}/>
                <label className={styles.label} htmlFor={"countryId"}>Country:</label>
                <select className={styles.select} name="countryId" id="countryId" value={data.countryId} onChange={handleChangeCountry}>
                    {countries?.map((country) => (
                        <option key={country.id} value={country.id || ""}>{country.name}</option>
                    ))}
                </select>
                <label className={styles.label} htmlFor={"activity"}>Activity:</label>
                <select className={styles.select} name="activity" id="activity" value={data.activity.id} onChange={handleChangeActivity}>
                    {activities?.map((activity) => (
                        <option key={activity.id} value={activity.id || ""}>{activity.name}</option>
                    ))}
                </select>
                <button className={styles.add} type={"submit"}>Add</button>
            </form>
        </div>
    );
};

export default PersonAdd;