import { Route, Routes } from "react-router-dom"
import { ChatLayout } from "../layouts"
import { PATHS } from "../../../constants"

export const ChatModuleRouter = () => {
  return (
    <Routes>
        <Route element={<ChatLayout />} path={PATHS.CHAT}>
            <Route index element={<h1>outlets</h1>} />
        </Route>
    </Routes>
  )
}