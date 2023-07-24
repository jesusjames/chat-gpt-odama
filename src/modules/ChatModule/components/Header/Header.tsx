import { memo, useCallback } from 'react'
import { Button } from '../../../../ui-element';
import { ChevronLeft, Settings, SideBarIcon } from '../../../../icons';
import { useMutationSideBarContext, useStateSideBarContext } from '../../contexts/SideBarContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { hiddenSidebarIsActive } = useStateSideBarContext();
  const { setHiddenSidebarIsActive } = useMutationSideBarContext();

  const navigate = useNavigate();

  const handleClickHiddenSidebar = useCallback(() => {
    setHiddenSidebarIsActive(prevState => !prevState);
  }, [setHiddenSidebarIsActive]);

  const handleBackPage = useCallback(() => {
    navigate(-1);
  }, [navigate]) 

  return (
    <div className='h-[93px] w-full bg-[#F97316] shadow-md px-8 py-4'>
      <div className='flex flex-row justify-between w-full h-full items-center'>
        <div className='flex flex-row gap-3 justify-center'>
          <Button 
            outline 
            color='secondary' 
            icon={<ChevronLeft />} 
            size='large'
            onClick={handleBackPage}
          >
            Atrás
          </Button>
          <Button 
            outline 
            color='secondary' 
            icon={<SideBarIcon />} 
            size='large' 
            active={hiddenSidebarIsActive} 
            onClick={handleClickHiddenSidebar}
          />
        </div>
        <Button outline color='secondary' icon={<Settings />} size='large' />
      </div>
    </div>
  )
}

export default memo(Header);