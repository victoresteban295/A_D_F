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
            sx={{
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                width: '250px'
            }}
        >
            <Stack
                id='calendar-date'
                sx={{
                    width: '100px',
                    alignSelf: 'center',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    my: 2,
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
            >
                
            </Stack>
        </Stack>
    )
}

export default EventsWidget
