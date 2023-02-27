import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const ProfMessageWidget = () => {
    return (
        <Stack
            id='convoprof-widget'
            sx={{
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
                p: 2,
            }}
        >
            <Box
                id='widget-title'
            >
                <Typography
                    variant='h6'
                    className={cabin700.className}
                >
                    Conversation With Professor
                </Typography>
                <Divider variant='middle' /> 
            </Box> 
            <Stack
                id='prof-messages-section'
                spacing={1}
                divider={<Divider variant='middle' />}
                sx={{
                    p: 2,
                }}
            >
                <Box
                    id='single-message'
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
                <Box
                    id='single-message'
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
                <Box
                    id='single-message'
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
                <Box
                    id='single-message'
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
        </Stack>
    )
}

export default ProfMessageWidget
