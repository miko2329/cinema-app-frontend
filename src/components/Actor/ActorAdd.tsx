import React, {useState} from 'react';
import {baseApiUrl, PUT} from "../../utils/api.ts";

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

const ActorAdd = () => {

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
        <form onSubmit={handleSubmit}>
            <label htmlFor={"firstName"}>First name:</label>
            <input id={"firstName"} name={"firstName"} type="text"/>
            <label htmlFor={"lastName"}>Last name:</label>
            <input id={"lastName"} name={"lastName"} type="text"/>
            <label htmlFor="birthDate">Birth date:</label>
            <input id={"birthDate"} name={"birthDate"} type="date"/>
            <label htmlFor="deathDate">Death date:</label>
            <input id={"deathDate"} name={"deathDate"} type="date"/>
            <select name="countryAttr" id="countryAttr" defaultValue={options[0].value} onChange={(e : React.ChangeEvent<HTMLSelectElement>) => {
                console.log(e.target.value)
                setCountryAttr(options.find((option) => option.value === e.target.value) || null)
            }}>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
            <input type={countryAttr?.value === "countryId" ? "number" : "text"} id={countryAttr?.value} name={countryAttr?.value}/>
            <button>Submit</button>
        </form>
    );
};

export default ActorAdd;