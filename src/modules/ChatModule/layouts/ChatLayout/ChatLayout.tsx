import { memo } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../../components"

const ChatLayout = () => {
  return (
    <div className="h-screen w-full bg-slate-50">
        <Header />
        <Outlet />
    </div>
  )
}

export default memo(ChatLayout)