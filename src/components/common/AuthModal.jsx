import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './Logo'
import { setAuthModal } from '@/redux/features/authModalSlice'
import { Box, Modal } from '@mui/material'
import { useTheme } from '@emotion/react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const actionState = {
    signIn: 'signIn',
    signUp: 'signUp'
}

const AuthModal = () => {
    const dispatch = useDispatch()
    const { authModalOpen } = useSelector((state) => state.authModal)

    const [action, setAction] = useState(actionState.signIn)

    const handleClose = () => dispatch(setAuthModal(false))
    const switchAuthState = (state) => setAction(state)

    useEffect(() => {
        if (authModalOpen) setAction(actionState.signIn)
    }, [authModalOpen])

    const color = useTheme().palette.primary.main

    return (
        <Modal open={authModalOpen} onClose={handleClose}>
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    maxWidth: '550px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: 4,
                    outline: `1px solid ${color}`,
                    borderRadius: 3
                }}
            >
                <Box sx={{ padding: 4, boxShadow: 24, backgroundColor: 'background.paper' }}>
                    <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <Logo />
                    </Box>
                    {action === actionState.signIn && (
                        <SignInForm switchAuthState={() => switchAuthState(actionState.signUp)} />
                    )}
                    {action === actionState.signUp && (
                        <SignUpForm switchAuthState={() => switchAuthState(actionState.signIn)} />
                    )}
                </Box>
            </Box>
        </Modal>
    )
}

export default AuthModal
