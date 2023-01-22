import MainRoot from '../pages/MainRoot'
import Home from '../pages/Home/Home'
import Artist from '../pages/Artist/Artist'
import Add from '../pages/Add/Add'

export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                 path:'',
                 element:<Home/>
            },
            {
                path:'artist',
                element:<Artist/>
            },
            {
                path:'add',
                element:<Add/>
            }
        ]
    }
]