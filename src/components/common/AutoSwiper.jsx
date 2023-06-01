import { Box } from '@mui/material'
import { Swiper } from 'swiper/react'

// eslint-disable-next-line react/prop-types
function AutoSwiper({ children }) {
    return (
        <Box
            sx={{
                '& .swiper-slide': {
                    width: {
                        sx: '50%',
                        sm: '35%',
                        md: '25%',
                        lg: '20%'
                    }
                }
            }}
        >
            <Swiper slidesPerView={'auto'} grabCursor={true} style={{ width: '100%', height: 'max-content' }}>
                {children}
            </Swiper>
        </Box>
    )
}

export default AutoSwiper
