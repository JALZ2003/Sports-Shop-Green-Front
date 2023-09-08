import { createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Admin from './layouts/Admin'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Shop from './pages/Shop'
import Panel from './pages/Panel'
import AdminProducts from './pages/AdminProducts'
import AdminCategories from './pages/AdminCategories'
import AdminUsers from './pages/AdminUsers'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/shop', element: <Shop /> }
        ]
    }, { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
    {
        path: '/',
        element: <Admin />,
        children: [
            { path: '/panel', element: <Panel /> },
            { path: '/adminusers', element: <AdminUsers /> },
            { path: '/adminproducts', element: <AdminProducts /> },
            { path: '/admincategories', element: <AdminCategories /> },
        ]
    }
])

export default router