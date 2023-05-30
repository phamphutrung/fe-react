import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import GlobalLoading from '../common/GlobalLoading'
import Footer from '../common/Footer'
import Topbar from '../common/Topbar'
import AuthModal from '../common/AuthModal'

const MainLayout = () => {
    return (
        <>
            {/* loading global  */}
            <GlobalLoading />
            {/* modal login */}

            <AuthModal />

            <Box display='flex'>
                {/* header */}
                <Topbar />
                {/* main */}
                <Box component='main' flexGrow={1} overflow='hidden' minHeight='100vh'>
                    <Outlet></Outlet>
                </Box>
                {/* main */}
            </Box>
            {/* footer */}
            <Footer />
        </>
    )
}

export default MainLayout
