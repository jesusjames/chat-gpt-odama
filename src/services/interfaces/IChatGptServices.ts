import { CompletionResponse, GetChatResponseParams } from "../types";

export interface IChatGptServices {
    getChatResponse(query: GetChatResponseParams): Promise<CompletionResponse | string>;
    getModels(): Promise<unknown>;
}
