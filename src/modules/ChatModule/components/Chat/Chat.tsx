import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import { Button, Card, CardContent, CardFooter, CardHeader, Input } from '../../../../ui-element'
import { MagicIcon, PlusIcon } from '../../../../icons';
import { RootState, useAppDispatch } from '../../../../store/store';
import { fetchChatResponse } from '../../redux/Chat/ChatThunk';
import { AIResponse } from '../AIResponse';
import { ChatActions } from '../../redux/Chat';
import { UserQuestion } from '../UserQuestion';

const Chat = () => {
    const [promptValue, setPromptValue] = useState('');
    const { chatHistory, systemMessage } = useSelector((state: RootState) => state.chat);

    const dispatch = useAppDispatch();

    const handleChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPromptValue(value);
    }, []);

    const handleActionSendMessage = useCallback((message: string) => {
        dispatch(ChatActions.chatHistoryCreate({message}));
        dispatch(fetchChatResponse({ message, systemMessage}));
        setPromptValue('');
    }, [dispatch, systemMessage]);


    const button = useMemo(() => {
        return(
            <Button icon={<PlusIcon />} >Nueva Búsqueda</Button>
        )
    }, []);

    return (
        <Card noShadow className='h-full'>
            <CardHeader className='!pt-0 pb-3 -mt-2' button={button}>
                OdamaChat
            </CardHeader>
            <CardContent bgGray className='h-full overflow-y-scroll'>
                <div className='flex flex-col gap-5'>
                    {
                        chatHistory.map((chat, index) => {
                            const { user, message, isLoading, created } = chat;
                            if(user === 'AI'){
                                return <AIResponse message={message} isLoading={isLoading} key={index} createdUnix={created}/>
                                
                            } else {
                                return <UserQuestion message={message} createdUnix={created} key={index}/>;
                            }
                        })
                    }
                    
                </div>
            </CardContent>
            <CardFooter>
                <Input 
                    value={promptValue}
                    onChange={handleChangeInput}
                    placeholder='Insertar Prompt'
                    onActionButton={handleActionSendMessage} 
                    iconTwo={<MagicIcon />} 
                />
            </CardFooter>
        </Card>
    )
}

export default memo(Chat)