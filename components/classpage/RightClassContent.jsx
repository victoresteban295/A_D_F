import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'
import { Expand, NotificationImportant } from "@mui/icons-material"

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const RightClassContent = () => {
    return (
        <Stack
            id="rightside-content"
            spacing={1}
            sx={{
                display : {xs: 'none', md: 'inline'},
                width: '500px',
                mx: 1,
            }}
        >
            <Box
                id='announcements-title'
                sx={{
                    display: 'flex',
                    width: '100%',
                    bgcolor: '#e63462',
                    borderRadius: '5px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <NotificationImportant />
                    <Typography
                        variant='h5'
                        className={cabin700.className}
                        sx={{
                            mx: 2,
                        }}
                    >
                        Class Announcements
                    </Typography>
                </Box>
                <Typography className={cabin700.className}>
                    1
                </Typography>
            </Box>
            <Stack
                id='professor-convo'
                spacing={0}
                sx={{
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    px: 1,
                }}
            >
                <Stack 
                    id="title"
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{
                        p: 1,
                    }}
                >
                    <Typography
                        variant='h6'
                        className={cabin700.className}
                    >
                        Conversation with Professor
                    </Typography>
                    <Expand />
                </Stack>
                <Divider variant='middle' />
                <Box
                    id='class-message'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 1,
                    }}
                >
                    <Avatar>    
                        <Typography
                            className={cabin400.className}
                            sx={{
                                color: '#000',
                            }}
                        >   
                            You 
                        </Typography>
                    </Avatar>
                    <Box    
                        id='message-content'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mx: 1,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabin700.className}
                        >
                            Hello, How do I start problem 4 from Homework #1?
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <Stack
                sx={{
                    boxShadow: '1px 1px 4px 2px #cecece',
                    borderRadius: '5px',
                    p: 1,
                }}
            >
                <Typography
                    variant='h6'
                    className={cabin700.className}
                    sx={{
                        px: 1,
                    }}
                >
                    Due Today
                </Typography>
                <Divider />
                <Stack
                    id="assign-title-stack"
                    spacing={0.5}
                    alignSelf='center'
                >
                    <Typography
                        id='title'
                        variant="h6"
                        className={cabin700.className}
                        sx={{
                            alignSelf:'center'
                        }}
                    >
                        Assignments
                    </Typography>
                    <Stack
                        spacing={0.5}
                        divider={<Divider flexItem variant='middle' />}
                    >
                        <Typography
                            variant="h6"
                            className={cabin400.className}
                        >
                            Homework #9 - Chapter 21 to Chapter 23
                        </Typography>
                    </Stack>
                </Stack>
                <Divider variant='middle'/>
                <Stack
                    id="qexam-title-stack"
                    spacing={0.5}
                    alignSelf='center'
                >
                    <Typography
                        id='title'
                        variant="h6"
                        className={cabin700.className}
                        sx={{
                            alignSelf:'center'
                        }}
                    >
                        Quizzes/Exams
                    </Typography>
                    <Stack
                        spacing={0.5}
                        divider={<Divider flexItem variant='middle' />}
                    >
                        <Typography
                            variant="h6"
                            className={cabin400.className}
                        >
                            Quiz #2 - Chapter 12-16
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>

    )
}

export default RightClassContent
