import privateClient from '../client/private.client'

const reviewEndPoint = {
    create: '/reviews',
    list: '/reviews',
    remove: ({ reviewId }) => `/reviews/${reviewId}`
}

const reviewApi = {
    create: async ({ content, mediaType, mediaId, mediaTitle, mediaPoster }) => {
        try {
            const response = await privateClient.post(reviewEndPoint.create, {
                content,
                mediaType,
                mediaId,
                mediaTitle,
                mediaPoster
            })

            return { response }
        } catch (error) {
            return { error }
        }
    },
    getList: async () => {
        try {
            const response = await privateClient.get(reviewEndPoint.list)

            return { response }
        } catch (error) {
            return { error }
        }
    },
    remove: async ({ reviewId }) => {
        try {
            const response = await privateClient.delete(reviewEndPoint.remove({ reviewId }))

            return { response }
        } catch (error) {
            return { error }
        }
    }
}

export default reviewApi
