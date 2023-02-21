import { Box, Typography, Stack } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const Syllabus = () => {
    return (
        <Stack 
            spacing={2} 
            sx={{
                width:'100%',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Stack
                    id='instructor'
                    direction='row'
                    spacing={1}
                >
                    <Typography
                        variant='h6'
                        className={cabin700.className}
                    >
                        Instructor: 
                    </Typography>
                    <Typography
                        variant='h6'
                        className={cabin400.className}
                    >
                        Dave Seely 
                    </Typography>
                </Stack>
                <Stack
                    id='office'
                    direction='row'
                    spacing={1}
                >
                    <Typography
                        variant='h6'
                        className={cabin700.className}
                    >
                        Office Location: 
                    </Typography>
                    <Typography
                        variant='h6'
                        className={cabin400.className}
                    >
                        Palenske Hall R# 330
                    </Typography>
                </Stack>
                <Stack
                    id='instructor'
                    direction='row'
                    spacing={1}
                >
                    <Typography
                        variant='h6'
                        className={cabin700.className}
                    >
                        Lecture Location:
                    </Typography>
                    <Typography
                        variant='h6'
                        className={cabin400.className}
                    >
                        Palenske Hall R# 329
                    </Typography>
                </Stack>
                <Stack
                    id='instructor'
                    direction='row'
                    spacing={1}
                >
                    <Typography
                        variant='h6'
                        className={cabin700.className}
                    >
                        Lecture Day: 
                    </Typography>
                    <Typography
                        variant='h6'
                        className={cabin400.className}
                    >
                        Monday | Wednesday | Friday 9:15 AM - 10:20 AM
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Syllabus
