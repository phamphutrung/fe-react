import uiConfigs from '@/api/config/ui.configs'
import { themeModes } from '@/configs/theme.config'
import { setThemeMode } from '@/redux/features/themeModeSlice'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'
import menuConfigs from '@/api/config/menu.config'
import { Link } from 'react-router-dom'
import { DarkModeOutlined, WbSunnyOutlined } from '@mui/icons-material'

// eslint-disable-next-line react/prop-types
const SideBar = ({ open, toggleSidebar }) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    const { appState } = useSelector((state) => state.appState)
    const { themeMode } = useSelector((state) => state.themeMode)

    const sideBarWidth = uiConfigs.size.sideBarWidth

    const onSwitchTheme = () => {
        const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark
        dispatch(setThemeMode(theme))
    }

    const drawer = (
        <>
            <Toolbar sx={{ paddingY: '20px', color: 'text.primary' }}>
                <Stack width='100%' direction={'row'} justifyContent={'center'}>
                    <Logo />
                </Stack>
            </Toolbar>
            <List sx={{ paddingX: '30px' }}>
                <Typography variant='h6' marginBottom='20px'>
                    MENU
                </Typography>
                {menuConfigs.main.map((item, index) => (
                    <ListItemButton
                        key={index}
                        sx={{
                            borderRadius: '10px',
                            marginY: 1,
                            backgroundColor: appState.includes(item.state) ? 'primary.main' : 'unset'
                        }}
                        component={Link}
                        to={item.path}
                        onClick={() => toggleSidebar(false)}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={<Typography textTransform={'uppercase'}>{item.display}</Typography>}
                        />
                    </ListItemButton>
                ))}

                {user && (
                    <>
                        <Typography variant='h6' marginBottom='20px'>
                            PERSONAl
                        </Typography>
                        {menuConfigs.user.map((item, index) => (
                            <ListItemButton
                                key={index}
                                sx={{
                                    borderRadius: '10px',
                                    marginY: 1,
                                    backgroundColor: appState.includes(item.state) ? 'primary.main' : 'unset'
                                }}
                                component={Link}
                                to={item.path}
                                onClick={() => toggleSidebar(false)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={<Typography textTransform={'uppercase'}>{item.display}</Typography>}
                                />
                            </ListItemButton>
                        ))}
                    </>
                )}
                <Typography variant='h6' marginBottom='20px'>
                    THEME
                </Typography>
                <ListItemButton onClick={onSwitchTheme}>
                    <ListItemIcon>
                        {themeMode === themeModes.dark && <DarkModeOutlined />}
                        {themeMode === themeModes.light && <WbSunnyOutlined />}
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography textTransform={'uppercase'}>
                                {themeMode === themeModes.dark ? 'dark mode' : 'light mode'}
                            </Typography>
                        }
                    />
                </ListItemButton>
            </List>
        </>
    )

    return (
        <Drawer
            open={open}
            onClose={() => toggleSidebar(false)}
            sx={{ '& .MuiDrawer-Paper': { boxSizing: 'border-box', width: sideBarWidth, borderRight: '0px' } }}
        >
            {drawer}
        </Drawer>
    )
}

export default SideBar
