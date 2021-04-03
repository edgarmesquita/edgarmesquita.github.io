import * as React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

import {
    IoBriefcaseOutline
} from "react-icons/io5";
import TimelineItem, { ITimelineItem } from './TimelineItem';

const boxBackgroundColor = 'rgba(0,0,0,.1)';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            position: 'relative',
            backgroundColor: boxBackgroundColor,
            borderRadius: '10px',
            padding: theme.spacing(3, 2, 3, 4)
        },
    }),
);


export interface ITimelineListProps {
    items: ITimelineItem[]
}
const TimelineList = ({ items }: ITimelineListProps) => {
    const classes = useStyles();

    return (

        <Grid container={true} spacing={3}>
            <Grid item={true} xs={12} sm={6}>
                <Box className={classes.box}>
                    {items.filter((item) => item.position === 'left').map((item: ITimelineItem) =>
                        <TimelineItem item={item} key={item.title} />
                    )}
                </Box>
            </Grid>
            <Grid item={true} xs={12} sm={6}>
                <Box className={classes.box}>
                    {items.filter((item) => item.position === 'right').map((item: ITimelineItem) =>
                        <TimelineItem item={item} key={item.title} />
                    )}
                </Box>
            </Grid>
        </Grid>

    );
}

export default TimelineList;