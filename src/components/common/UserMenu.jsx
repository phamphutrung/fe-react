import menuConfigs from '@/api/config/menu.config'
import { setAuthModal } from '@/redux/features/authModalSlice'
import { setUser } from '@/redux/features/userSlice'
import { LogoutOutlined } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserMenu = () => {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const toggleMenu = (e) => setAnchorEl(e.currentTarget)

    const handleSignIn = () => {
        dispatch(setUser(null))
        dispatch(setAuthModal(true))
    }

    return (
        <>
            {user && (
                <>
                    <Typography variant='h6' sx={{ cursor: 'pointer', userSelect: 'none' }} onClick={toggleMenu}>
                        {user.displayName}
                    </Typography>
                    <Menu
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={() => setAnchorEl(null)}
                        PaperProps={{ sx: { padding: 0 } }}
                    >
                        {menuConfigs.user.map((item, index) => (
                            <ListItemButton key={index} component={Link} to={item.path}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={<Typography textTransform='uppercase'>{item.display}</Typography>}
                                />
                            </ListItemButton>
                        ))}
                        <ListItemButton sx={{ borderRadius: '10px' }} onClick={() => handleSignIn()}>
                            <ListItemIcon>
                                <LogoutOutlined />
                            </ListItemIcon>
                            <ListItemText
                                disableTypography
                                primary={<Typography textTransform={'uppercase'}>sign out</Typography>}
                            />
                        </ListItemButton>
                    </Menu>
                </>
            )}
        </>
    )
}

export default UserMenu
