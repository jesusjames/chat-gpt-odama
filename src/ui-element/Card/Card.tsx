import classNames from 'classnames';
import { memo, HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode | JSX.Element | string;
    /** Card without shadows */
    noShadow?: boolean;
    /** Card without border */
    noBorder?: boolean;
}

const Card = ({
    children,
    noShadow = false,
    noBorder = false,
    className,
    ...restOfProps
}: CardProps) => {
    const classesCard = classNames('w-full flex flex-col rounded-lg bg-white relative p-[21px]' , {
        'border': !noBorder,
        'shadow-[0_0_6px_0_rgba(46,58,90,0.09)]': !noShadow,
    }, className);

    return (
        <div className={classesCard} {...restOfProps}>{children}</div>
    )
}

export default memo(Card)