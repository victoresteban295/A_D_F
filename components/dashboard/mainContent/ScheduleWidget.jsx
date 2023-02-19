import { Circle } from "@mui/icons-material"
import { Box, Stack, Typography, Divider } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const ScheduleWidget = () => {
    return (
        <Box
            id='today-schedule-widget'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '25px',
                flexGrow: '1',
                flexShrink: '1',
                m: 2,
            }}
        >
            <Box
                id="today-schedule-widget-Title"
                sx={{
                    bgcolor: 'primary.main',
                    borderRadius: '25px',
                }}
            >
                <Typography
                    variant='h6'
                    className={cabin.className}
                    sx={{
                        mx: 2,
                    }}
                >
                    Today's Schedule 
                </Typography>
            </Box>
                <Stack
                    spacing={1}
                    sx={{
                        mx: 3,
                        my: 1,
                    }}
                >
                    <Stack
                        direction='row'
                        spacing={3}
                    >
                        <Circle 
                            fontSize='small' 
                            sx={{
                                color: '#57a773',
                                alignSelf: 'center',
                            }}
                        />
                        <Typography
                            className={cabin.className}
                            variant='h5'
                        >
                            8:00 AM - 9:00 AM
                        </Typography>
                        <Typography
                            className={cabin.className}
                            variant='h5'
                        >
                            Math 345 1A Lecture 
                        </Typography>
                        <Typography
                            className={cabin.className}
                            variant='h5'
                        >
                            Odin Hall R# 305
                        </Typography>
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={3}
                    >
                        <Circle 
                            fontSize='small' 
                            sx={{
                                color: 'grey',
                                alignSelf: 'center',
                            }}
                        />
                        <Typography
                            className={cabin400.className}
                            variant='h6'
                        >
                            10:00 AM - 11:00 AM
                        </Typography>
                        <Typography
                            className={cabin400.className}
                            variant='h6'
                        >
                            CS 247 1A Lecture 
                        </Typography>
                        <Typography
                            className={cabin400.className}
                            variant='h6'
                        >
                            Norris Center R# 101
                        </Typography>
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={3}
                    >
                        <Circle 
                            fontSize='small' 
                            sx={{
                                color: 'grey',
                                alignSelf: 'center',
                            }}
                        />
                        <Typography
                            className={cabin400.className}
                            variant='h6'
                        >
                            2:00 PM - 3:00 PM
                        </Typography>
                        <Typography
                            className={cabin400.className}
                            variant='h6'
                        >
                            Math 230 1A Lecture 
                        </Typography>
                        <Typography
                            className={cabin400.className}
                            variant='h6'
                        >
                            Odin Hall R# 302
                        </Typography>
                    </Stack>
                    <Stack
                        direction='row'
                        spacing={3}
                    >
                        <Circle 
                            fontSize='small' 
                            sx={{
                                color: 'grey',
                                alignSelf: 'center',
                            }}
                        />
                        <Typography
                            className={cabin400.className}
                            variant='h6'
                        >
                            5:00 PM - 6:00 PM
                        </Typography>
                        <Typography
                            className={cabin400.className}
                            variant='h6'
                        >
                            CHEM 121 2A Lecture 
                        </Typography>
                        <Typography
                            className={cabin400.className}
                            variant='h6'
                        >
                            Norris Center R# 204
                        </Typography>
                    </Stack>
                </Stack>
        </Box>
    )
}

export default ScheduleWidget
