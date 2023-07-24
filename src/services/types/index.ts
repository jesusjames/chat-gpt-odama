export interface GetChatResponseParams { message: string; system?: string }

export interface Choice {
    index: number;
    message : {
        role: 'system' | 'user' | 'assistant' | 'function';
        content: string;
    };
    finish_reason: string;
}
  
export interface CompletionResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    choices: Choice[];
}