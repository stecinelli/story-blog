import { createContext, useContext } from "react"
import { IContext } from "./types"

export const MainContext = createContext<IContext>({
    sections: [''],
    postsList: {
        posts:[
            {
                id:1,
                title:'title1',
                body:'body1',
                userId:1,
                tags:['tag1','tag2'],
                reactions:1
            },
        ],
        total:150,
        skip:0,
        limit:30
    },
    setPostsList: ()=>{},
    activeSection: '', 
    setActiveSection: ()=>{},

})

export const useMainContext = () => useContext(MainContext)