import { Box, Divider, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'
import ScheduleWidget from "./ScheduleWidget"
import ClassWidget from "./ClassWidget"
import RightContent from "./RightContent"

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const Maincontent = () => {
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
                        March 19, 2023
                    </Typography>
                    <Divider sx={{bgcolor: 'text.primary'}}/>
                </Box>
                <ScheduleWidget />
                <ClassWidget />
            </Box>
            <RightContent />
        </Box>
    )
}

export default Maincontent
