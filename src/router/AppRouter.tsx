import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from '../constants';
import { ChatModuleRouter } from '../modules/ChatModule';

type Props = {}

export const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Chat module */}
            <Route element={<ChatModuleRouter/>} path={`${PATHS.CHAT}/*`} />
        </Routes>
    </BrowserRouter>
  )
}