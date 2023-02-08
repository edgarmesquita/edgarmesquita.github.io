import * as React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { Box, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';

import {
  IoBriefcaseOutline
} from "react-icons/io5";
import { IconType } from 'react-icons';

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
    project: {
      marginTop: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    projectAction: {
      display: 'flex',
      alignItems:  'flex-start'
    },
    projectContent: {
      padding: theme.spacing(1, 2, 1, 1),
      paddingBottom: theme.spacing(1) + 'px !important'
    },
    projectTitle: {
      fontSize: '1rem'
    },
    projectDescription: {
      fontSize: '.8rem'
    },
    projectImageContent: {
      maxWidth: 60,
      padding: theme.spacing(1, 0),
    },
    projectImage: {
      width: '100%',
    }
  }),
);

export interface IProject {
  title: string;
  description: string;
  date?: string;
  url?: string;
  image?: string;
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
  item: ITimelineItem,
  iconType?: IconType,
  continuation?: boolean
}
const TimelineItem = ({ item, iconType, continuation }: ITimelineItemProps) => {
  const classes = useStyles();
  const Icon = iconType || IoBriefcaseOutline;

  const getContent = (project: IProject) => {
    return (
      <CardContent className={classes.projectContent}>
        <Typography variant="h6" component="h5" className={classes.projectTitle} gutterBottom={true}>{project.title}</Typography>
        <Typography variant="body2" className={classes.projectDescription}>{project.description}</Typography>
      </CardContent>
    )
  }
  return (

    <div className={classes.timeline}>
      {!continuation && <Icon className={classes.boxIcon} />}
      {!continuation && <Typography variant="h5" component="h3" className={classes.boxTitle}>{item.title}</Typography>}
      <Typography variant="caption" component="div" className={classes.boxCaption}>
        {item.startDate} - {item.endDate || 'Present'}
      </Typography>

      <Typography variant="h6" component="h4" className={classes.boxSubtitle} gutterBottom={true}>{item.role}</Typography>
      {item.description && (
        <Typography variant="body2" className={classes.boxText}>
          {item.description}
        </Typography>
      )}
      {item.projects?.map((project) => {
        return (
          <Card key={project.title} className={classes.project}>
            {project.url ? (
              <CardActionArea href={project.url} target="_blank" className={classes.projectAction}>
                {project.image && (
                  <Box className={classes.projectImageContent}>
                    <img src={project.image} className={classes.projectImage} />
                  </Box>
                )}
                {getContent(project)}
              </CardActionArea>
            ) : getContent(project)}
          </Card>
        );
      })}
    </div>

  );
}

export default TimelineItem;