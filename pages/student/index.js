import Navbar from "@/components/Navbar"
import { CalendarMonth, Dashboard } from "@mui/icons-material"
import { Box, Stack, Button, Typography, Divider } from "@mui/material"

const StudDashboard = () => {
    return (
        <Box>
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Box
                    id='left-sidebar'
                    sx={{
                        width: '150px',
                        height: '100vh',
                        m: 3,
                    }}
                >
                    <Stack
                        spacing={1}
                        alignItems='flex-start'
                        sx={{
                            bgcolor: 'background.paper'
                        }}
                    >
                        <Button variant='text' startIcon={<Dashboard />}>    
                            <Typography variant='button'>
                                Dashboard
                            </Typography>
                        </Button>
                        <Button variant='text' startIcon={<CalendarMonth />}>    
                            <Typography variant='button'>
                                Calendar
                            </Typography>
                        </Button>
                        <Divider variant='middle' sx={{width: '150px', bgcolor: 'black'}}/>
                        <Button variant='text'>    
                            <Typography variant='button'>
                                Math 345
                            </Typography>
                        </Button>
                        <Button variant='text'>    
                            <Typography variant='button'>
                                CS 247
                            </Typography>
                        </Button>
                        <Button variant='text'>    
                            <Typography variant='button'>
                                Math 230
                            </Typography>
                        </Button>
                        <Button variant='text'>    
                            <Typography variant='button'>
                                CHEM 121
                            </Typography>
                        </Button>
                    </Stack>
                </Box>
                <Divider orientation='vertical' flexItem sx={{bgcolor: 'black'}} />

                <Box
                    id='main-content'
                    sx={{
                        bgcolor: 'blue',
                    }}
                >

                </Box>

                <Box
                    id='right-content'
                    sx={{
                        bgcolor: 'green',
                    }}
                >

                </Box>

            </Box>
        </Box>
    )
}

export default StudDashboard
