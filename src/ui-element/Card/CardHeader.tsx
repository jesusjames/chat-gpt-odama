import classNames from 'classnames';
import { HTMLAttributes, ReactNode, memo } from 'react'

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode | JSX.Element | string;
    /** makes the header not stick to the edge of the card */
    withSeparateSides?: boolean;
}

const CardHeader = ({
    children,
    withSeparateSides = false,
    className
}: CardHeaderProps) => {
    const classesCardHeader = classNames('relative border-b pb-[21px] bg-white', {
        'mx-[-21px] px-[21px]': !withSeparateSides
    }, className);

    return (
        <div className={classesCardHeader}>{children}</div>
    )
}

export default memo(CardHeader)