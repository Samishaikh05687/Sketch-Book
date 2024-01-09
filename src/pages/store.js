import {configureStore} from '@reduxjs/toolkit'
import MenuReducer from '@/src/slice/menuslice'
import ToolboxReducer from '@/src/slice/toolboxslice'


export const store = configureStore ({
    reducer:{
        menu: MenuReducer,
        Toolbox: ToolboxReducer
        
    }
})