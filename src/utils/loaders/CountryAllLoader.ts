import {baseCountryApiUrl, GET} from "../api/api.ts";
import {CountryType} from "../api/response/types.ts";

export const countryAllLoader = async () => {
    const countries: CountryType[] = await GET(`${baseCountryApiUrl}/all`);

    return countries;
}