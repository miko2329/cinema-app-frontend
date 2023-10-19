import React, {useEffect, useState} from 'react';
import {baseApiUrl, GET, PATCH, PUT} from "../../utils/api.ts";
import ReactDOM from "react-dom/client";

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

type ActorData = {
    firstName: string,
    lastName: string,
    birthDate: string,
    deathDate: string,
    country?: {
        id: string,
        name: string,
        isoCode: string
    },
    countryAttr?: string
    countryAttrValue?: string
}

const ActorUpdate = () => {

    const [countryAttr, setCountryAttr] = useState<OptionItem | null>(options[0]);

    const [data, setData] = useState<ActorData>({
        firstName: "",
        lastName: "",
        birthDate: "",
        deathDate: "",
        country: {
            id: "",
            name: "",
            isoCode: ""
        }
    })

    useEffect( () => {
        GET(`${baseApiUrl}/actor/get?attr=id&value=2`).then((result) => setData(result as ActorData))
    }, [])

    const getCountryValue = () => {
        if(countryAttr?.value === "countryId") return data.country?.id
        else if(countryAttr?.value === "countryName") return data.country?.name
        else if(countryAttr?.value === "countryIsoCode") return data.country?.isoCode
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dataToSend = {...data}

        delete dataToSend.country;

        console.log(PATCH(`${baseApiUrl}/actor/updateWithCountry`, JSON.stringify(dataToSend)));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={"firstName"}>First name:</label>
            <input id={"firstName"} name={"firstName"} type="text" value={data?.firstName} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                const newData = {...data}
                newData.firstName = e.target.value
                setData(newData)
            }
            }/>
            <label htmlFor={"lastName"}>Last name:</label>
            <input id={"lastName"} name={"lastName"} type="text" value={data?.lastName} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                const newData = {...data}
                newData.lastName = e.target.value
                setData(newData)
            }
            }/>
            <label htmlFor="birthDate">Birth date:</label>
            <input id={"birthDate"} name={"birthDate"} type="date" value={data?.birthDate} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                const newData = {...data}
                newData.birthDate = e.target.value
                setData(newData)
            }
            }/>
            <label htmlFor="deathDate">Death date:</label>
            <input id={"deathDate"} name={"deathDate"} type="date" value={data?.deathDate} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                const newData = {...data}
                newData.deathDate = e.target.value
                setData(newData)
            }
            }/>
            <select name="countryAttr" id="countryAttr" defaultValue={options[0].value} onChange={(e : React.ChangeEvent<HTMLSelectElement>) => {
                console.log(e.target.value)
                setCountryAttr(options.find((option) => option.value === e.target.value) || null)
                const newData = {...data}
                newData.countryAttr = e.target.value
                setData(newData)
            }}>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
            <input type={countryAttr?.value === "countryId" ? "number" : "text"} id={countryAttr?.value} name={countryAttr?.value} value={getCountryValue()}/>
            <button>Submit</button>
        </form>
    );
};

export default ActorUpdate;