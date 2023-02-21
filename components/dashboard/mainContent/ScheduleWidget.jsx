import { Circle } from "@mui/icons-material"
import { Box, Stack, Typography, Divider, Grid } from "@mui/material"
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
                    borderRadius: '5px',
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
                spacing={0}
                sx={{
                    mx: 3,
                    my: 1,
                    px: 2,
                }}
            >
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-time'
                            className={cabin.className}
                            variant='h6'
                        >
                            8:00 AM - 9:00 AM
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-event'
                            className={cabin.className}
                            variant='h6'
                        >
                            MATH 345 1A Lecture 
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-location'
                            className={cabin.className}
                            variant='h6'
                        >
                            Odin Hall R# 305
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid
                    container
                    spacing={3}
                    sx={{
                        borderRadius: '5px',
                    }}
                >
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-time'
                            className={cabin.className}
                            variant='h6'
                        >
                            10:00 AM - 11:00 AM
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-event'
                            className={cabin.className}
                            variant='h6'
                        >
                            CS 247 1A Lecture 
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-location'
                            className={cabin.className}
                            variant='h6'
                        >
                            Norris Center R# 101
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-time'
                            className={cabin.className}
                            variant='h6'
                        >
                            2:00 PM - 3:00 PM
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-event'
                            className={cabin.className}
                            variant='h6'
                        >
                            MATH 230 1A Lecture 
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-location'
                            className={cabin.className}
                            variant='h6'
                        >
                            Odin Hall R# 302
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-time'
                            className={cabin.className}
                            variant='h6'
                        >
                            5:00 PM - 6:00 PM
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-event'
                            className={cabin.className}
                            variant='h6'
                        >
                            CHEM 121 2A Lecture 
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <Typography
                            id='schedule-location'
                            className={cabin.className}
                            variant='h6'
                        >
                            Norris Center R# 204
                        </Typography>
                    </Grid>
                </Grid>
            </Stack>
            <Divider />
        </Box>
    )
}

export default ScheduleWidget
