import { Box, Divider, Grid, Typography, Stack } from "@mui/material"
import { Cabin } from '@next/font/google'
import ScheduleWidget from "./ScheduleWidget"
import ClassWidget from "./ClassWidget"
import RightContent from "./RightContent"
import WeatherTime from "./WeatherTime"

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const UpdateMainContent = () => {
    return (
        <Box
            id='main-content'
            sx={{
                maxWidth: '1500px',
                flexGrow: '1',
                flexShrink: '1',
                display: 'flex',
                my: 2,
            }}
        >
            <Grid
                container
                spacing={1}
                sx={{
                    maxWidth: '1000px',
                    mx: 2,
                }}
            >
                <Grid
                    id='events-widget-grid'
                    item
                    xs={12}
                    md={4}
                    sx={{
                        boxShadow: '1px 1px 4px 2px #cecece',
                        borderRadius: '5px',
                    }}
                >
                    <Stack
                        id='events-widget'                  
                    >
                        <Stack
                            id='calendar-date'
                            sx={{
                                width: '100px',
                                alignSelf: 'center',
                                boxShadow: '1px 1px 4px 2px #cecece',
                                borderRadius: '5px',
                                my: 2,
                            }}
                        >
                            <Box
                                id='red-topbox'
                                sx={{
                                    bgcolor: 'red',
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
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                >
                    <WeatherTime /> 
                </Grid>
            </Grid>
            <RightContent />
        </Box>
    )
}

export default UpdateMainContent
