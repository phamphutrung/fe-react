import {
    HomeOutlined,
    SlideshowOutlined,
    LiveTvOutlined,
    FavoriteBorderOutlined,
    SearchOffOutlined,
    RateReviewOutlined,
    LockResetOutlined
} from '@mui/icons-material'

const main = [
    {
        display: 'home',
        path: '/',
        icon: <HomeOutlined />,
        state: 'home'
    },
    {
        display: 'movies',
        path: '/movie',
        icon: <SlideshowOutlined />,
        state: 'movie'
    },
    {
        display: 'tv series',
        path: '/tv',
        icon: <LiveTvOutlined />,
        state: 'hometv'
    },
    {
        display: 'search',
        path: '/search',
        icon: <SearchOffOutlined />,
        state: 'search'
    }
]

const user = [
    {
        display: 'favorite',
        path: '/favorite',
        icon: <FavoriteBorderOutlined />,
        state: 'favorite'
    },
    {
        display: 'reviews',
        path: '/reviews',
        icon: <RateReviewOutlined />,
        state: 'reviews'
    },
    {
        display: 'password update',
        path: '/password-update',
        icon: <LockResetOutlined />,
        state: 'password.update'
    }
]

const menuConfigs = { main, user }

export default menuConfigs
