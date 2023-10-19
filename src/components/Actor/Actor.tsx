import React, {useState} from 'react';
import {baseApiUrl, PUT} from "../../utils/api.ts";
import "./Actor.module.css"
import ActorAdd from "./ActorAdd.tsx";
import ActorUpdate from "./ActorUpdate.tsx";
import ActorDelete from "./ActorDelete.tsx";
import ActorRead from "./ActorRead.tsx";

type OptionItem = {
    label: string,
    value: string
}

const options: OptionItem[] = [
    {
        label: "By id",
        value: "countryId"
    },
    {
        label: "By name",
        value: "countryName"
    },
    {
        label: "By ISO code",
        value: "countryIsoCode"
    }
];

const Actor = () => {
    
    const [countryAttr, setCountryAttr] = useState<OptionItem | null>(options[0]);
    
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            firstName : (document.getElementById("firstName") as HTMLInputElement).value,
            lastName : (document.getElementById("lastName") as HTMLInputElement).value,
            birthDate : (document.getElementById("birthDate") as HTMLInputElement).value,
            deathDate : (document.getElementById("deathDate") as HTMLInputElement).value,
            countryAttr: (document.getElementById("countryAttr") as HTMLSelectElement).value,
            countryAttrValue: (document.getElementById(`${countryAttr?.value}`) as HTMLSelectElement).value,
        }

        console.log(PUT(`${baseApiUrl}/actor/addWithCountry`, JSON.stringify(formData)));
    }
    
    return (
        <div>
            <h1>Actor CRUD</h1>
            <h2>Add actor</h2>
            <ActorAdd/>
            <h2>Update actor</h2>
            <ActorUpdate/>
            <h2>Delete actor</h2>
            <ActorDelete/>
            <h2>Read actor</h2>
            <ActorRead/>
        </div>
    );
};

export default Actor;