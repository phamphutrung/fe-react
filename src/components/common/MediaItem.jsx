/* eslint-disable react/prop-types */
import tmdbConfigs from '@/api/config/tmdb.config'
import uiConfigs from '@/api/config/ui.configs'
import { routesGen } from '@/routes/router'
import favoriteUtils from '@/utils/favorite.utils'
import { Favorite } from '@mui/icons-material'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function MediaItem({ media, mediaType }) {
    const { listFavorites } = useSelector((state) => state.user)
    const [title, setTitle] = useState('')
    const [posterPath, setPosterPath] = useState('')
    const [releaseDate, setReleaseDate] = useState(null)
    const [rate, setRate] = useState(null)

    useEffect(() => {
        setTitle(media.title || media.name || media.mediaTitle)

        setPosterPath(
            tmdbConfigs.posterPath(media.poster_path || media.backdrop_path || media.poster || media.profile_path)
        )

        if (mediaType === tmdbConfigs.mediaType.movie) {
            setReleaseDate(media.release_date && media.release_date.split('-')[0])
        } else {
            setReleaseDate(media.first_air_date && media.first_air_date.split('-')[0])
        }

        setRate(media.vote_average || media.mediaRate)
    }, [media, mediaType])

    return (
        <Link
            to={
                mediaType !== 'people'
                    ? routesGen.mediaDetail(mediaType, media.id || media.mediaId)
                    : routesGen.person(media.id)
            }
        >
            <Box
                sx={{
                    ...uiConfigs.style.backgroundImage(posterPath),
                    paddingTop: '160%',
                    '&:hover .media-info': { opacity: 1, bottom: 0 },
                    '&:hover .media-back-drop, &:hover .media-play-btn': { opacity: 1 },
                    color: 'primary.contrastText',
                    position: 'relative'
                }}
            >
                {mediaType !== 'people' && (
                    <>
                        {favoriteUtils.check({ listFavorites, mediaId: media.id }) && (
                            <Favorite
                                color='primary'
                                sx={{ position: 'absolute', top: 2, right: 2, fontSize: '2rem' }}
                            />
                        )}
                        <Box
                            className='media-back-drop'
                            sx={{
                                opacity: { xs: 1, md: 0 },
                                content: '""',
                                transition: 'all 0.3s ease',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                backgroundImage: 'linear-gradient(to top,  rgba(0,0,0,1),  rgba(0,0,0,0))'
                            }}
                        />
                    </>
                )}
            </Box>
        </Link>
    )
}

export default MediaItem
