import { Add, ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Box, Checkbox, Divider, Grid, IconButton, Stack, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const ChecklistWidget = () => {
    return (
        <Grid
            container
            sx={{
                minHeight: '100px',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
            }}
        >
            <Grid
                id='daily-routine-widget'
                item
                xs={12}
                md={5.75}
                sx={{
                    /* boxShadow: '1px 1px 4px 2px #cecece', */
                    /* borderRadius: '5px', */
                }}
            >
                <Stack
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton
                        >
                            <Add />
                        </IconButton>
                        <Typography
                            id='daily-routine-title'
                            variant='h6'
                            className={cabin700.className}
                            sx={{
                                justifySelf: 'flex-end',
                            }}
                        >
                            Daily Routine
                        </Typography>
                    </Box>
                    <Divider variant='middle' />
                    <Stack
                        id='checklist-stack'
                        sx={{
                            my: 1,
                        }}
                    >
                        <Grid
                            id='single-assignment'
                            container
                        >
                            <Grid
                                item
                                xs={2}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Checkbox checked={false} />
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    variant='body1'
                                    className={cabin400.className}
                                >
                                    Gym
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            id='single-assignment'
                            container
                        >
                            <Grid
                                item
                                xs={2}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Checkbox checked={false} />
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    variant='body1'
                                    className={cabin400.className}
                                >
                                    Meditation
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            id='single-assignment'
                            container
                        >
                            <Grid
                                item
                                xs={2}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Checkbox checked={false} />
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    variant='body1'
                                    className={cabin400.className}
                                >
                                    Study Session
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            id='single-assignment'
                            container
                        >
                            <Grid
                                item
                                xs={2}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Checkbox checked={false} />
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    variant='body1'
                                    className={cabin400.className}
                                >
                                    Reading
                                </Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
            </Grid>
            <Grid
                item
                xs={12}
                md={0.5}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 1,
                }}
            >
                <Divider 
                    orientation='vertical' 
                    variant='middle' 
                    sx={{
                        display: {xs: 'none', md: 'inline'},
                        bgcolor: '#000',
                    }}
                />
                <Divider 
                    orientation='horizontal' 
                    variant='middle' 
                    sx={{
                        display: {xs: 'inline', md: 'none'},
                        bgcolor: '#000',
                        flexGrow: '1',
                        flexShrink: '1',
                    }}
                />
            </Grid>
            <Grid
                id='checklist-widget'
                item
                xs={12}
                md={5.75}
                sx={{
                    /* boxShadow: '1px 1px 4px 2px #cecece', */
                    /* borderRadius: '5px', */
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton>
                            <Add />
                        </IconButton>
                        <Typography
                            id='daily-routine-title'
                            variant='h6'
                            className={cabin700.className}
                        >
                            Personal
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <IconButton>
                            <ChevronLeft />
                        </IconButton>
                        <IconButton>
                            <ChevronRight />
                        </IconButton>
                    </Box>
                </Box>
                <Divider variant='middle' />
                <Stack
                    id='checklist-stack'
                    sx={{
                        my: 1,
                    }}
                >
                    <Grid
                        id='single-assignment'
                        container
                    >
                        <Grid
                            item
                            xs={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Checkbox checked={false} />
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                variant='body1'
                                className={cabin400.className}
                            >
                                Gym
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        id='single-assignment'
                        container
                    >
                        <Grid
                            item
                            xs={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Checkbox checked={false} />
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                variant='body1'
                                className={cabin400.className}
                            >
                                Meditation
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        id='single-assignment'
                        container
                    >
                        <Grid
                            item
                            xs={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Checkbox checked={false} />
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                variant='body1'
                                className={cabin400.className}
                            >
                                Study Session
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        id='single-list'
                        container
                    >
                        <Grid
                            item
                            xs={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Checkbox checked={false} />
                        </Grid>
                        <Grid
                            item
                            xs={10}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                variant='body1'
                                className={cabin400.className}
                            >
                                Reading
                            </Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ChecklistWidget
