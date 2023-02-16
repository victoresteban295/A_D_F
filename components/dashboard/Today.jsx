import { Box, Typography } from "@mui/material"

const Today = () => {
    return (
        <Box
            id="Today-Schedue-Section"
            sx={{
                maxWidth: '800px', // Change to 100% Later
                height: '400px',
                bgcolor: '#073b4c',
                borderRadius: "25px",
                color: '#fff',
            }}
        >
            <Typography
                sx={{
                    mx: 3,
                }}
            >
                Today's Schedule
            </Typography>
        </Box>
    )
}

export default Today
