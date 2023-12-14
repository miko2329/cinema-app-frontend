import {PersonType} from "../api/response/types.ts";
import {basePersonApiUrl, GET} from "../api/api.ts";

export const personAllLoader = async () => {
    const people: PersonType[] = await GET(`${basePersonApiUrl}/all`);

    return people;
}
