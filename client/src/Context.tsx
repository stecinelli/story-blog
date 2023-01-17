import { createContext, useContext } from "react"
import { IContext } from "./Type"

export const MainContext = createContext<IContext>({
    copy: 'Hello World', 
    setCopy: () => {},
    })

export const useMainContext = () => useContext(MainContext)