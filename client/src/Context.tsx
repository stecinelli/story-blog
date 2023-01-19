import { createContext, useContext } from "react"
import { IContext } from "./types"

export const MainContext = createContext<IContext>({
    sections: [''],
    postsList: [],
    setPostsList: ()=>{},
    activeSection: '', 
    setActiveSection: ()=>{},
})

export const useMainContext = () => useContext(MainContext)