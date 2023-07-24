import { sanitize } from 'dompurify';

interface ServiceFetcherCreateParams {
    baseUrl: string;
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
        const apiKey = localStorage.getItem('apiKey') ?? process.env.REACT_APP_API_KEY ?? '';
        const options: RequestInit = {...requestOptions, 
            headers: { 
                'Content-Type': 'application/json',
                ...requestOptions.headers, 
                Authorization: `Bearer ${apiKey}` 
            } 
        };

        try{
            const res = await fetch(requestUrl(sanitize(url)), options);
            const responseStatus = res.status;

            if(isSuccessResponse(responseStatus)){
                return await res.json();
            } else {
                const responseError: {error: {message: string}} = await res.json();
                const errorMessage = responseError.error.message;
                console.log('Error', responseError)
                return errorMessage;
            }
        } catch(error){
            console.error('Error serviceFetcher', error)
        }
    }

    return serviceFetcher;
}

export default serviceFetcherCreate;