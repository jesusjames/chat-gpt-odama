import { useCallback } from 'react'
import { Input } from '../../../../ui-element'
import { useNavigate } from 'react-router-dom';

const Config = () => {

    const navigate = useNavigate();

    const handleActionInput = useCallback((apiKey: string) => {
        if(apiKey.length > 0) {
            localStorage.setItem('apiKey', apiKey);
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className='flex w-full justify-center px-4 py-8'>
            <div className='w-full sm:w-[400px]'>
                <Input onActionButton={handleActionInput} placeholder='Escriba su ApiKey'  />
            </div>
        </div>
    )
}

export default Config