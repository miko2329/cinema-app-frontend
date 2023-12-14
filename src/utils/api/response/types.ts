export type Message = {
    message: string
}

export type AwardType = {
    id: number | null,
    name: string
}

export type CountryType = {
    id: number | null,
    isoCode: string,
    name: string
}

export type PersonType = {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string | null;
    deathDate: string | null;
    imageUrl: string;
    country: CountryType
    activity: {
        id: number;
        name: string;
    };
};