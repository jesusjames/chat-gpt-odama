import React, { memo, useMemo } from 'react'
import { Card, CardContent, CardHeader } from '../../../../ui-element'
import { ChatMessageAnimation } from '../ChatMessageAnimation'
import moment from 'moment';

interface UserQuestionProps {
    message: string;
    createdUnix: number;
}

const UserQuestion = ({
    message,
    createdUnix
}: UserQuestionProps) => {
    
    const title = useMemo(() => {
        const hour = moment.unix(createdUnix).format("h:mm a");
        return(
            <div className='flex gap-2 items-center'>
                <p className='card-header-title card-header--color-secondary'>User</p>
                <p className='time'>{hour}</p>
            </div>
        )
    }, [createdUnix])

    return (
        <Card>
            <CardHeader color='secondary' withSeparateSides>
                {title}
            </CardHeader>
            <CardContent>
                <ChatMessageAnimation text={message}/>
            </CardContent>
        </Card>
    )
}

export default memo(UserQuestion)