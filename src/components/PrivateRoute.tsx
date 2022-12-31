import { ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { useUser } from '../hooks/useUser'



export default function PrivateRoute({ children }: { children: ReactElement }) {
    const router = useRouter()
    const user = {
        name:'kim',
        age:24,
        isAdmin:true,
    }

    const adminRoutes = ['/settings/info']
    const userRoutes = ['/isr']

    const pathIsAdminProtected = adminRoutes.indexOf(router.pathname) !== -1
    const pathIsUserProtected = userRoutes.indexOf(router.pathname) !== -1

    useEffect(() => {
        if (!user && pathIsUserProtected) {
            router.push('/')
        }
        if (!user?.isAdmin && pathIsAdminProtected) {
            router.push('/')
        }
    }, [user, router, pathIsUserProtected, pathIsAdminProtected])

    return children
}
