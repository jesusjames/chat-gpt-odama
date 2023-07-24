import { serviceFetcherCreate } from "../libs/http";

export const request = serviceFetcherCreate({ 
    baseUrl: process.env.REACT_APP_API_URL ?? '',
});