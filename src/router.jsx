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
import Cart from './pages/Cart'
import Details from './pages/Details'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Shop /> },
            { path: '/cart', element: <Cart /> },
            { path: '/details', element: <Details />},

        ]
    }, { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
    {
        path: '/',
        element: <Admin />,
        children: [
            { path: '/panel', element: <Panel /> },
            { path: '/adminusers', element: <AdminUsers /> },
            { path: '/adminproducts/:page', element: <AdminProducts /> },
            { path: '/admincategories', element: <AdminCategories /> },
        ]
    }
])

export default router