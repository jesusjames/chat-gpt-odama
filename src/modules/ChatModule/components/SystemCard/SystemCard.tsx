import classNames from 'classnames';
import { memo } from 'react'
import { Card, Input } from '../../../../ui-element';

import './SystemCard.tailwind.css';

interface SystemCardProps {
    title: string;
    description: string;
    onActionButton?: (value: string) => void;
}

const SystemCard = ({
    title, description, onActionButton
}: SystemCardProps) => {
    const classes = classNames('flex flex-col gap-2');
    const classesTitle = classNames('title');
    const classesDescription = classNames('description');

    return (
        <Card>
            <div className={classes}>
                {/* TO DO: general Text component ui-element */}
                <h3 className={classesTitle}>{title}</h3>
                <p className={classesDescription}>{description}</p>
                <Input className='mt-3' placeholder='Escribe un prompt' />
            </div>
        </Card>
    )
}

export default memo(SystemCard)