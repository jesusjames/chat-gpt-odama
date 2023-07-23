import {
    Context,
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useMemo,
    useState,
  } from 'react';


  interface StateContext {
    hiddenSidebarIsActive: boolean;
  }
  
  interface MutationContext {
    setHiddenSidebarIsActive: Dispatch<SetStateAction<boolean>>;
  }
  
  interface SideBarProviderProps {
    children: ReactNode;
  }
  
  const StateSideBarContext = createContext<StateContext | undefined>(undefined);
  const MutationSideBarContext = createContext<MutationContext | undefined>(undefined);
  
  const SideBarProvider = ({ children }: SideBarProviderProps) => {
    const [hiddenSidebarIsActive, setHiddenSidebarIsActive] = useState(false);
    
  
    const memoizedMutations: MutationContext = useMemo<MutationContext>(
      () => ({ setHiddenSidebarIsActive }),
      [setHiddenSidebarIsActive]
    );
  
    const state: StateContext = {
        hiddenSidebarIsActive
    };
  
    return (
      <MutationSideBarContext.Provider value={memoizedMutations}>
        <StateSideBarContext.Provider value={state}>
          {children}
        </StateSideBarContext.Provider>
      </MutationSideBarContext.Provider>
    );
  };
  
  export const useStateSideBarContext = (): StateContext =>
    useGetContext<StateContext>(StateSideBarContext);
  
  export const useMutationSideBarContext = (): MutationContext =>
    useGetContext<MutationContext>(MutationSideBarContext);
  
  const useGetContext = <T,>(contextName: Context<T | undefined>): T => {
    const context = useContext<T | undefined>(contextName);
    if (!context) {
      throw new Error('SideBarProvider is required');
    }
    return context;
  };
  
  export default SideBarProvider;
  