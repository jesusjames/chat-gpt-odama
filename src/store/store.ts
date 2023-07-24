import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ChatReducer } from '../modules/ChatModule/redux/Chat';

export const store = configureStore({
    reducer:{
        chat: ChatReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState  = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
