import { Chat, SearchHistory, SystemCard } from '../../components'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='relative h-[calc(100%-93px)] w-full bg-slate-50 p-9'>
        <div className='flex flex-row h-full w-full gap-5'>
            <div className='flex flex-col gap-5 basis-1/3'>
                <SystemCard 
                    title='Sistema' 
                    description='Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.' 
                />
                <SearchHistory />
            </div>
            <div className='basis-2/3'>
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default Home