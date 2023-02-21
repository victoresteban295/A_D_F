import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'
import { Celebration } from "@mui/icons-material"

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})
const ClassWidget = () => {
    return (
        <Grid 
            container  
            spacing={2}
            sx={{
                p:2,
            }}
        >
            <Grid item xs={12} md={6}>
                <Box        
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '25px',
                        flexGrow: '1',
                        flexShrink: '1',
                    }}
                >
                    <Box
                        id="class-title"
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                bgcolor: '#b8b8b8',
                                borderRadius: '5px',
                                px: 2,
                            }}
                        >
                            MATH 345 
                        </Typography>
                    </Box>
                    <Stack
                        spacing={1}
                        divider={<Divider flexItem variant='middle' />}
                        sx={{
                            mx: 3,
                            my: 1,
                        }}
                    >
                        <Stack
                            direction='row'
                            spacing={1}
                        >
                            <Typography
                                className={cabin700.className}
                                variant='h6'
                            >
                                ASGMT:
                            </Typography>
                            <Typography
                                className={cabin400.className}
                                variant='h6'
                            >
                                Homework #1 Chapter 1-3 
                            </Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing={1}
                        >
                            <Typography
                                className={cabin700.className}
                                variant='h6'
                            >
                                ASGMT:
                            </Typography>
                            <Typography
                                className={cabin400.className}
                                variant='h6'
                            >
                                Homework #2 Chapter 3-5
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box        
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        flexGrow: '1',
                        flexShrink: '1',
                    }}
                >
                    <Box
                        id="class-title"
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                bgcolor: '#b8b8b8',
                                borderRadius: '5px',
                                px: 2,
                            }}
                        >
                            CS 247
                        </Typography>
                    </Box>
                    <Box    
                        id='nothing-due'
                        sx={{
                            display: 'flex',
                            height: '100%',
                            m: 2,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Celebration fontSize='large' />    
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{mt:1}}
                        >
                            Nothing Due Today For This Class
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box        
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: '1',
                        flexShrink: '1',
                    }}
                >
                    <Box
                        id="class-title"
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                bgcolor: '#b8b8b8',
                                borderRadius: '5px',
                                px: 2,
                            }}
                        >
                            MATH 230
                        </Typography>
                    </Box>
                    <Stack
                        spacing={1}
                        divider={<Divider flexItem variant='middle' />}
                        sx={{
                            mx: 3,
                            my: 1,
                        }}
                    >
                        <Stack
                            direction='row'
                            spacing={1}
                        >
                            <Typography
                                className={cabin700.className}
                                variant='h6'
                            >
                                ASGMT:
                            </Typography>
                            <Typography
                                className={cabin400.className}
                                variant='h6'
                            >
                                Homework #4 Chapter 8-9 
                            </Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing={1}
                        >
                            <Typography
                                className={cabin700.className}
                                variant='h6'
                            >
                                EXAM:
                            </Typography>
                            <Typography
                                className={cabin400.className}
                                variant='h6'
                            >
                                Midterm Exam Chapter 1-9
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box        
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: '1',
                        flexShrink: '1',
                    }}
                >
                    <Box
                        id="class-title"
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                bgcolor: '#b8b8b8',
                                borderRadius: '5px',
                                px: 2,
                            }}
                        >
                            CHEM 121
                        </Typography>
                    </Box>
                    <Stack
                        spacing={1}
                        divider={<Divider flexItem variant='middle' />}
                        sx={{
                            mx: 3,
                            my: 1,
                        }}
                    >
                        <Stack
                            direction='row'
                            spacing={1}
                        >
                            <Typography
                                className={cabin700.className}
                                variant='h6'
                            >
                                ASGMT:
                            </Typography>
                            <Typography
                                className={cabin400.className}
                                variant='h6'
                            >
                                Homework #4 P.55-58
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Grid>
        </Grid> 
    )
}

export default ClassWidget
