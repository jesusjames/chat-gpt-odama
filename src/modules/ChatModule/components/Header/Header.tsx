import { memo } from 'react'
import { Button } from '../../../../ui-element';
import { ChevronLeft, Settings, SideBarIcon } from '../../../../icons';

const Header = () => {
  return (
    <div className='h-[93px] w-full bg-[#F97316] shadow-md px-8 py-4'>
      <div className='flex flex-row justify-between w-full h-full items-center'>
        <div className='flex flex-row gap-3 justify-center'>
          <Button outline color='secondary' icon={<ChevronLeft />} size='large'>Atrás</Button>
          <Button outline color='secondary' icon={<SideBarIcon />} size='large' active={false} />
        </div>
        <Button outline color='secondary' icon={<Settings />} size='large' />
      </div>
    </div>
  )
}

export default memo(Header);