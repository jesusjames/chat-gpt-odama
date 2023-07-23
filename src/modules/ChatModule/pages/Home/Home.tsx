import classNames from 'classnames'
import { Chat, SearchHistory, SystemCard } from '../../components'
import { useStateSideBarContext } from '../../contexts/SideBarContext'

type Props = {}

const Home = (props: Props) => {
    const { hiddenSidebarIsActive } = useStateSideBarContext();

    const classesContainerParent = classNames('relative flex flex-row h-full w-full', {
        'gap-5': !hiddenSidebarIsActive
    })

    const classesContainerLeft = classNames('flex flex-col gap-5 transition-all duration-300', {
        'w-full md:w-1/2 lg:w-1/3 opacity-1 bg-white md:bg-transparent z-10': !hiddenSidebarIsActive,
        'w-0 overflow-hidden opacity-0': hiddenSidebarIsActive
    });

    const classesContainerRight = classNames('transition-all duration-300', {
        'hidden md:w-1/2 lg:w-2/3 md:block': !hiddenSidebarIsActive,
        'w-full': hiddenSidebarIsActive
    })

    return (
        <div className='relative h-[calc(100%-93px)] w-full bg-slate-50 p-9'>
            <div className={classesContainerParent}>
                <div className={classesContainerLeft}>
                    <SystemCard 
                        title='Sistema' 
                        description='Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.' 
                    />
                    <SearchHistory />
                </div>
                <div className={classesContainerRight}>
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Home