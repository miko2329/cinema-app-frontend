import {baseCountryApiUrl, GET} from "../api/api.ts";
import {CountryType} from "../api/response/types.ts";

export const countryOneLoader = async ({params}: any) => {
    const country: CountryType = await GET(`${baseCountryApiUrl}/get?attr=id&value=${params.countryId}`);

    return country;
}