import { QuestionAnswerTwoTone } from "@mui/icons-material"
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material"
import { Teko } from '@next/font/google'

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const Navbar = () => {
    return (
        <Box sx={{position:'sticky', top:'0px', zIndex:'999',}}>
            <AppBar position='sticky'>
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
                                className={teko.className}
                                sx={{
                                    mx: 1,
                                }}
                            >
                                Plan It All
                            </Typography> 
                        </Box>
                        <Avatar sx={{bgcolor: 'grey', mx: 3}}>VE</Avatar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
