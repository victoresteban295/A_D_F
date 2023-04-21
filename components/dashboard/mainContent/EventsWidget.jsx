import { Box, Divider, Typography, Stack } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const EventsWidget = () => {
    return (
        <Stack
            id='events-widget'                  
            spacing={2}
            sx={{
                bgcolor: 'widget.background',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                /* width: '250px', */
                width: {xs: 'auto', md: '250px'},
                mx: {xs: 1, md: 0},
                mb: {xs: 1, md: 0},
            }}
        >
            <Stack
                id='calendar-date'
                sx={{
                    width: '100px',
                    alignSelf: 'center',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    /* my: 2, */
                    mt: 2,
                    mx: 1,
                }}
            >
                <Box
                    id='red-topbox'
                    sx={{
                        bgcolor: '#e63462',
                        display: 'flex',
                        justifyContent: 'center',
                        borderRadius: '5px 5px 0 0'
                    }}
                >
                    <Typography
                        variant='h6'
                        className={cabin700.className}
                    >
                        MAR
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant='h3'
                        className={cabin400.className}
                    >
                        19
                    </Typography>
                </Box>
            </Stack>
            <Divider variant='middle' />
            <Stack
                id="events-stack"
                sx={{
                    boxShadow: '1px 1px 4px 2px #cecece',
                    bgcolor: '#f76f8e',
                    width: '90%',
                    px: 2,
                    alignSelf: 'center',
                }}
            >
                <Typography
                    variant='body1'
                    className={cabin700.className}
                >
                    MATH 345 Lecture
                </Typography> 
                <Typography
                    variant='body2'
                    className={cabin400.className}
                >
                    Today, 8:00 AM
                </Typography> 
            </Stack>
            <Stack
                id="events-stack"
                sx={{
                    boxShadow: '1px 1px 4px 2px #cecece',
                    bgcolor: '#85c7f2',
                    width: '90%',
                    px: 2,
                    alignSelf: 'center',
                }}
            >
                <Typography
                    variant='body1'
                    className={cabin700.className}
                >
                    CS 247 Lecture
                </Typography> 
                <Typography
                    variant='body2'
                    className={cabin400.className}
                >
                    Today, 10:00 AM
                </Typography> 
            </Stack>
            <Stack
                id="events-stack"
                sx={{
                    boxShadow: '1px 1px 4px 2px #cecece',
                    bgcolor: '#9ba2ff',
                    width: '90%',
                    px: 2,
                    alignSelf: 'center',
                }}
            >
                <Typography
                    variant='body1'
                    className={cabin700.className}
                >
                    MATH 230 Lecture
                </Typography> 
                <Typography
                    variant='body2'
                    className={cabin400.className}
                >
                    Today, 2:00 PM
                </Typography> 
            </Stack>
            <Stack
                id="events-stack"
                sx={{
                    boxShadow: '1px 1px 4px 2px #cecece',
                    bgcolor: '#87c38f',
                    width: '90%',
                    px: 2,
                    alignSelf: 'center',
                }}
            >
                <Typography
                    variant='body1'
                    className={cabin700.className}
                >
                    CHEM 121 Lecture
                </Typography> 
                <Typography
                    variant='body2'
                    className={cabin400.className}
                >
                    Today, 5:00 PM
                </Typography> 
            </Stack>
        </Stack>
    )
}

export default EventsWidget
