import { request } from "../utils/request";
import { IChatGptServices } from "./interfaces/IChatGptServices";
import { CompletionResponse, GetChatResponseParams } from "./types";

export class ChatGptServices implements IChatGptServices {
    async getChatResponse({ message, system = '' }: GetChatResponseParams): Promise<CompletionResponse | string> {
        const endpoint = '/chat/completions';
        const data = {
            model: "gpt-4",
            messages: [
                {role: "system", content: system},
                {role: "user", content: message}
            ]
          };

        try {
            const response: CompletionResponse = await request(endpoint, {
                method: 'POST',
                body: JSON.stringify(data)
            });

            return response;
        } catch(error) {
            console.error('Error getModels', error);
            return (error as Error).message;
        }
    }
    
    async getModels(): Promise<unknown> {
        const endpoint = '/models';

        try {
            const response =  request(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response;
        } catch(error) {
            console.log('Error getModels', error);
        }
    }
}