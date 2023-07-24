import { request } from "../utils/request";
import { IChatGptServices } from "./interfaces/IChatGptServices";
import { CompletionResponse, GetChatResponseParams } from "./types";

export class ChatGptServices implements IChatGptServices {
    async getChatResponse({ message, system = '' }: GetChatResponseParams): Promise<CompletionResponse | string> {
        const endpoint = '/chat/completions';
        const data = {
            model: "gpt-3.5-turbo",
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
            console.error('Error getChatResponse', error);
            return (error as Error).message;
        }
    }
}