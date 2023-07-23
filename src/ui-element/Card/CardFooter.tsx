import classNames from 'classnames'
import { HTMLAttributes, ReactNode, memo } from 'react'

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode | JSX.Element | string
}

const CardFooter = ({
    children,
    className,
    ...restOfProps
}: CardFooterProps) => {
    const classes = classNames('relative mt-[21px] border-t mx-[-21px] px-[21px] pt-[21px]')
    return (
        <div className={classes} {...restOfProps}>{children}</div>
    )
}

export default memo(CardFooter)