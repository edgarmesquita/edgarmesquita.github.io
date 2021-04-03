import * as React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import TimelineItem, { ITimelineItem } from './TimelineItem';
import TimelineList from './TimelineList';

const boxBackgroundColor = 'rgba(0,0,0,.1)';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

    }),
);


export interface IEducationSectionProps {
    titleClassName?: string;
}

const education: ITimelineItem[] = [
    {
        title: "🇧🇷 Estácio de Sá University", role: "Technologist, Graphic Design",
        startDate: "Jan 2004",
        endDate: "Dec 2007", position: 'left'
    },
    {
        title: "🇧🇷 Pedro II High School", role: "Graduate, General Formation",
        startDate: "Jan 1997",
        endDate: "Dec 1999", position: 'left'
    },
    {
        title: "🇧🇷 Olavo Bilac High School", role: "Data processing technician",
        startDate: "Jan 1996",
        endDate: "Dec 1998", position: 'right'
    },
];

const EducationSection = ({ titleClassName }: IEducationSectionProps) => {
    const classes = useStyles();

    return (

        <Container maxWidth="md" id="education">
            <Typography variant="h1" component="h2" className={titleClassName}>
                Education
            </Typography>

            <TimelineList items={education} />
        </Container>

    );
}

export default EducationSection;