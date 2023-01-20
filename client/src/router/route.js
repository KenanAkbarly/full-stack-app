import MainRoot from '../pages/MainRoot'
import Home from '../pages/Home/Home'
import Artist from '../pages/Artist/Artist'
export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        childiren:[
            {
                 path:'',
                 element:<Home/>
            },
            {
                path:'artist',
                element:<Artist/>
            }
        ]
    }
]