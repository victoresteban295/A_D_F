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

const UpcomingSchedule = () => {
    return (
        <Stack
            spacing={2} 
            sx={{
                width:'100%',
            }}
        >
            <Stack 
                sx={{
                    width:'100%',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                }}
            >
                <Box
                    id="week-title"
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px 5px 0 0',
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
                        February 05 - February 11
                    </Typography>
                </Box>
                <Grid  
                    container 
                    direction='row'
                    alignItems='flex-start'     
                    justifyContent='space-around' 
                    sx={{
                        py:1,
                        px: 2,
                    }}
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
                                    Feb 06 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #9 - Chapter 21 to Chapter 23 
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
                                    Feb 07 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #10 - Chapter 24 to Chapter 26 
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
                                    Feb 08 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #11 - Chapter 27 to Chapter 28
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
                                    Feb 09 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #12 - Chapter 29 to Chapter 30 
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
                                    Feb 07 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Quiz #3: Chapter 13 - 20
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
                                    Feb 10 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Quiz #4: Chapter 21 - 28 
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid> 
                </Grid>
            </Stack>
            <Stack 
                sx={{
                    width:'100%',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                }}
            >
                <Box
                    id="week-title"
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px 5px 0 0',
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
                        February 12 - February 18
                    </Typography>
                </Box>
                <Grid  
                    container 
                    direction='row'
                    alignItems='flex-start'     
                    justifyContent='space-around' 
                    sx={{
                        py:1,
                        px: 2,
                    }}
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
                                    Feb 14 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #13 - Chapter 31 to Chapter 32 
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
                                    Feb 15 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #14 - Chapter 33
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
                sx={{
                    width:'100%',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                }}
            >
                <Box
                    id="week-title"
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px 5px 0 0',
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
                        February 19 - February 25
                    </Typography>
                </Box>
                <Grid  
                    container 
                    direction='row'
                    alignItems='flex-start'     
                    justifyContent='space-around' 
                    sx={{
                        py:1,
                        px: 2,
                    }}
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
                                    Feb 20 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #15 - Chapter 34 to Chapter 35 
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
                                    Feb 23 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #16 - Chapter 36 to Chapter 38 
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
                                    Feb 24 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Midterm Exam: Chapters 1 - 33
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid> 
                </Grid>
            </Stack>
            <Stack 
                sx={{
                    width:'100%',
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                }}
            >
                <Box
                    id="week-title"
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px 5px 0 0',
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
                        February 26 - March 04
                    </Typography>
                </Box>
                <Grid  
                    container 
                    direction='row'
                    alignItems='flex-start'     
                    justifyContent='space-around' 
                    sx={{
                        py:1,
                        px: 2,
                    }}
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
                                    Feb 27 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #17 - Chapter 39 to Chapter 42 
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
                                    Mar 02 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #18 - Chapter 43 to Chapter 44 
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
                                    Feb 02 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Quiz #1 
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid> 
                </Grid>
            </Stack>
        </Stack>
    )
}

export default UpcomingSchedule
