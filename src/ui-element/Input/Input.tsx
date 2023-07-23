import classNames from 'classnames';
import { InputHTMLAttributes, KeyboardEvent, memo, useCallback, useRef } from 'react'

import './Input.tailwind.css';
import { SendIcon } from '../../icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconOne?: JSX.Element;
    iconTwo?: JSX.Element;
    onActionButton?: (value: string) => void;
}

const Input = ({
    children, 
    className,
    iconOne = <SendIcon />,
    iconTwo,
    onActionButton,
    ...restOfProps
}: InputProps) => {
    const classes = classNames('input', className);

    const refInput = useRef<HTMLInputElement>(null);

    const handleAction = useCallback(() => {
        if(refInput.current) {
            const input = refInput.current;
            onActionButton?.(input.value);
        }
    }, [onActionButton]);

    const keyDownEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && refInput.current) {
            const input = refInput.current;
            onActionButton?.(input.value);
        }
    }, [onActionButton]);

    return (
        <div className='relative'>
            <input className={classes} {...restOfProps} onKeyDown={keyDownEnter} ref={refInput}/>
            <div className='absolute top-2.5 right-0 flex flex-row gap-2 mr-2'>
                {iconOne && (
                    <span role='button' onClick={handleAction}>{iconOne}</span>
                )}
                {iconTwo}
            </div>
            
        </div>
    )
}

export default memo(Input);