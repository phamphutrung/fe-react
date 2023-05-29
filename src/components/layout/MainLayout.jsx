import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            {/* loading global  */}
            {/* modal login */}

            <Box display='flex'>
                {/* header */}

                {/* main */}
                <Box component='main' flexGrow={1} overflow='hidden' minHeight='100vh'>
                    <Outlet></Outlet>
                </Box>
                {/* main */}
            </Box>
            {/* footer */}
        </>
    )
}

export default MainLayout
