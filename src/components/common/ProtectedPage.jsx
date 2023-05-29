import { setAuthModal } from '@/redux/features/authModalSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const ProtectedPage = ({ children }) => {
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(setAuthModal(!user))
    }, [dispatch, user])

    return user ? children : null
}
ProtectedPage.propTypes = {
    children: PropTypes.node.isRequired
}
export default ProtectedPage
