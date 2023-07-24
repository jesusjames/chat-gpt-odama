import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchChatResponse } from "./ChatThunk";
import moment from "moment";

interface ChatHistory {
    id: string;
    title?: string;
    isLoading: boolean;
    user: 'user' | 'AI',
    message: string;
    created: number;
}

type History = Array<ChatHistory[]>;

export interface StateChat {
    isLoading: boolean;
    systemMessage: string;
    chatHistory: ChatHistory[];
    history: History;
    error?: string;
    idCounter: number;
}

export interface ChatPayload {
    message: string;
}

// INITIAL STATE
export const initialState: StateChat = {
    isLoading: false,
    systemMessage: '',
    history: JSON.parse(localStorage.getItem('history') ?? '[]'),
    error: undefined,
    chatHistory: [],
    idCounter: 0
};

// ACTIONS CREATORS AND REDUCER
const { actions, reducer } = createSlice({
    name: 'Chat',
    initialState,
    reducers: {
        historyFetchInit: (state) => {
            state.isLoading = true;
        },
        setSystem: (state, action: PayloadAction<string>) => {
            state.systemMessage = action.payload;
        },
        chatHistoryCreate: (state, action: PayloadAction<ChatPayload>) => {
            state.chatHistory.push({
                id: `chat_${state.idCounter}`,
                isLoading: false,
                user: 'user',
                message: action.payload.message,
                created: moment().unix(),
            });
            state.idCounter += 1;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchChatResponse.pending, (state) => {
            state.chatHistory.push({
                id: `chat_${state.idCounter}`,
                isLoading: true,
                user: 'AI',
                message: '',
                created: 0,
            });
            state.idCounter += 1;
        })
        .addCase(fetchChatResponse.fulfilled, (state, action) => {
            const message = (typeof action.payload === 'string') ? 
                action.payload : 
                action.payload.choices[0].message.content;

            const created = (typeof action.payload === 'string') ? 
                0 :
                action.payload.created;

            const lastChatIndex = state.chatHistory.length - 1;
            const chatHistoryCopy = JSON.parse(JSON.stringify(state.chatHistory));
            chatHistoryCopy[lastChatIndex].message = message;
            chatHistoryCopy[lastChatIndex].created = created;
            chatHistoryCopy[lastChatIndex].isLoading = false;
            state.chatHistory = chatHistoryCopy;
            return state;
        })
        .addCase(fetchChatResponse.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
});

export const ChatReducer = reducer;
export const ChatActions = actions;