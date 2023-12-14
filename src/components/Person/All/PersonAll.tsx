import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import {PersonType} from "../../../utils/api/response/types.ts";
import styles from "./PersonAll.module.css";

const PersonAll = () => {
    const people = useLoaderData() as PersonType[];

    return (
        <>
            <div className={styles.gridWrapper}>
                {
                    people.map((person) => (
                        <Link key={person.id} className={"link"} to={`/person/${person.id}`} relative={"route"}>
                            <div className={styles.personWrapper}>
                                <p className={styles.personInfo}>Activity: {person.activity.name}</p>
                                <p className={styles.personInfo}>First name: {person.firstName}</p>
                                <p className={styles.personInfo}>Last name: {person.lastName}</p>
                                {/*<p className={styles.personInfo}>Birth date: {person.birthDate}</p>*/}
                                {/*{person.deathDate && <p className={styles.personInfo}>Death date: {person.deathDate}</p>}*/}
                                {/*<img src={person.imageUrl}/>*/}
                                {/*<p className={styles.personInfo}>Country: {person.country.name}</p>*/}
                                {/*<img src={`https://flagsapi.com/${person.country.isoCode}/flat/64.png`}/>*/}
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className={styles.addWrapper}>
                <Link to={'/person/add'} relative={"route"} className={styles.add}>Add new person</Link>
            </div>
        </>
    );
};

export default PersonAll;