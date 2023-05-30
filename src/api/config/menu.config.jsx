import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined'

const main = [
    {
        display: 'home',
        path: '/',
        icon: <HomeOutlinedIcon />,
        state: 'home'
    },
    {
        display: 'movies',
        path: '/movie',
        icon: <SlideshowOutlinedIcon />,
        state: 'movie'
    },
    {
        display: 'tv series',
        path: '/tv',
        icon: <LiveTvOutlinedIcon />,
        state: 'hometv'
    },
    {
        display: 'search',
        path: '/search',
        icon: <SearchOffOutlinedIcon />,
        state: 'search'
    }
]

const user = [
    {
        display: 'favorite',
        path: '/favorite',
        icon: <FavoriteBorderOutlinedIcon />,
        state: 'favorite'
    },
    {
        display: 'reviews',
        path: '/reviews',
        icon: <RateReviewOutlinedIcon />,
        state: 'reviews'
    },
    {
        display: 'password update',
        path: '/password-update',
        icon: <LockResetOutlinedIcon />,
        state: 'password.update'
    }
]

const menuConfigs = { main, user }

export default menuConfigs
