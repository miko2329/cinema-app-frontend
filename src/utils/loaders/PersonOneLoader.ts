import {PersonType} from "../api/response/types.ts";
import {basePersonApiUrl, GET} from "../api/api.ts";

export const personOneLoader = async ({params}: any) => {
    const person: PersonType = await GET(`${basePersonApiUrl}/get?attr=id&value=${params.personId}`);

    return person;
}