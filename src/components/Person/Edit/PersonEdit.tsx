import React, {ChangeEvent, useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";
import {CountryType, PersonType} from "../../../utils/api/response/types.ts";
import {basePersonApiUrl, PATCH} from "../../../utils/api/api.ts";
import styles from "./PersonEdit.module.css";
import {countryAllLoader} from "../../../utils/loaders/CountryAllLoader.ts";
import {PersonAddType} from "../../../utils/api/request/types.ts";

export const activities = [
    {
        id: 1,
        name: "Actor"
    },
    {
        id: 2,
        name: "Director"
    },
    {
        id: 3,
        name: "Producer"
    },
    {
        id: 4,
        name: "Operator"
    },
]

const PersonEdit = () => {
    const initState = useLoaderData() as PersonType

    const [data, setData] = useState<PersonType>(initState);
    const [countryId, setCountryId] = useState<number | null>(initState.country.id)
    const [countries, setCountries] = useState<CountryType[] | null>(null);

    useEffect(() => {
        setCountryId(data.country.id)
    }, [data])

    useEffect(() => {
        countryAllLoader().then(res => setCountries(res)).catch(console.log);
    }, [])

    console.log(countries)
    console.log("init state", initState)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const dataToSend: PersonAddType = {
            id: data.id,
            activity: {id: data.activity.id, name: data.activity.name},
            birthDate: data.birthDate,
            countryId: data.country.id!,
            deathDate: data.deathDate,
            firstName: data.firstName,
            imageUrl: data.imageUrl,
            lastName: data.lastName
        }
        PATCH(`${basePersonApiUrl}/update`, JSON.stringify(dataToSend)).then(res => alert(res.message)).catch(console.log)
    }

    const handleChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const newData: PersonType = {...data};
        newData.country = countries?.find((country) => country.id === parseInt(value)) || initState.country
        setData(newData)
    }

    const handleChangeActivity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const newData = {...data};
        newData.activity = activities[parseInt(value)-1]
        setData(newData)
    }

    console.log("data state", data)

    return (
        <div className={styles.editFormWrapper}>
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
                <select className={styles.select} name="countryId" id="countryId" value={countryId!} onChange={handleChangeCountry}>
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
                <button className={styles.reset} type={"reset"} onClick={() => setData(initState)}>Reset</button>
                <button className={styles.submit} type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default PersonEdit;