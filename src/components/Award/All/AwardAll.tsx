import React from 'react';
import {Link, useLoaderData} from "react-router-dom";
import styles from "./AwardAll.module.css";
import {AwardType} from "../../../utils/api/response/types.ts";

const AwardAll = () => {
    const awards = useLoaderData() as AwardType[];

    return (
        <>
            <div className={styles.gridWrapper}>
                {
                    awards.map((award) => (
                        <Link key={award.id} className={"link"} to={`/award/${award.id}`} relative={"route"}>
                            <div className={styles.awardWrapper}>
                                <p>Name: {award.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className={styles.addWrapper}>
                <Link to={'/award/add'} relative={"route"} className={styles.add}>Add new award</Link>
            </div>
        </>
    );
};

export default AwardAll;