import * as React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { Container, Grid, IconButton, Paper, Typography } from '@material-ui/core';

import {
    IoSearch
} from "react-icons/io5";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        project: {
            borderRadius: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: theme.palette.common.white,
        },
        projectContent: {
            position: 'absolute',
            width: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(108, 108, 229, .9)',
            opacity: 0,
            transition: theme.transitions.create('opacity'),
            cursor: 'pointer',

            "& .project-label": {
                position: 'absolute',
                top: 0,
                left: theme.spacing(2),
                backgroundColor: theme.palette.secondary.dark,
                padding: theme.spacing(1),
                marginTop: '-100%',
                display: 'inline-block',
                transition: theme.transitions.create('margin-top'),
                borderRadius: theme.spacing(0, 0, 2, 2),
            },
            "& .project-description": {
                padding: theme.spacing(2),
                marginTop: theme.spacing(8),
                transition: theme.transitions.create('margin-top'),
            },
            "&:hover": {
                opacity: 1,

                "& .project-label": {
                    marginTop: 0
                },

                "& .project-description": {
                    marginTop: theme.spacing(4),
                }
            }
        },
        projectDetailsButton: {
            position: 'absolute',
            right: theme.spacing(2),
            bottom: theme.spacing(2)
        },
        imageContent: {
            padding: theme.spacing(1)
        },
        image: {
            width: '100%',
        },
    }),
);

export interface IProjectSectionProps {
    className?: string;
    titleClassName?: string;
}

const ProjectSection = ({ className, titleClassName }: IProjectSectionProps) => {
    const classes = useStyles();

    const projects = [
        { title: "Fifa World Cup 2014", img: "img/project1.png", category: "Backend", description: "test" },
        { title: "Ceu Social", img: "img/project2.png", category: "Fullstack", description: "test" },
        { title: "Teachers 4 COVID", img: "img/project3.png", category: "Fullstack", description: "test" }
    ]
    return (

        <Container maxWidth="md" id="education" className={className}>
            <Typography variant="h1" component="h2" className={titleClassName}>
                Projects
            </Typography>

            <Grid container={true} spacing={3}>
                {projects.map(project => (
                    <Grid item={true} xs={6} sm={4} md={3} key={project.title}>
                        <Paper className={classes.project}>
                            <div className={classes.imageContent}>
                                <img src={project.img} alt={project.title} className={classes.image} />
                            </div>
                            <div className={classes.projectContent}>
                                <Typography variant="body1" className="project-label">{project.category}</Typography>
                                <Typography variant="h5" component="h4" className="project-description">{project.title}</Typography>
                                <IconButton className={classes.projectDetailsButton}><IoSearch /></IconButton>
                            </div>
                        </Paper>
                    </Grid>
                ))}

            </Grid>
        </Container>

    );
}

export default ProjectSection;