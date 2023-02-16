import { QuestionAnswerTwoTone } from "@mui/icons-material"
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material"

const Navbar = () => {
    return (
        <Box sx={{position:'sticky', top:'0px', zIndex:'999',}}>
            <AppBar position='sticky'>
                {/* <Container maxWidth='xl'> */}
                    <Toolbar disableGutters>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    postion: 'static',
                                    flexGrow: 1,
                                    mx: 3,
                                }}
                            >
                                <QuestionAnswerTwoTone fontSize="large" />
                                <Typography 
                                    variant='h6'
                                    sx={{
                                        mx: 1,
                                    }}
                                >
                                    Where's My Prof ?
                                </Typography> 
                            </Box>
                            <Avatar sx={{bgcolor: 'grey', mx: 3}}>VE</Avatar>
                    </Toolbar>
                {/* </Container> */}
            </AppBar>
        </Box>
    )
}

export default Navbar
