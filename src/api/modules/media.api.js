import privateClient from '../client/private.client'
import publicClient from '../client/public.client'

const mediaEndPoint = {
    list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?page=${page}`,
    detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
    search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`
}

const mediaApi = {
    getList: async ({ mediaType, mediaCategory, page }) => {
        try {
            const response = await publicClient.get(mediaEndPoint.list({ mediaType, mediaCategory, page }))

            return { response }
        } catch (error) {
            return { error }
        }
    },
    getDetail: async ({ mediaType, mediaId }) => {
        try {
            const response = await privateClient.get(mediaEndPoint.detail({ mediaType, mediaId }))

            return { response }
        } catch (error) {
            return { error }
        }
    },
    search: async ({ mediaType, query, page }) => {
        try {
            const response = await publicClient.get(mediaEndPoint.search({ mediaType, query, page }))

            return { response }
        } catch (error) {
            return { error }
        }
    }
}

export default mediaApi
