import * as React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import {
    IoBriefcaseOutline
} from "react-icons/io5";

const boxBackgroundColor = 'rgba(0,0,0,.1)';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        boxIcon: {
            position: 'absolute',
            left: theme.spacing(2.4),
            fontSize: '1.8rem',
            color: theme.palette.secondary.dark
        },
        boxTitle: {
            fontWeight: 700,
        },
        boxSubtitle: {
            marginTop: theme.spacing(-.5),
        },
        boxCaption: {
            color: 'rgba(255,255,255,.5)',
            paddingBottom: theme.spacing(1.5)
        },
        boxText: {

        },
        timeline: {
            borderLeft: '2px solid',
            borderLeftColor: theme.palette.secondary.dark,
            padding: theme.spacing(1, 0, 1, 3)
        },
    }),
);

export interface IProject {
    name: string;
    title: string;
    date: string;
}
export interface ITimelineItem {
    title: string;
    role: string;
    description?: string | JSX.Element;
    startDate: string;
    endDate?: string;
    projects?: IProject[];
    position: 'left' | 'right'
}

export interface ITimelineItemProps {
    item: ITimelineItem
}
const TimelineItem = ({ item }: ITimelineItemProps) => {
    const classes = useStyles();

    return (

        <div className={classes.timeline}>
            <IoBriefcaseOutline className={classes.boxIcon} />
            <Typography variant="caption" component="div" className={classes.boxCaption}>
                {item.startDate} - {item.endDate || 'Present'}
            </Typography>
            <Typography variant="h5" component="h3" className={classes.boxTitle}>{item.title}</Typography>
            <Typography variant="h6" component="h4" className={classes.boxSubtitle} gutterBottom={true}>{item.role}</Typography>
            {item.description && (
                <Typography variant="body2" className={classes.boxText}>
                    {item.description}
                </Typography>
            )}
        </div>

    );
}

export default TimelineItem;