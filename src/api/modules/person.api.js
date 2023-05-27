import publicClient from '../client/public.client'

const personEndPoint = {
    detail: ({ personId }) => `/person/${personId}`,
    medias: ({ personId }) => `/person/${personId}/medias`
}

const personApi = {
    detail: async ({ personId }) => {
        try {
            const response = await publicClient.get(personEndPoint.detail({ personId }))

            return { response }
        } catch (error) {
            return { error }
        }
    },
    remove: async ({ reviewId }) => {
        try {
            const response = await publicClient.get(personEndPoint.medias({ reviewId }))

            return { response }
        } catch (error) {
            return { error }
        }
    }
}

export default personApi
