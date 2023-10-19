import {baseCountryApiUrl, GET} from "../api.ts";
import {CountryType} from "../../components/Country/All/CountryAll.tsx";

export const countryAllLoader = async () => {
    const countries: CountryType[] = await GET(`${baseCountryApiUrl}/country/all`);

    return countries;
}