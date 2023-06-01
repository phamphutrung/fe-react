import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import GlobalLoading from '../common/GlobalLoading'
import Footer from '../common/Footer'
import Topbar from '../common/Topbar'
import AuthModal from '../common/AuthModal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import userApi from '@/api/modules/user.api'
import { setListFavorites, setUser } from '@/redux/features/userSlice'
import favoriteApi from '@/api/modules/favorite.api'
import { toast } from 'react-toastify'

const MainLayout = () => {
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.user)

    useEffect(() => {
        const authUser = async () => {
            const { response, error } = await userApi.getInfo()
            if (response) dispatch(setUser(response))
            if (error) dispatch(setUser(null))
        }
        authUser()
    }, [dispatch])

    useEffect(() => {
        const getFavorites = async () => {
            const { response, error } = await favoriteApi.getList()

            if (response) dispatch(setListFavorites(response))
            if (error) toast.error(error.message)
        }

        if (user) getFavorites()
        if (!user) dispatch(setListFavorites([]))
    }, [user, dispatch])

    return (
        <>
            <GlobalLoading />
            <AuthModal />
            <Box display='flex'>
                <Topbar />
                <Box
                    component='main'
                    flexGrow={1}
                    overflow='hidden'
                    minHeight='100vh'
                    sx={{ backgroundColor: 'background.paper' }}
                >
                    <Outlet></Outlet>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default MainLayout
