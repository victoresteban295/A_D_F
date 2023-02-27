import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'
import { Campaign } from "@mui/icons-material"
import ClassWidget from "./ClassWidget"

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
            <ClassWidget />
        </Box>

    )
}

export default RightContent
