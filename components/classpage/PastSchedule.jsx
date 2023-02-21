import { Celebration } from "@mui/icons-material"
import { Box, Divider, Typography, Stack, Grid } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const PastSchedule = () => {
    return (
        <Stack
            spacing={1} 
            sx={{
                width:'100%',
            }}
        >
            <Stack 
                spacing={1} 
                sx={{
                    width:'100%',
                }}
            >
                <Box
                    id="week-title"
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px',
                        width: '100%',
                        px: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant='h6'
                        className={cabin700.className}
                    >   
                        January 29 - February 04
                    </Typography>
                </Box>
                <Grid  
                    container 
                    direction='row'
                    alignItems='flex-start'     
                    justifyContent='space-around' 
                    sx={{px:2}}
                >
                    <Grid    
                        item 
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: {xs: 3, md: 0},
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                alignSelf: 'center',
                                borderRadius: '5px',
                                bgcolor: '#b8b8b8',
                                p: 0.25,
                                mb: 1,
                            }}
                        >
                            Assignments
                        </Typography>
                        <Stack
                            spacing={0.25}
                            divider={<Divider flexItem  />}
                            sx={{
                                alignSelf: 'center',
                            }}
                        >
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Jan 30 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #6 - Chapter 13 to Chapter 15 
                                </Typography>
                            </Stack>
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Feb 01 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #7 - Chapter 16 to Chapter 17
                                </Typography>
                            </Stack>
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Feb 03 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #8 - Chapter 18 to Chapter 20
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid> 
                    <Grid    
                        item 
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                alignSelf: 'center',
                                borderRadius: '5px',
                                bgcolor: '#b8b8b8',
                                p: 0.25,
                                mb: 1,
                            }}
                        >
                            Quizzes/Exams
                        </Typography>
                        <Stack
                            spacing={0.25}
                            divider={<Divider flexItem  />}
                            sx={{
                                alignSelf: 'center',
                            }}
                        >
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Feb 03 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Quiz #2: Chapter 6 - 12
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid> 
                </Grid>
            </Stack>
            <Stack 
                spacing={1} 
                sx={{
                    width:'100%',
                }}
            >
                <Box
                    id="week-title"
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px',
                        width: '100%',
                        px: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant='h6'
                        className={cabin700.className}
                    >   
                        January 22 - January 28
                    </Typography>
                </Box>
                <Grid  
                    container 
                    direction='row'
                    alignItems='flex-start'     
                    justifyContent='space-around' 
                    sx={{px:2}}
                >
                    <Grid    
                        item 
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: 1,
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                alignSelf: 'center',
                                borderRadius: '5px',
                                bgcolor: '#b8b8b8',
                                p: 0.25,
                                mb: 1,
                            }}
                        >
                            Assignments
                        </Typography>
                        <Stack
                            spacing={0.25}
                            divider={<Divider flexItem  />}
                            sx={{
                                alignSelf: 'center',
                            }}
                        >
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Jan 23 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #3 - Chapter 6 to Chapter 7 
                                </Typography>
                            </Stack>
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Jan 24 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #4 - Chapter 8 to Chapter 9
                                </Typography>
                            </Stack>
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Jan 27
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #5 - Chapter 6 to Chapter 7
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid> 
                    <Grid    
                        item 
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: 1,
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                alignSelf: 'center',
                                borderRadius: '5px',
                                bgcolor: '#b8b8b8',
                                p: 0.25,
                                mb: 1,
                            }}
                        >
                            Quizzes/Exams
                        </Typography>
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
                                No Quizzes/Exams This Week For This Class
                            </Typography>
                        </Box>
                    </Grid> 
                </Grid>
            </Stack>
            <Stack 
                spacing={1} 
                sx={{
                    width:'100%',
                }}
            >
                <Box
                    id="week-title"
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px',
                        width: '100%',
                        px: 1,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant='h6'
                        className={cabin700.className}
                    >   
                        January 15 - January 21
                    </Typography>
                </Box>
                <Grid  
                    container 
                    direction='row'
                    alignItems='flex-start'     
                    justifyContent='space-around' 
                    sx={{px:2}}
                >
                    <Grid    
                        item 
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: 1,
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                alignSelf: 'center',
                                borderRadius: '5px',
                                bgcolor: '#b8b8b8',
                                p: 0.25,
                                mb: 1,
                            }}
                        >
                            Assignments
                        </Typography>
                        <Stack
                            spacing={0.25}
                            divider={<Divider flexItem  />}
                            sx={{
                                alignSelf: 'center',
                            }}
                        >
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Jan 17 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #1 - Chapter 1 to Chapter 3 
                                </Typography>
                            </Stack>
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Jan 19 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #2 - Chapter 4 to Chapter 5 
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid> 
                    <Grid    
                        item 
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: 1,
                        }}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                alignSelf: 'center',
                                borderRadius: '5px',
                                bgcolor: '#b8b8b8',
                                p: 0.25,
                                mb: 1,
                            }}
                        >
                            Quizzes/Exams
                        </Typography>
                        <Stack
                            spacing={0.25}
                            divider={<Divider flexItem  />}
                            sx={{
                                alignSelf: 'center',
                            }}
                        >
                            <Stack
                                spacing={5}
                                direction='row'
                            >
                                <Typography 
                                    variant='h6'
                                    className={cabin700.className}
                                >
                                    Jan 20 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Quiz #1: Chapters 1 - 5
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid> 
                </Grid>
            </Stack>
        </Stack>
    )
}

export default PastSchedule
