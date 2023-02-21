import { Box, Typography, Stack, Grid, Divider } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin700 = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabin400 = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const Syllabus = () => {
    return (
        <Stack 
            spacing={2} 
            divider={<Divider flexItem variant='middle' />}
            sx={{
                width:'100%',
            }}
        >
            <Box   
                sx={{
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant='h6'
                    className={cabin700.className}
                >
                    Math 345 1A Differential Equations (CRN: 8204)
                </Typography>
                <Typography
                    variant='h6'
                    className={cabin700.className}
                >
                    South Central College
                </Typography>
                <Typography
                    variant='h6'
                    className={cabin700.className}
                >
                    Fall Semester 2023
                </Typography>
                {/* <Divider variant='middle' /> */}
            </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Stack
                        id='instructor'
                        direction='row'
                        spacing={1}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                        >
                            Instructor: 
                        </Typography>
                        <Typography
                            variant='h6'
                            className={cabin400.className}
                        >
                            Dave Seely 
                        </Typography>
                    </Stack>
                    <Stack
                        id='office'
                        direction='row'
                        spacing={1}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                        >
                            Office Location: 
                        </Typography>
                        <Typography
                            variant='h6'
                            className={cabin400.className}
                        >
                            Palenske Hall R# 330
                        </Typography>
                    </Stack>
                    <Stack
                        id='office'
                        direction='row'
                        spacing={1}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                        >
                           Phone: 
                        </Typography>
                        <Typography
                            variant='h6'
                            className={cabin400.className}
                        >
                            (517) 678-4889
                        </Typography>
                    </Stack>
                    <Stack
                        id='office'
                        direction='row'
                        spacing={1}
                    >
                        <Typography
                            variant='h6'
                            className={cabin700.className}
                        >
                           Email:
                        </Typography>
                        <Typography
                            variant='h6'
                            className={cabin400.className}
                        >
                            dseely@college.edu
                        </Typography>
                    </Stack>
                </Box>
                <Stack
                    spacing={1}
                >
                    <Typography
                        variant="h5"
                        className={cabin700.className}
                    >
                        Lecture: 
                    </Typography> 
                    <Stack
                        direction='row'
                        divider={<Divider flexItem orientation='vertical' />}
                        
                    >
                        <Box
                            sx={{mx: 2}}
                        >
                            <Typography
                                id="lecture-location"
                                variant="h6"
                                className={cabin400.className}
                            >
                                Palenske Hall 329
                            </Typography>
                            <Typography
                                id="lecture-days"
                                variant="h6"
                                className={cabin400.className}
                            >
                                Monday | Wednesday | Friday
                            </Typography>
                            <Typography
                                id="lecture-time"
                                variant="h6"
                                className={cabin400.className}
                            >
                                9:15 AM - 10:20 AM
                            </Typography>
                        </Box>
                        <Box
                            sx={{mx: 2}}
                        >
                            <Typography
                                id="lecture-location"
                                variant="h6"
                                className={cabin400.className}
                            >
                                Palenske Hall 329
                            </Typography>
                            <Typography
                                id="lecture-days"
                                variant="h6"
                                className={cabin400.className}
                            >
                                Thursday
                            </Typography>
                            <Typography
                                id="lecture-time"
                                variant="h6"
                                className={cabin400.className}
                            >
                                2:15 PM - 5:20 PM
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
                <Stack
                    spacing={1}
                >
                    <Typography
                        variant="h5"
                        className={cabin700.className}
                    >
                        Course Description: 
                    </Typography> 
                    <Typography
                        variant="h6"
                        className={cabin400.className}
                    >
                        The use of linear and integrated circuits,
                        discrete devices, amplifiers, power supplies,
                        oscillators and digital logic in experimental
                        design and data acquisition. Applications of
                        measurement instrumentation. Upon completion 
                        of the course, students should have an
                        understanding of electronic circuits and devices appropriate to the
                        level of the course. Students should demonstrate inductive and
                        deductive problem solving skills using methods that are
                        conceptual and analytical (theoretical/mathematical), numerical
                        (computer simulation), and practical (construct/ operate/
                        troubleshoot). Students will develop these competencies
                        thorough the study of in topics covered in the course including:
                        digital devices and circuits, passive analog circuits (R/L/C),
                        discrete semiconductor devices (diodes, transistors, and other
                        semiconductor devices), integrated circuit logic devices, 
                        integrated linear circuits (operational amplifiers), 
                        active circuits (feedback) complex voltages and impedance,  
                        Thévenin and Norton equivalent circuits, filters and transfer 
                        functions, and be able to apply Kirchoff’s Laws to circuits 
                        with either DC and AC sources. Assessment of 
                        student achievement will be accomplished through assigned  
                        homework, laboratory exercises, projects, and exams. 
                    </Typography> 
                </Stack>
                <Stack
                    spacing={1}
                >
                    <Typography
                        variant="h5"
                        className={cabin700.className}
                    >
                        Attendance Policy: 
                    </Typography> 
                    <Typography
                        variant="h6"
                        className={cabin400.className}
                    >
                        This course is “hands-on” and class participation 
                        at every class and lab is very important to learn the 
                        material. Excessive unexcused attendance and/or tardiness 
                        will result in some reduction of the final grade, in addition 
                        to the no-credit policy toward in-class homework (see 
                        “Homework” below). I regard more than 10% of the 
                        approximately 40 days scheduled for class discussions 
                        (that works out to 4 days) to be in danger of becoming excessive.
                    </Typography> 
                </Stack>
                <Stack
                    spacing={1}
                >
                    <Typography
                        variant="h5"
                        className={cabin700.className}
                    >
                        Homework:
                    </Typography> 
                    <Typography
                        variant="h6"
                        className={cabin400.className}
                    >
                        Homework will consist of problem assignments and 
                        in-class exercises. Problems will be posted and collected 
                        on the course website. Each homework problem will be graded 
                        on a 10-point scale, and your homework will be submitted 
                        via the course web. To facilitate this, there is a 
                        scanner at the back of the room. While we strongly 
                        encourage you to work with one another on the homework 
                        assignments, the material you turn in must represent your 
                        own work. Late problem assignments will be accepted at 
                        my discretion. A significant penalty will be assessed 
                        on late problem assignments except in cases of emergency 
                        or illness documented by the Health Service or by prior 
                        arrangement. In-class exercises cannot be made up except 
                        in cases of emergency or illness documented by the Health 
                        Service or by prior arrangement. Evidence of copying on 
                        homework or evidence that someone else has completed and 
                        submitted your homework assignment on your behalf will result 
                        in a letter to the Dean of Students, which will trigger 
                        the college’s judicial process for academic integrity.
                    </Typography> 
                </Stack>
        </Stack>
    )
}

export default Syllabus
