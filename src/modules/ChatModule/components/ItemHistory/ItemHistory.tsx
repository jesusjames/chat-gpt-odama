import classNames from 'classnames';
import { HTMLAttributes, memo, useCallback, useState } from 'react'
import { CheckIcon, CloseIcon, SearchIcon, TimeIcon, TrashIcon } from '../../../../icons';

import './ItemHistory.tailwind.css';

interface ItemHistoryProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    time?: string;
    id: string;
    onDelete?: (id: string) => void;
}

const ItemHistory = ({
    title,
    time,
    className,
    id,
    onDelete,
    ...restOfProps
}: ItemHistoryProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const classes = classNames('w-full relative flex flex-row gap-2 h-[61px] rounded py-[10px] px-[20px] items-center', {
        'bg-[rgba(255,237,213,0.50)]': isSelected
    }, className);

    const handleToggleSelected = useCallback(() => {
        setIsSelected(prevIsSelected => !prevIsSelected);
    }, []);

    const handleClickConfirm = useCallback(() => {
        onDelete?.(id);
    }, [id, onDelete])

    return (
        <div className={classes} {...restOfProps} id={id}>
            <div className='flex items-center justify-center h-[35px] w-[35px] rounded-full bg-[#FDBA74]'>
                <SearchIcon />
            </div>
            <div className='flex flex-row flex-auto items-center w-auto justify-between'>
                <div className='flex flex-col'>
                    <h3 className='item-history-title'>{title}</h3>
                    <div className='flex'>
                        <TimeIcon />
                        <p className='item-history-time'>{time}</p>
                    </div>
                </div>
                {isSelected && (
                    <div className='flex flex-row gap-1'>
                        <span role='button' onClick={handleClickConfirm}><CheckIcon /></span>
                        <span role='button' onClick={handleToggleSelected}><CloseIcon /></span>
                    </div>
                )}
                {!isSelected && <span role='button' onClick={handleToggleSelected   }><TrashIcon /></span>}
            </div>
        </div>
    )
}

export default memo(ItemHistory)