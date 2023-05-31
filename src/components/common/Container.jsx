import { Box, Stack, Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Container = ({ header, children }) => {
    return (
        <Box
            sx={{
                marginX: 'auto',
                color: 'text.primary'
            }}
        >
            <Stack spacing={4}>
                {header && (
                    <Box
                        sx={{
                            position: 'relative',
                            paddingX: { xs: '20px', md: '0' },
                            maxWidth: '1366px',
                            width: '100%',
                            marginX: 'auto',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: { xs: '20px', md: '0' },
                                top: '10-0%',
                                height: '50px',
                                width: '100px',
                                backgroundColor: 'primary.main'
                            }
                        }}
                    >
                        <Typography variant='h5' fontWeight='700'>
                            {header}
                        </Typography>
                    </Box>
                )}
                {children}
            </Stack>
        </Box>
    )
}

export default Container
