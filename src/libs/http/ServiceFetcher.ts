import { sanitize } from 'dompurify';

interface ServiceFetcherCreateParams {
    baseUrl: string
}

const isSuccessResponse = (code: number) => code >= 200 && code < 300;

const serviceFetcherCreate = ({ baseUrl }: ServiceFetcherCreateParams) => {
    const requestUrl = (value: string) => {
        if(/(https?:\/\/)/g.test(value)) return value;
        else return `${baseUrl}${value}`;
    }

    const serviceFetcher = async(
        url: string,
        requestOptions: RequestInit
    ) => {
        const options: RequestInit = {...requestOptions, 
            headers: { 
                
                'Content-Type': 'application/json',
                ...requestOptions.headers, 
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` 
            } 
        };

        try{
            const res = await fetch(requestUrl(sanitize(url)), options);
            const responseStatus = res.status;

            if(isSuccessResponse(responseStatus)){
                return await res.json();
            } else {
                return responseStatus;
            }
        } catch(error){
            console.error('Error serviceFetcher', error)
        }
    }

    return serviceFetcher;
}

export default serviceFetcherCreate;