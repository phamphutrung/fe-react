import tmdbConfigs from '@/api/config/tmdb.config'
import uiConfigs from '@/api/config/ui.configs'
import Container from '@/components/common/Container'
import HeroSlice from '@/components/common/HeroSlide'
import MediaSlide from '@/components/common/MediaSlide'
import { Box } from '@mui/material'

const Home = () => {
    return (
        <>
            <HeroSlice mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />
            <Box marginTop='-4rem' sx={{ ...uiConfigs.style.mainContent }}>
                <Container header='popular movies'>
                    <MediaSlide
                        mediaType={tmdbConfigs.mediaType.movie}
                        mediaCategory={tmdbConfigs.mediaCategory.popular}
                    ></MediaSlide>
                </Container>

                <Container header='popular movies'>
                    <MediaSlide
                        mediaType={tmdbConfigs.mediaType.tv}
                        mediaCategory={tmdbConfigs.mediaCategory.popular}
                    ></MediaSlide>
                </Container>

                <Container header='top rated movies'>
                    <MediaSlide
                        mediaType={tmdbConfigs.mediaType.movie}
                        mediaCategory={tmdbConfigs.mediaCategory.top_rated}
                    ></MediaSlide>
                </Container>

                <Container header='top rated series'>
                    <MediaSlide
                        mediaType={tmdbConfigs.mediaType.tv}
                        mediaCategory={tmdbConfigs.mediaCategory.top_rated}
                    ></MediaSlide>
                </Container>
            </Box>
        </>
    )
}

export default Home
