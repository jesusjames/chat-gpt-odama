import { memo, useMemo } from 'react'
import { Button, Card, CardContent, CardFooter, CardHeader, Input } from '../../../../ui-element'
import { MagicIcon, PlusIcon } from '../../../../icons';

type Props = {}

const Chat = (props: Props) => {
    const button = useMemo(() => {
        return(
            <Button icon={<PlusIcon />} >Nueva Búsqueda</Button>
        )
    }, []);

    return (
        <Card noShadow className='h-full'>
            <CardHeader className='!pt-0 pb-3 -mt-2' button={button}>
                OdamaChat
            </CardHeader>
            <CardContent bgGray className='h-full'>
                <div className='flex flex-col gap-5'>
                    <Card>
                        <CardHeader color='secondary' withSeparateSides>
                            Ana Clara
                        </CardHeader>
                        <CardContent>
                            Necesito los archivos que te pedí ayer.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader color='tertiary' withSeparateSides noDivide >
                            OdamaChat ...
                        </CardHeader>
                    </Card>
                </div>
            </CardContent>
            <CardFooter>
                <Input placeholder='Insertar Prompt' iconTwo={<MagicIcon />} />
            </CardFooter>
        </Card>
    )
}

export default memo(Chat)