import { useSelector } from 'react-redux'
import Logo from './Logo'

const AuthModal = () => {
    const { authModal } = useSelector((state) => state.authModal)

    return <>{authModal && <Logo />}</>
}

export default AuthModal
