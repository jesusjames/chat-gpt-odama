import classNames from 'classnames';
import { HTMLAttributes, ReactElement, ReactNode, isValidElement, memo } from 'react'

import './CardHeader.tailwind.css';
import { Button, ButtonProps } from '../Button';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode | JSX.Element | string;
    /** makes the header not stick to the edge of the card */
    withSeparateSides?: boolean;
    /** change color header title type string */
    color?: 'primary' | 'secondary' | 'tertiary'; 
    /** Receives a Button component ui-element */
    button?: ReactElement<ButtonProps>
    /** remove divide */
    noDivide?: boolean;
}

const CardHeader = ({
    children,
    withSeparateSides = false,
    color = 'primary',
    className,
    button,
    noDivide,
    ...restOfProps
}: CardHeaderProps) => {
    if (button && (!isValidElement(button) || button.type !== Button)) {
        throw new Error('The "button" prop must be a Button ui-element');
    }

    const classesCardHeader = classNames('relative bg-white flex justify-between items-center', {
        'mx-[-21px] px-[21px]': !withSeparateSides,
        'border-b pb-[21px]': !noDivide
    }, className);

    const classesTitle = classNames('card-header-title', {
        [`card-header--color-${color}`]: color
    });

    return (
        <div className={classesCardHeader} {...restOfProps}>
            {typeof children === 'string' ? <h5 className={classesTitle}>{children}</h5> : children}
            {button}
        </div>
    )
}

export default memo(CardHeader)