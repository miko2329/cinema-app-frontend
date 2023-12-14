import React from 'react';
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {baseAwardApiUrl, DELETE} from "../../../utils/api/api.ts";
import styles from "./AwardOne.module.css";
import {AwardType} from "../../../utils/api/response/types.ts";
import {useAppSelector} from "../../../hooks";
import {userSelector} from "../../../store/slices/userSlice.ts";

const AwardOne = () => {
    const award = useLoaderData() as AwardType;
    const navigate = useNavigate();
    const userResponse = useAppSelector(userSelector).userResponse

    const onClickDelete = () => {
        DELETE(`${baseAwardApiUrl}/delete/${award.id}`).then(res => {
            alert(res.message)
            navigate('/award/all')
        }).catch(console.log)
    }

    return (
        <div className={styles.awardWrapper}>
            <p className={styles.awardInfo}>Name: {award.name}</p>
            {userResponse.role === "ADMIN" && <>
                <Link className={`${styles.edit} link`} to={`/award/${award.id}/edit`}>Edit</Link>
                <button onClick={onClickDelete} className={styles.button}>Delete</button>
            </>}
        </div>
    );
};

export default AwardOne;