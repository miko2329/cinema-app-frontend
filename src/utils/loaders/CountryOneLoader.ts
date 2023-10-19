import {CountryType} from "../../components/Country/All/CountryAll.tsx";
import {baseCountryApiUrl, GET} from "../api.ts";

export const countryOneLoader = async ({params}: any) => {
    const country: CountryType = await GET(`${baseCountryApiUrl}/country/get?attr=id&value=${params.countryId}`);

    return country;
}