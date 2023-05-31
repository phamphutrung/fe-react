import privateClient from '../client/private.client'
import publicClient from '../client/public.client'

const userEndPoint = {
    signUp: 'user/register',
    signIn: 'user/login',
    getInfo: 'user/info',
    updatePassword: 'user/update-password'
}

const userApi = {
    signIn: async ({ username, password }) => {
        try {
            const response = await publicClient.post(userEndPoint.signIn, { username, password })

            return { response }
        } catch (error) {
            return { error }
        }
    },

    signUp: async ({ username, password, confirmPassword, displayName }) => {
        try {
            const response = await publicClient.post(userEndPoint.signUp, {
                username,
                password,
                confirmPassword,
                displayName
            })

            return { response }
        } catch (error) {
            return { error }
        }
    },
    getInfo: async () => {
        try {
            const response = await privateClient.get(userEndPoint.getInfo)

            return { response }
        } catch (error) {
            return { error }
        }
    },
    updatePassword: async ({ password, newPassword, confirmPassword }) => {
        try {
            const response = await privateClient.put(userEndPoint.updatePassword, {
                password,
                newPassword,
                confirmPassword
            })

            return { response }
        } catch (error) {
            return { error }
        }
    }
}

export default userApi
