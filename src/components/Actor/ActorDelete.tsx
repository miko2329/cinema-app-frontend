import React from 'react';
import {baseApiUrl, PATCH, PUT, DELETE} from "../../utils/api.ts";

const ActorDelete = () => {

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = (document.getElementById("id") as HTMLInputElement).value

        DELETE(`${baseApiUrl}/actor/delete/${id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Id:</label>
            <input type="number" id={"id"} name={"id"}/>
            <button>Delete</button>
        </form>
    );
};

export default ActorDelete;