import React from 'react'
import { Box, Divider, Tab, Typography, Stack } from "@mui/material"
import { Cabin } from '@next/font/google'
import { TabContext, TabList, TabPanel } from '@mui/lab'

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const Maincontent = () => {

    const [value, setValue] = React.useState('2')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box
            id='main-content'
            sx={{
                maxWidth: '1500px',
                flexGrow: '1',
                flexShrink: '1',
                display: 'flex',
                my: 2,
            }}
        >
            <Box
                id='center-content'
                sx={{
                    maxWidth: '1000px',
                    flexGrow: '1',
                    flexShrink: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    mx: 2,
                }}
            >
                <Box
                    id='data-title'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant='h3'
                        className={cabin700.className}
                    >
                        MATH 345 1A: Differential Equations 
                    </Typography>
                    <Divider sx={{bgcolor: 'text.primary'}}/>
                </Box>
                <Box
                    id='classpage-tabsetup'
                    sx={{
                        width: '100%',
                        my: 1,
                    }}
                >
                    <TabContext value={value} sx={{width: '100%'}}>
                        <Box   
                            sx={{
                                borderColor: 'text.primary',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <TabList    
                                onChange={handleChange}
                                sx={{
                                    alignSelf: 'center', 
                                    mb: 2,
                                }}
                            >
                                <Tab   
                                    label={
                                        <Typography
                                            variant='body1'
                                            className={cabin700.className}
                                        >
                                            Syllabus
                                        </Typography>
                                    }
                                    value='1'   
                                    sx={{   
                                        color:'#000',
                                        p:0,
                                    }} 
                                />
                                <Tab   
                                    label={
                                        <Typography
                                            variant='body1'
                                            className={cabin700.className}
                                        >
                                            Upcoming Schedule
                                        </Typography>
                                    }
                                    value='2'   
                                    sx={{   
                                        color:'#000'
                                    }} 
                                />
                                <Tab   
                                    label={
                                        <Typography
                                            variant='body1'
                                            className={cabin700.className}
                                        >
                                            Past Schedule
                                        </Typography>
                                    }
                                    value='3'   
                                    sx={{   
                                        color:'#000'
                                    }} 
                                />
                            </TabList>
                        </Box>
                        <TabPanel 
                            value='1'
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column',
                                p: 0,
                            }}
                        >
                            <Stack 
                                spacing={2} 
                                sx={{
                                    width:'100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: 'primary.main',
                                        borderRadius: '5px',
                                        width: '100%',
                                        p: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        className={cabin700.className}
                                    >   
                                        Week 1
                                    </Typography>
                                </Box>
                            </Stack>
                        </TabPanel> 
                        <TabPanel 
                            value='2'
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column',
                                p: 0,
                            }}
                        >
                            <Stack 
                                spacing={2} 
                                sx={{
                                    width:'100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: 'primary.main',
                                        borderRadius: '5px',
                                        width: '100%',
                                        p: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        className={cabin700.className}
                                    >   
                                        Week 2
                                    </Typography>
                                </Box>
                            </Stack>
                        </TabPanel> 
                        <TabPanel 
                            value='3'
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column',
                                p: 0,
                            }}
                        >
                            <Stack 
                                spacing={2} 
                                sx={{
                                    width:'100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: 'primary.main',
                                        borderRadius: '5px',
                                        width: '100%',
                                        p: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        variant='h6'
                                        className={cabin700.className}
                                    >   
                                        Week 3
                                    </Typography>
                                </Box>
                            </Stack>
                        </TabPanel> 
                    </TabContext>
                </Box>
            </Box>
        </Box>
    )
}

export default Maincontent
