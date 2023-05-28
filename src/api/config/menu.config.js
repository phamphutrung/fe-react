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
        dislay: 'home',
        path: '/',
        icon: <HomeOutlined />,
        state: 'home'
    },
    {
        dislay: 'movies',
        path: '/movie',
        icon: <SlideshowOutlined />,
        state: 'movie'
    },
    {
        dislay: 'tv series',
        path: '/tv',
        icon: <LiveTvOutlined />,
        state: 'hometv'
    },
    {
        dislay: 'search',
        path: '/search',
        icon: <SearchOffOutlined />,
        state: 'search'
    }
]

const user = [
    {
        dislay: 'favorite',
        path: '/favorite',
        icon: <FavoriteBorderOutlined />,
        state: 'favorite'
    },
    {
        dislay: 'reviews',
        path: '/reviews',
        icon: <RateReviewOutlined />,
        state: 'reviews'
    },
    {
        dislay: 'password update',
        path: '/password-update',
        icon: <LockResetOutlined />,
        state: 'password.update'
    }
]

const menuConfigs = { main, user }

export default menuConfigs
