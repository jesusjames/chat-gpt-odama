import classNames from 'classnames';
import React, { HTMLAttributes, ReactNode, memo } from 'react'

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode | JSX.Element | string;
    /** background gray content */
    bgGray?: boolean;
    /** remove borders rounded */
    noRounded?: boolean;
}

const CardContent = ({
    children,
    className,
    bgGray = false,
    noRounded = false,
    ...restOfProps
}: CardContentProps) => {
    const classes = classNames('relative mx-[-21px] mb-[-21px] px-[21px] py-[21px]', {
        'bg-white': !bgGray,
        'bg-slate-50': bgGray,
        'rounded-b-[6px]': !noRounded
    },className); 

    return (
        <div className={classes} {...restOfProps}>{children}</div>
    )
}

export default memo(CardContent)