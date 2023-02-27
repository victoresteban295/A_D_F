import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'
import { Campaign } from "@mui/icons-material"

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const RightContent = () => {
    return (
        <Box
            id="rightside-content"
            sx={{
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
                    <Campaign />
                    <Typography
                        variant='h5'
                        className={cabin700.className}
                        sx={{
                            mx: 2,
                        }}
                    >
                        Announcements
                    </Typography>
                </Box>
                <Typography className={cabin700.className}>
                    3
                </Typography>
            </Box>
            <Box
                id='message-right-section'
                sx={{
                    my: 4,
                    boxShadow: '1px 1px 4px 2px #cecece',
                    p: 2,
                    borderRadius: '5px',
                }}
            >
                <Stack
                    spacing={2}
                >
                    <Box
                        id='class-message'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
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
                                variant='h6'
                                className={cabin700.className}
                            >
                                MATH 345
                            </Typography>
                            <Typography
                                variant='body'
                                className={cabin400.className}
                            >
                                Hello, How do I start problem 4 from Homework #1?
                            </Typography>

                        </Box>
                    </Box>
                    <Divider variant='middle' sx={{bgcolor: '#000'}} />
                    <Box
                        id='class-message'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
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
                                variant='h6'
                                className={cabin700.className}
                            >
                                CS 247
                            </Typography>
                            <Typography
                                variant='body'
                                className={cabin400.className}
                            >
                                What programming language can I use for Project #2?
                            </Typography>

                        </Box>
                    </Box>
                    <Divider variant='middle' sx={{bgcolor: '#000'}} />
                    <Box
                        id='class-message'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar>    
                            <Typography
                                className={cabin400.className}
                                sx={{
                                    color: '#000',
                                }}
                            >   
                                Prof
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
                                variant='h6'
                                className={cabin700.className}
                            >
                                MATH 230
                            </Typography>
                            <Typography
                                variant='body'
                                className={cabin400.className}
                            >
                                Yes you can
                            </Typography>

                        </Box>
                    </Box>
                    <Divider variant='middle' sx={{bgcolor: '#000'}} />
                    <Box
                        id='class-message'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar>    
                            <Typography
                                className={cabin400.className}
                                sx={{
                                    color: '#000',
                                }}
                            >   
                                Prof
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
                                variant='h6'
                                className={cabin700.className}
                            >
                                CHEM 121
                            </Typography>
                            <Typography
                                variant='body'
                                className={cabin400.className}
                            >
                                Can you come to my office later today?
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>

    )
}

export default RightContent
