import { memo } from 'react'
import { Card, CardContent, CardHeader } from '../../../../ui-element'
import { ItemHistory } from '../ItemHistory'

const SearchHistory = () => {
  return (
    <Card className='h-full'>
        <CardHeader>
            Historial de Búsquedas
        </CardHeader>
        <CardContent className='h-full flex flex-col gap-2'>
            <ItemHistory id='1' title='User Flow' time='Hoy, quedan 24 hs.' />
            <ItemHistory id='2' title='User Persona' time='Ayer, quedan 3 hs.' />
            <ItemHistory id='3' title='Nuevo Chat' time='Ayer, quedan 3 hs.' />
        </CardContent>
    </Card>
  )
}

export default memo(SearchHistory)