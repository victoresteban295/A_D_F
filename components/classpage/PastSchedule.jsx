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
                        February 05 - February 11
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
                                    Feb 02 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #1 
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
                                    Feb 04 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #2 
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
                                    Feb 02 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #1 
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
                                    Feb 04 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #2 
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
                                    Quiz #1 
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
                                    Quiz #1 
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
                        February 12 - February 18
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
                                    Feb 02 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #1 
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
                                    Feb 04 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #2 
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
                        February 19 - February 25
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
                                    Feb 02 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #1 
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
                                    Feb 04 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #2 
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
                        February 26 - March 04
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
                                    Feb 02 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #1 
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
                                    Feb 04 
                                </Typography>
                                <Typography 
                                    variant='h6'
                                    className={cabin400.className}
                                >
                                    Homework #2 
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

export default PastSchedule
