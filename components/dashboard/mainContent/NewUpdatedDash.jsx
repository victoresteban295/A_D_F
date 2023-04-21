import { Box, Divider, Grid, Typography, Stack } from "@mui/material"
import { Cabin } from '@next/font/google'
import ScheduleWidget from "./ScheduleWidget"
import ClassWidget from "./ClassWidget"
import RightContent from "./RightContent"
import WeatherTime from "./WeatherTime"
import EventsWidget from "./EventsWidget"
import ProfMessageWidget from "./ProfMessageWidget"
import ChecklistWidget from "./ChecklistWidget"
import Reminders from "./Reminders"

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const NewUpdatedDash = () => {
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
                sx={{
                    display: 'flex',
                    width: '1000px', //Prev Value: 1000px
                    flexGrow: '1',
                    flexShrink: '1',
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                }}
            >
                <EventsWidget />
                <Stack
                    spacing={3}
                    sx={{
                        maxWidth: '750px',
                        flexGrow: '1',
                        flexShrink: '1',
                        mx: 3,
                    }}
                >
                    <WeatherTime />
                    <ClassWidget />
                    <Reminders />
                    <ChecklistWidget />
                    {/* <ProfMessageWidget /> */}
                </Stack>
            </Box>
            {/* <RightContent /> */}
        </Box>
    )
}

export default NewUpdatedDash
