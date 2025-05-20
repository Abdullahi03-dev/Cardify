

import {createContext,useContext,useState,ReactNode} from 'react'

interface NavContextType{
    activeTab:string;
    setActiveTab:(tab:string)=>void
}

const NavContext=createContext<NavContextType | undefined>(undefined)

export const NavProvider=({children}:{children:ReactNode})=>{
    const [activeTab,setActiveTab]=useState("home")

    return(
        <NavContext.Provider value={{activeTab,setActiveTab}}>
        {children}
        </NavContext.Provider>
    )
}


export const useNav=()=>{
    const context=useContext(NavContext)
    if(!context){
        throw new Error('BOTTOM NAV MUST BE USED WITHIN A NAV PROVIDER')
    }
    return context
}

