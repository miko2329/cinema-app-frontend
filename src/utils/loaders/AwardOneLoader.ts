import {AwardType} from "../api/response/types.ts";
import {baseAwardApiUrl, GET} from "../api/api.ts";

export const awardOneLoader = async ({params}: any) => {
    const award: AwardType = await GET(`${baseAwardApiUrl}/get?attr=id&value=${params.awardId}`);

    return award;
}