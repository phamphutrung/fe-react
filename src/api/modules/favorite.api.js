import privateClient from '../client/private.client'

const favoriteEndPoint = {
    list: 'user/favorites',
    create: 'user/favorites',
    remove: ({ mediaId }) => `user/favorites/${mediaId}`
}

const favoriteApi = {
    getList: async () => {
        try {
            const response = await privateClient.get(favoriteEndPoint.list)

            return { response }
        } catch (error) {
            return { error }
        }
    },
    create: async ({ mediaType, mediaId, mediaTitle, mediaPoster, mediaRate }) => {
        try {
            const response = await privateClient.post(
                favoriteEndPoint.create({ mediaType, mediaId, mediaTitle, mediaPoster, mediaRate })
            )

            return { response }
        } catch (error) {
            return { error }
        }
    },
    remove: async ({ favoriteId }) => {
        try {
            const response = await privateClient.delete(favoriteEndPoint.remove({ favoriteId }))

            return { response }
        } catch (error) {
            return { error }
        }
    }
}

export default favoriteApi
