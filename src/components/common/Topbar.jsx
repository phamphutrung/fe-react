import { useDispatch, useSelector } from 'react-redux'
import { DarkModeOutlined, Menu, WbSunnyOutlined } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Stack, Toolbar, useScrollTrigger } from '@mui/material'
import { cloneElement, useState } from 'react'
import { themeModes } from '@/configs/theme.config'
import { setThemeMode } from '@/redux/features/themeModeSlice'
import Logo from './Logo'
import menuConfigs from '@/api/config/menu.config'
import { Link } from 'react-router-dom'
import UserMenu from './UserMenu'
import { setAuthModal } from '@/redux/features/authModalSlice'
import SideBar from './Sidebar'
import AuthModal from './AuthModal'

const ScrollAppBar = ({ children, window }) => {
    const { themeMode } = useSelector((state) => state.themeMode)

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
        target: window ? window() : undefined
    })

    return cloneElement(children, {
        sx: {
            color: trigger ? 'text.primary' : themeMode === themeModes.dark ? 'primary.contrastText' : 'text.primary',
            backgroundColor: trigger
                ? 'background.paper'
                : themeMode === themeModes.dark
                ? 'transparent'
                : 'background.paper'
        }
    })
}

const Topbar = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    const { appState } = useSelector((state) => state.appState)
    const { themeMode } = useSelector((state) => state.themeMode)

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const onSwitchTheme = () => {
        const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark
        dispatch(setThemeMode(theme))
    }
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    return (
        <>
            <AuthModal />
            <SideBar open={sidebarOpen} toggleSidebar={toggleSidebar} />
            <ScrollAppBar>
                <AppBar elevation={0} sx={{ zIndex: 9999 }}>
                    <Toolbar sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Stack direction='row' spacing={1} alignItems='center'>
                            <IconButton color='inherit' sx={{ mr: 2, display: { md: 'none' } }} onClick={toggleSidebar}>
                                <Menu />
                            </IconButton>
                            <Box sx={{ display: { xs: 'inline-block', md: 'none' } }}>
                                <Logo />
                            </Box>
                            {/* start main menu */}
                            <Box flexGrow={1} alignItems='center' display={{ xs: 'none', md: 'flex' }}>
                                <Box sx={{ marginRight: '30px' }}>
                                    <Logo />
                                </Box>
                                <Box>
                                    {menuConfigs.main.map((item, index) => (
                                        <Button
                                            key={index}
                                            sx={{
                                                color: appState.includes(item.state)
                                                    ? 'primary.contrastText'
                                                    : 'inherit'
                                            }}
                                            component={Link}
                                            to={item.path}
                                            variant={appState.includes(item.state) ? 'contained' : 'text'}
                                        >
                                            {item.display}
                                        </Button>
                                    ))}
                                    <IconButton sx={{ color: 'inherit' }} onClick={onSwitchTheme}>
                                        {themeMode === themeModes.dark ? <DarkModeOutlined /> : <WbSunnyOutlined />}
                                    </IconButton>
                                </Box>
                            </Box>
                        </Stack>
                        {/* end main menu */}

                        {/* start user menu */}
                        <Stack spacing={3} direction='row' alignItems={'end'}>
                            {!user && (
                                <Button variant='contained' onClick={() => dispatch(setAuthModal(true))}>
                                    Sign In
                                </Button>
                            )}
                        </Stack>
                        {user && <UserMenu />}
                        {/* end user menu */}
                    </Toolbar>
                </AppBar>
            </ScrollAppBar>
        </>
    )
}

export default Topbar
