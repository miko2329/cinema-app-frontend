import React, {ChangeEvent, useState} from 'react';
import {baseAwardApiUrl, PUT} from "../../../utils/api/api.ts";
import styles from "./AwardAdd.module.css";
import {AwardType} from "../../../utils/api/response/types.ts";

const AwardAdd = () => {
    const [data, setData] = useState<AwardType>({
        id: null,
        name: ""
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        PUT(`${baseAwardApiUrl}/add`, JSON.stringify(data)).then(res => alert(res.message)).catch(console.log)
    }


    console.log(data)

    return (
        <div className={styles.addFormWrapper}>
            <form onSubmit={handleSubmit}>
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

export default AwardAdd;