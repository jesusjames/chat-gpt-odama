import { ReactElement, ReactNode, memo } from 'react'
import { Card, CardContent, CardHeader } from '../../../../ui-element';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import moment from 'moment';

interface AIResponseProps {
    message: string;
    isLoading: boolean;
    createdUnix: number;
}

interface CodeProps {
    node: Element;
    inline: boolean;
    className: string;
    children: ReactNode;
    [key: string]: any;
}

const components = {
    code: ({node, inline, className, children, ...props}: any) => {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match
        ? <SyntaxHighlighter style={solarizedlight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
        : <code className={className} {...props} />
    }
}

const AIResponse = ({ message = '', isLoading, createdUnix }: AIResponseProps) => {
    const hour = moment.unix(createdUnix).format("h:mm a");

    return (
        <Card>
            <CardHeader color='tertiary' withSeparateSides noDivide={isLoading} >
                <div className='flex gap-2 items-center'>
                    <p className='card-header-title card-header--color-tertiary'>OdamaChat</p>
                    {isLoading && <div className="flex">
                        <div className="flex space-x-2">
                            <div className="w-1 h-1 rounded-full bg-orange-500 animate-bounce"></div>
                            <div className="w-1 h-1 rounded-full bg-orange-500 animate-bounce"></div>
                            <div className="w-1 h-1 rounded-full bg-orange-500 animate-bounce"></div>
                        </div>
                    </div>}
                    {!isLoading && <p className='time'>{hour}</p>}
                </div>
            </CardHeader>
            {!isLoading && (
                <CardContent>
                    <ReactMarkdown components={components} remarkPlugins={[gfm]} children={message} />
                </CardContent>
            )}
        </Card>
    )
}

export default memo(AIResponse)