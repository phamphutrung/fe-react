import HomePage from '@/pages/Home'
import PersonDetail from '@/pages/PersonDetail'
import ReviewList from '@/pages/ReviewList'
import PasswordUpdate from '@/pages/PasswordUpdate'
import MediaSearch from '@/pages/MediaSearch'
import MediaList from '@/pages/MediaList'
import MediaDetail from '@/pages/MediaDetail'
import FavoriteList from '@/pages/FavoriteList'
import ProtectedPage from '@/components/common/ProtectedPage'

const routesGen = {
    home: '/',
    mediaSearch: '/search',
    favoriteList: '/favorites',
    reviewList: '/reviews',
    passwordUpdate: 'password-update',
    mediaList: (type) => `/${type}`,
    mediaDetail: (type, id) => `/${type}/${id}`,
    person: (id) => `/person/${id}`
}

const routes = [
    {
        index: true,
        element: <HomePage />,
        state: 'home'
    },
    {
        path: '/person/:personId',
        element: <PersonDetail />,
        state: 'person.detail'
    },
    {
        path: '/search',
        element: <MediaSearch />,
        state: 'search'
    },
    {
        path: '/password-update',
        element: (
            <ProtectedPage>
                <PasswordUpdate />
            </ProtectedPage>
        ),
        state: 'password.update'
    },
    {
        path: '/favorites',
        element: (
            <ProtectedPage>
                <FavoriteList />
            </ProtectedPage>
        ),
        state: 'favorites'
    },
    {
        path: '/reviews',
        element: (
            <ProtectedPage>
                <ReviewList />
            </ProtectedPage>
        ),
        state: 'reviews'
    },
    {
        path: '/:mediaType',
        element: <MediaList />
    },
    {
        path: '/:mediaType/:mediaId',
        element: <MediaDetail />
    }
]

export default routes
