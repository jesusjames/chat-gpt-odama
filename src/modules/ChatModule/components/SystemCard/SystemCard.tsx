import classNames from 'classnames';
import { ChangeEvent, memo, useCallback } from 'react'
import { Card, Input } from '../../../../ui-element';

import './SystemCard.tailwind.css';

interface SystemCardProps {
    title: string;
    description: string;
    onActionButton: (value: string) => void;
    onChangeInput: (value: string) => void;
}

const SystemCard = ({
    title, description, onActionButton, onChangeInput
}: SystemCardProps) => {
    const classes = classNames('flex flex-col gap-2');
    const classesTitle = classNames('title');
    const classesDescription = classNames('description');

    const handleChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onChangeInput?.(value);
    }, [onChangeInput]);

    return (
        <Card>
            <div className={classes}>
                {/* TO DO: general Text component ui-element */}
                <h3 className={classesTitle}>{title}</h3>
                <p className={classesDescription}>{description}</p>
                <Input className='mt-3' placeholder='Escribe un prompt' onActionButton={onActionButton} 
                    onChange={handleChangeInput} 
                />
            </div>
        </Card>
    )
}

export default memo(SystemCard)