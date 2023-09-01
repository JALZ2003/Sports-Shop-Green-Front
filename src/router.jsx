import { createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            { path:'/', element: <Home /> },
            { path:'/signin', element: <Signin /> },
            { path:'/signup', element: <Signup /> },
        ]
    }
])

export default router