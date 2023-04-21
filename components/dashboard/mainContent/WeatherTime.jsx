import { Box, Divider, Stack, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'
import Image from "next/image" 
import Sunny from 'images/sunny.svg'

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const WeatherTime = () => {
    return (
        <Stack
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            divider={<Divider orientation="vertical" variant='middle' sx={{bgcolor:'#000'}} />}
            sx={{
                bgcolor: 'widget.background',
                p: 2,
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
            }}
        >
            <Stack
                id="weather-subsection"
                spacing={0}
                justifyContent='center'
                alignItems='center'
                sx={{
                    width: '100%',
                }}
            >
                <Typography
                    variant="h3"
                >
                    80°
                </Typography>
                <Typography
                    variant="body1"
                    className={cabin400.className}
                    sx={{
                        my: 0,
                    }}
                >
                    Los Angeles, CA
                </Typography>
            </Stack>
            <Stack
                id="time-subsection"
                spacing={0}
                justifyContent='center'
                alignItems='center'
                sx={{
                    width: '100%',
                    mx: 1,
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h3"
                >
                    2:31:03 PM
                </Typography>
                <Typography
                    variant="body1"
                    className={cabin400.className}
                    sx={{
                        my: 0,
                    }}
                >
                    Pacific Standard Time
                </Typography>
            </Stack>
        </Stack>
    )
}

export default WeatherTime
