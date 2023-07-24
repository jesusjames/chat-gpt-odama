import { Route, Routes } from "react-router-dom"
import { ChatLayout } from "../layouts"
import { PATHS } from "../../../constants"
import { Config, Home } from "../pages"

export const ChatModuleRouter = () => {
  return (
    <Routes>
        <Route element={<ChatLayout />} path={`${PATHS.CHAT}`}>
            <Route index element={<Home />} />
            <Route path='/config' element={<Config />} />
        </Route>
    </Routes>
  )
}