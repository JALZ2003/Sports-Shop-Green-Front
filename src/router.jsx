import { createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Shop from './pages/Shop'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/shop', element: <Shop /> }
        ]
    }, { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> }
    ,
])

export default router