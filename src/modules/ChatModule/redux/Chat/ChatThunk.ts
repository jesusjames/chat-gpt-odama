import { ChatGptServices } from '../../../../services/ChatGptServices';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { CompletionResponse } from '../../../../services/types';

const service = new ChatGptServices();

export const fetchChatResponse = createAsyncThunk<
    CompletionResponse | string,
    { message: string; systemMessage: string },
    {}
>(
    'Chat/fetchChatResponse',
    async ({ message, systemMessage }) => {
        const response = service.getChatResponse({
            message,
            system: systemMessage
        });

        return response;
    }
)