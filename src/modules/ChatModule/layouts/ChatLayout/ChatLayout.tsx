import { memo } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../../components"
import SideBarProvider from "../../contexts/SideBarContext"

const ChatLayout = () => {
  return (
    <div className="h-screen w-full bg-slate-50">
      <SideBarProvider>
        <Header />
        <Outlet />
      </SideBarProvider>
    </div>
  )
}

export default memo(ChatLayout)