export type PersonAddType = {
    id: number | null;
    firstName: string;
    lastName: string;
    birthDate: string | null;
    deathDate: string | null;
    imageUrl: string;
    countryId: number;
    activity: {
        id: number;
        name: string;
    };
}

export type SigninType = {
    email: string;
    password: string
}

export type SignupType = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
}