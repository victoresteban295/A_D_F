import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"
import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import Maincontent from "@/components/classpage/Maincontent"

const classpage = () => {

    let myTheme = createTheme({
        palette: {
            primary: {
                main: '#78a1bb',
                secondary: '#06d6a0'
            },
            background: {
                paper: '#fff',
                default: '#fff'
            },
            text: {
                primary: '#000'
            },
        } 
    })

    myTheme = responsiveFontSizes(myTheme);

    return (
        <ThemeProvider theme={myTheme}>
            <CssBaseline />
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Sidebar />
                <Maincontent />        
            </Box>
        </ThemeProvider>
    )
}

export default classpage
