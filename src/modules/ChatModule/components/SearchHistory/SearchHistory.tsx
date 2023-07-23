import { memo } from 'react'
import { Card, CardContent, CardHeader } from '../../../../ui-element'

type Props = {}

const SearchHistory = (props: Props) => {
  return (
    <Card className='h-full'>
        <CardHeader>
            Historial de Búsquedas
        </CardHeader>
        <CardContent className='h-full'>
            history
        </CardContent>
    </Card>
  )
}

export default memo(SearchHistory)