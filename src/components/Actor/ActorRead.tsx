import React, {useEffect, useState} from 'react';
import styles from "./Actor.module.css"
import {baseApiUrl, GET} from "../../utils/api.ts";

type ActorData = {
    id: number
    firstName: string,
    lastName: string,
    birthDate: string,
    deathDate: string,
    country: {
        id: string,
        name: string,
        isoCode: string
    }
}

const ActorRead = () => {

    const [data, setData] = useState<ActorData[]>([])

    useEffect(() => {
        GET(`${baseApiUrl}/actor/all`).then((result) => setData(result as ActorData[]))
    }, [])

    return (
        <div className={styles.grid}>
            {
                data.map((element) => (
                    <div>
                        <h2>Id:</h2>
                        <p>{element.id}</p>
                        <h2>First name:</h2>
                        <p>{element.firstName}</p>
                        <h2>Last name:</h2>
                        <p>{element.lastName}</p>
                        <h2>Birth date:</h2>
                        <p>{element.birthDate}</p>
                        <h2>Death date:</h2>
                        <p>{element.deathDate}</p>
                        <h2>Country name:</h2>
                        <p>{element.country.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default ActorRead;