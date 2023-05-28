const uiConfigs = {
    style: {
        gradientBgImage: {
            dark: {
                backgroundImage: 'linear-gradient(to top, rgb(0,0,0,1), rgb(0,0,0,0))'
            },
            light: {
                backgroundImage: 'linear-gradient(to top, rgb(245,245,245,1), rgb(0,0,0,0))'
            }
        },
        horizontalGradientBgImage: {
            dark: {
                backgroundImage: 'linear-gradient(to right, rgb(0,0,0,1), rgb(0,0,0,0))'
            },
            light: {
                backgroundImage: 'linear-gradient(to right, rgb(245,245,245,1), rgb(0,0,0,0))'
            }
        },
        typoLines: (lines, textAlign) => ({
            textAlign: textAlign || 'justify',
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: lines
        }),
        mainContent: {
            maxWith: '1366px',
            margin: 'auto',
            padding: 2
        },
        backgroundImage: (imagePath) => ({
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'darkgrey',
            backgroundImage: `url(${imagePath})`
        })
    },
    size: {
        sideBarWith: '300px',
        contentMaxWith: '1366px'
    }
}

export default uiConfigs
