import { Box, Divider, Grid, Stack, Typography } from "@mui/material"
import { Cabin } from '@next/font/google'
import { Celebration } from "@mui/icons-material"

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})
const ClassWidget = () => {
    return (
        <Stack
            sx={{
                bgcolor: 'widget.background',
                boxShadow: '1px 1px 4px 2px #cecece',
                borderRadius: '5px',
            }}
        >
            <Box
                id='due-today-title'
                sx={{
                    px: 2,
                }}
            >
                <Typography
                    variant='h6'
                    className={cabin700.className}
                >
                    Due Today
                </Typography>
                <Divider />
            </Box>
            <Stack
                id='due-today-list'
                spacing={1}
                divider={<Divider />}
                sx={{
                    px: 6,
                    my: 2,
                }}
            >
                <Grid
                    id='single-assignment'
                    container
                >
                    <Grid
                        item
                        xs={6}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin700.className}
                        >
                            MATH 345
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Assignment
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Homework #1
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    id='single-assignment'
                    container
                >
                    <Grid
                        item
                        xs={6}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin700.className}
                        >
                            CS 247
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Assignment
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Homework #3
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    id='single-assignment'
                    container
                >
                    <Grid
                        item
                        xs={6}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin700.className}
                        >
                            MATH 230
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Assignment
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Homework #4
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    id='single-assignment'
                    container
                >
                    <Grid
                        item
                        xs={6}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin700.className}
                        >
                            MATH 230
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Quiz
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={4}
                    >
                        <Typography
                            variant='body1'
                            className={cabin400.className}
                        >
                            Quiz #1
                        </Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    )
}

export default ClassWidget
