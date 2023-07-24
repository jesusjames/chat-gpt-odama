import { memo, useEffect, useRef, useState } from 'react';
interface ChatMessageAnimationProps {
    text: string;
}
const ChatMessageAnimation = ({ text }: ChatMessageAnimationProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
          if (index < text.length && ref.current) {
            ref.current.innerHTML += text[index];
            index++;
          } else {
            clearInterval(intervalId);
          }
        }, 50); 
    
        return () => {
          clearInterval(intervalId);
        };
      }, [text]);

    return <div className='w-full relative h-auto' ref={ref} />;
}

export default memo(ChatMessageAnimation);