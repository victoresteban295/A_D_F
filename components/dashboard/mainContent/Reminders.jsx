import { InventoryOutlined } from "@mui/icons-material"
import { Box, Divider, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const Reminders = () => {
    return (
        <Stack
            id='reminders-widget'
            sx={{
                bgcolor: 'widget.background',
                minHeight: '100px',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
            }}
        >
            <Box
                id='reminders-title'
                sx={{
                    px: 2,
                }}
            >
                <Typography
                    variant='h6'
                    className={cabin700.className}
                >
                    Reminders
                </Typography>
            </Box> 
            <Divider variant='middle' />
            <Stack
                id='reminders-stack'
                spacing={1}
                divider={<Divider variant='middle' />}
                sx={{
                    px: 2,
                    py: 1,
                }}
            >
                <Grid
                    id='single-reminder'
                    container
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Grid
                        id='reminder-status'
                        item
                        xs={12}
                        md={2}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                my: {xs: 1, md: 0}
                            }}
                        >
                            <Typography
                                variant='body2'
                                className={cabin700.className}
                                sx={{
                                    color: '#c9184a',
                                    borderRadius: '5px',
                                    borderStyle: 'solid',
                                    borderColor: '#c9184a',
                                    px: '1px',
                                    bgcolor: '#ffb3c1',
                                }}
                            >
                                PAST DUE
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        id='reminder-group'
                        item
                        xs={4}
                        md={2}
                    >
                        <Typography
                            variant='body1'
                            className={cabin700.className}
                        >
                            Personal
                        </Typography>
                    </Grid>
                    <Grid
                        id='reminder-event'
                        item
                        xs={8}
                        md={5}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Buy more coffee
                        </Typography>
                    </Grid>
                    <Grid
                        id='reminder-date'
                        item
                        xs={10}
                        md={2}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            02/26, 8:00PM
                        </Typography>
                    </Grid>
                    <Grid
                        id='reminder-completeicon'
                        item
                        xs={2}
                        md={1}
                    >
                        <Tooltip title='Mark as Complete' followCursor={true}>
                            <IconButton>
                                <InventoryOutlined />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Grid
                    id='single-reminder'
                    container
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Grid
                        id='reminder-status'
                        item
                        xs={12}
                        md={2}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                my: {xs: 1, md: 0}
                            }}
                        >
                            <Typography
                                variant='body2'
                                className={cabin700.className}
                                sx={{
                                    color: '#40916c',
                                    borderRadius: '5px',
                                    borderStyle: 'solid',
                                    borderColor: '#40916c',
                                    px: '1px',
                                    bgcolor: '#d8f3dc'
                                }}
                            >
                                UPCOMING
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        id='reminder-group'
                        item
                        xs={4}
                        md={2}
                    >
                        <Typography
                            variant='body1'
                            className={cabin700.className}
                        >
                            Bills
                        </Typography>
                    </Grid>
                    <Grid
                        id='reminder-event'
                        item
                        xs={8}
                        md={5}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Car Payment
                        </Typography>
                    </Grid>
                    <Grid
                        id='reminder-date'
                        item
                        xs={10}
                        md={2}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Today, 7:00AM
                        </Typography>
                    </Grid>
                    <Grid
                        id='reminder-completeicon'
                        item
                        xs={2}
                        md={1}
                    >
                        <Tooltip title='Mark as Complete' followCursor={true}>
                            <IconButton>
                                <InventoryOutlined />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Grid
                    id='single-reminder'
                    container
                    sx={{
                        alignItems: 'center',
                        justifyItems: 'flex-start'
                    }}
                >
                    <Grid
                        id='reminder-status'
                        item
                        xs={12}
                        md={2}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                my: {xs: 1, md: 0}
                            }}
                        >
                            <Typography
                                variant='body2'
                                className={cabin700.className}
                                sx={{
                                    color: '#40916c',
                                    borderRadius: '5px',
                                    borderStyle: 'solid',
                                    borderColor: '#40916c',
                                    px: '1px',
                                    bgcolor: '#d8f3dc'
                                }}
                            >
                                UPCOMING
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        id='reminder-group'
                        item
                        xs={4}
                        md={2}
                    >
                        <Typography
                            variant='body1'
                            className={cabin700.className}
                        >
                            Bills
                        </Typography>
                    </Grid>
                    <Grid
                        id='reminder-event'
                        item
                        xs={8}
                        md={5}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Credit Card Payment
                        </Typography>
                    </Grid>
                    <Grid
                        id='reminder-date'
                        item
                        xs={10}
                        md={2}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Today, 7:00AM
                        </Typography>
                    </Grid>
                    <Grid
                        id='reminder-completeicon'
                        item
                        xs={2}
                        md={1}
                    >
                        <Tooltip title='Mark as Complete' followCursor={true}>
                            <IconButton>
                                <InventoryOutlined />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Stack>
        </Stack> 
    )
}

export default Reminders
