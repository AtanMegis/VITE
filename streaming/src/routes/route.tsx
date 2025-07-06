import Login from '@pages/Login'
import Page404 from '@pages/Page404'
import { Route, Routes, useLocation } from 'react-router-dom'
import PrivateRoute from './private-route'
import Page401 from '@pages/Page401'

// Public Routes Component
const PublicRoutes = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/401" element={<Page401 />} />
        <Route path="/404" element={<Page404 />} />
    </Routes>
)

// Private Routes Component
const PrivateRoutes = () => (
    <PrivateRoute>
        <Routes>{/* <Route path="/" element={<Guides />} /> */}</Routes>
    </PrivateRoute>
)

// Main App Router
const AppRouter = () => {
    const location = useLocation()
    const isPublicPage = ['/login', '/401', '/404'].includes(location.pathname)

    return isPublicPage ? <PublicRoutes /> : <PrivateRoutes />
}

export default AppRouter
