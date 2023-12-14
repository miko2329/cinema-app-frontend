import {AwardType} from "../api/response/types.ts";
import {baseAwardApiUrl, GET} from "../api/api.ts";

export const awardAllLoader = async () => {
    const awards: AwardType[] = await GET(`${baseAwardApiUrl}/all`);

    return awards;
}
