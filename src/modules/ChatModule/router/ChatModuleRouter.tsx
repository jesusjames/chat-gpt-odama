import { Route, Routes } from "react-router-dom"
import { ChatLayout } from "../layouts"
import { PATHS } from "../../../constants"
import { Config, Home } from "../pages"

export const ChatModuleRouter = () => {
  return (
    <Routes>
        <Route element={<ChatLayout />} path={`${PATHS.CHAT}`}>
            <Route index element={<Config />} />
            <Route path='/chat' element={<Home />} />
        </Route>
    </Routes>
  )
}