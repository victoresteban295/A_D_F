import { Divider, Stack, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'

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
            sx={{mt: 2}}
        >
            <Stack
                id="weather-section"
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
                id="weather-section"
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
