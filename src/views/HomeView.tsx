import * as React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Typist from 'react-typist';
import { Link, animateScroll as scroll } from "react-scroll";

import { Avatar, Box, Container, CssBaseline, Drawer, Fab, Grid, List, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {
    IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoLogoLinkedin,
    IoLogoGithub, IoMailOpenOutline, IoHomeOutline, IoGitBranchOutline,
    IoBriefcaseOutline, IoChatbubblesOutline, IoSchoolOutline, IoDownloadOutline, IoPersonCircleOutline, IoLogoSkype,
} from "react-icons/io5";

import { DiVisualstudio, DiNodejsSmall, DiReact, DiJava, DiMsqlServer, DiPhp, DiRedis, DiScrum, DiDotnet, DiPython, DiMysql } from "react-icons/di";

import { useInterval } from 'src/interval';
import 'react-typist/dist/Typist.css';
import TimelineItem, { ITimelineItem } from './TimelineItem';
import TimelineList from './TimelineList';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
const drawerWidth = 240;
const boxBackgroundColor = 'rgba(0,0,0,.1)';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            backgroundColor: 'transparent',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            backgroundColor: 'transparent',
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(11) + 1,
            backgroundColor: 'transparent',
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',

            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        title: {
            position: 'relative',
            fontWeight: 700,
            margin: theme.spacing(5, 0, 5, 2),
            '&:before': {
                content: '""',
                backgroundImage: 'url(/img/dots-bg-light.svg)',
                display: 'block',
                height: '37px',
                left: '-14px',
                top: '-14px',
                position: 'absolute',
                width: '37px'
            }
        },
        subtitle: {
            margin: theme.spacing(4, 0, 3, 0),
        },
        toolbarOpen: {
            padding: theme.spacing(0, 1),
        },
        toolbarClose: {
            padding: theme.spacing(0, 2),
        },
        content: {
            flexGrow: 1,
            "& #tsparticles": {
                opacity: .1
            }
        },
        list: {
            marginTop: theme.spacing(2),
            "& > a": {
                color: theme.palette.text.primary
            }
        },
        listItem: {
            padding: theme.spacing(1, 3, 1, 4),
            marginBottom: theme.spacing(3)
        },
        listItemIcon: {
            fontSize: theme.spacing(3)
        },
        avatar: {
            width: '108px',
            height: '108px',
            margin: '0 auto',
            marginBottom: theme.spacing(3)
        },
        avatarContainer: {

            minWidth: '160px',
            paddingRight: theme.spacing(6)
        },
        avatar2: {
            width: '150px',
            height: '150px',
            margin: `0 auto ${theme.spacing(4)}px auto`,

        },
        baloon: {
            backgroundColor: boxBackgroundColor,
            borderRadius: '10px',
            position: 'relative',
            "&::after": {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '80px',
                width: 0,
                height: 0,
                border: '20px solid transparent',
                borderRightColor: boxBackgroundColor,
                borderLeft: 0,
                marginTop: '-20px',
                marginLeft: '-20px'
            },

            [theme.breakpoints.down('xs')]: {
                "&::after": {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: 0,
                    height: 0,
                    border: '20px solid transparent',
                    borderBottomColor: boxBackgroundColor,
                    borderTop: 0,
                    marginLeft: '-20px',
                    marginTop: '-20px',
                }
            },
        },
        fab: {
            display: 'block',
            margin: '0 auto'
        },
        fabIcon: {
            marginRight: theme.spacing(1),
            fontSize: '1.2rem'
        },
        devIcon: {
            fontSize: '4rem',
            marginRight: theme.spacing(2)
        },
        devSkill: {
            paddingBottom: theme.spacing(3)
        },
        devSkillTitle: {
            display: 'inline-block',
            fontWeight: 700,
            fontSize: '1.8rem',
            color: 'rgb(255, 209, 92)',
            verticalAlign: 'middle'
        },
        menuFooter: {
            position: 'relative',
            textAlign: 'center'
        },
        menuFooterText: {
            transform: 'rotate(-180deg)',
            writingMode: 'vertical-rl',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            overflow: 'visible',
            color: 'rgba(255, 255, 255, .5)'
        },
        contactContainer: {
            paddingBottom: theme.spacing(5)
        },
        contactIcon: {
            fontSize: '3rem'
        }
    }),
);

export default function HomeView() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [countInterval, setCount] = React.useState(0);

    const handleDrawerToggle = () => {
        setOpen(!open);
    }

    useInterval(() => {
        setCount(countInterval + 1);
    }, 20000);

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={clsx(classes.toolbar, {
                    [classes.toolbarOpen]: open,
                    [classes.toolbarClose]: !open,
                })}>
                    <IconButton onClick={handleDrawerToggle}>
                        {open ? (theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />) : <MenuIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.list}>
                    <Link to={'home'} spy={true} smooth={true} duration={500} href="#home">
                        <ListItem button={true} className={classes.listItem}>
                            <ListItemIcon><IoHomeOutline className={classes.listItemIcon} /></ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                    </Link>
                    <Link to={'about'} spy={true} smooth={true} duration={500} href="#about">
                        <ListItem button={true} className={classes.listItem}>
                            <ListItemIcon><IoPersonCircleOutline className={classes.listItemIcon} /></ListItemIcon>
                            <ListItemText primary={"About Me"} />
                        </ListItem>
                    </Link>
                    <Link to={'stacks'} spy={true} smooth={true} duration={500} href="#stacks">
                        <ListItem button={true} className={classes.listItem}>
                            <ListItemIcon><IoGitBranchOutline className={classes.listItemIcon} /></ListItemIcon>
                            <ListItemText primary={"Stacks"} />
                        </ListItem>
                    </Link>
                    <Link to={'experience'} spy={true} smooth={true} duration={500} href="#experience">
                        <ListItem button={true} className={classes.listItem}>
                            <ListItemIcon><IoBriefcaseOutline className={classes.listItemIcon} /></ListItemIcon>
                            <ListItemText primary={"Experience"} />
                        </ListItem>
                    </Link>
                    <Link to={'education'} spy={true} smooth={true} duration={500} href="#education">
                        <ListItem button={true} className={classes.listItem}>
                            <ListItemIcon><IoSchoolOutline className={classes.listItemIcon} /></ListItemIcon>
                            <ListItemText primary={"Education"} />
                        </ListItem>
                    </Link>
                    <Link to={'contact'} spy={true} smooth={true} duration={500} href="#contact">
                        <ListItem button={true} className={classes.listItem}>
                            <ListItemIcon><IoChatbubblesOutline className={classes.listItemIcon} /></ListItemIcon>
                            <ListItemText primary={"Get in Touch"} />
                        </ListItem>
                    </Link>
                </List>

                <div className={classes.menuFooter}>
                    <span className={classes.menuFooterText}>2021 &bull; Edgar Mesquita</span>
                </div>
            </Drawer>
            <main className={classes.content}>

                <Container maxWidth="md" id="home">
                    <Box py={8}>
                        <Avatar alt="Edgar Mesquita" src="/img/avatar.jpg" className={classes.avatar} />
                        <Typography align="center" variant="h1" gutterBottom={true}>
                            Edgar Mesquita
                        </Typography>
                        <Typography align="center" variant="h4" gutterBottom={true}>

                            <Typist cursor={{ hideWhenDone: false }} key={countInterval}>
                                <span>I'm a </span>
                                <Typist.Delay ms={500} />
                                <span>Frontend Developer</span>
                                <Typist.Backspace count={18} delay={1000} />
                                <span>Backend Developer</span>
                                <Typist.Backspace count={17} delay={1000} />
                                <span>Fullstack Developer</span>
                                <Typist.Backspace count={19} delay={1000} />
                                <span>Entrepreneur!</span>
                                <Typist.Backspace count={19} delay={4000} />
                            </Typist>

                        </Typography>
                        <Typography align="center">
                            <IconButton aria-label="facebook" href="https://www.facebook.com/edgar.rj" target="_blank">
                                <IoLogoFacebook />
                            </IconButton>
                            <IconButton aria-label="instagram" href="https://www.instagram.com/edgarmesquita/" target="_blank">
                                <IoLogoInstagram />
                            </IconButton>
                            <IconButton aria-label="whatsapp" href="https://api.whatsapp.com/send?phone=351918399798" target="_blank">
                                <IoLogoWhatsapp />
                            </IconButton>
                            <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/edgarmesquita/" target="_blank">
                                <IoLogoLinkedin />
                            </IconButton>
                            <IconButton aria-label="github" href="https://github.com/edgarmesquita" target="_blank">
                                <IoLogoGithub />
                            </IconButton>
                            <IconButton aria-label="mail" href="mailto:edgar.rj@gmail.com" target="_blank">
                                <IoMailOpenOutline />
                            </IconButton>
                        </Typography>
                    </Box>
                </Container>
                <Container maxWidth="md" id="about">


                    <Typography variant="h1" component="h2" className={classes.title}>About Me</Typography>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12} sm={4} md={3} className={classes.avatarContainer}>
                            <Avatar alt="Edgar Mesquita" src="/img/avatar.jpg" className={classes.avatar2} />
                        </Grid>
                        <Grid item={true} xs={12} sm={8} md={9}>
                            <Box className={clsx(classes.baloon)} p={3}>
                                <Typography paragraph={true}>
                                    Experience of 16 years in Information Technology, with extensive experience in architecture, development and maintenance of systems using Agile and Traditional methodologies in software engineering disciplines. (Requirements, Design, Construction, Testing, Configuration, Metrics).
                                </Typography>
                                <Typography paragraph={true}>
                                    Experience in deploying technological innovations solutions for Insurance areas, Social Networking, Marketing, Retail and Financial Market.
                                </Typography>
                                <Fab variant="extended" color="secondary" aria-label="add" className={classes.fab}>
                                    <IoDownloadOutline className={classes.fabIcon} />
                                    Download CV
                                </Fab>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="md" id="stacks">
                    <Typography variant="h1" component="h2" className={classes.title}>Stacks</Typography>
                    <Grid container={true}>
                        <Grid item={true} xs={4} sm={3} md={2} className={classes.devSkill}>
                            <Typography align="center"><DiDotnet className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" variant="caption">&gt;</Typography>
                                <Typography component="span" className={classes.devSkillTitle}>11</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center">.Net and C#</Typography>
                        </Grid>
                        <Grid item={true} xs={4} sm={3} md={2} className={classes.devSkill}>
                            <Typography align="center"><DiMsqlServer className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" variant="caption">&gt;</Typography>
                                <Typography component="span" className={classes.devSkillTitle}>12</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center">SQL Server</Typography>
                        </Grid>
                        <Grid item={true} xs={4} sm={3} md={2} className={classes.devSkill}>
                            <Typography align="center"><DiMysql className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" variant="caption">&gt;</Typography>
                                <Typography component="span" className={classes.devSkillTitle}>4</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center">MySQL</Typography>
                        </Grid>
                        <Grid item={true} xs={4} sm={3} md={2} className={classes.devSkill}>
                            <Typography align="center"><DiRedis className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" className={classes.devSkillTitle}>5</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center">Redis</Typography>
                        </Grid>
                        <Grid item={true} xs={4} sm={3} md={2} className={classes.devSkill}>
                            <Typography align="center"><DiReact className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" className={classes.devSkillTitle}>3</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center">React</Typography>
                        </Grid>
                        <Grid item={true} xs={4} sm={3} md={2} className={classes.devSkill}>
                            <Typography align="center"><DiNodejsSmall className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" className={classes.devSkillTitle}>2</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center">NodeJS</Typography>
                        </Grid>
                        <Grid item={true} xs={4} sm={3} md={2}>
                            <Typography align="center"><DiPhp className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" className={classes.devSkillTitle}>5</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center" gutterBottom={true}>PHP OOP</Typography>
                        </Grid>

                        <Grid item={true} xs={4} sm={3} md={2}>
                            <Typography align="center"><DiJava className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" variant="caption">&lt;</Typography>
                                <Typography component="span" className={classes.devSkillTitle}>2</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center" gutterBottom={true}>Java</Typography>
                        </Grid>

                        <Grid item={true} xs={4} sm={3} md={2}>
                            <Typography align="center"><DiPython className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" variant="caption">&lt;</Typography>
                                <Typography component="span" className={classes.devSkillTitle}>1</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center" gutterBottom={true}>Python and Django</Typography>
                        </Grid>

                        <Grid item={true} xs={4} sm={3} md={2}>
                            <Typography align="center"><DiScrum className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                <Typography component="span" variant="caption">±</Typography>
                                <Typography component="span" className={classes.devSkillTitle}>9</Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center" gutterBottom={true}>Scrum</Typography>
                        </Grid>
                    </Grid>
                    <Typography align="center" variant="h6" component="h3" className={classes.subtitle}>Other technologies</Typography>
                    <Typography align="center" variant="caption" component="div">
                        TypeScript &bull; CSS &bull; HTML &bull; XHTML &bull; XML &bull; XSL &bull; YAML <br />
                        Azure &bull; AWS &bull; Digital Ocean &bull; IBM Bluemix &bull; Google Cloud</Typography>
                </Container>

                <ExperienceSection titleClassName={classes.title} />

                <EducationSection titleClassName={classes.title} />

                <Container maxWidth="md" id="contact" className={classes.contactContainer}>
                    <Typography variant="h1" component="h2" className={classes.title}>Get in Touch</Typography>
                    <Typography variant="body1">You can contact me through:</Typography>


                    <Typography align="center">
                        <IconButton aria-label="whatsapp" href="https://api.whatsapp.com/send?phone=351918399798" target="_blank">
                            <IoLogoWhatsapp className={classes.contactIcon} />
                        </IconButton>
                        <IconButton aria-label="skype" href="skype:edgar.rj@live.com?chat" target="_blank">
                            <IoLogoSkype className={classes.contactIcon} />
                        </IconButton>
                        <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/edgarmesquita/" target="_blank">
                            <IoLogoLinkedin className={classes.contactIcon} />
                        </IconButton>
                        <IconButton aria-label="mail" href="mailto:edgar.rj@gmail.com" target="_blank">
                            <IoMailOpenOutline className={classes.contactIcon} />
                        </IconButton>
                    </Typography>

                </Container>
            </main>
        </div>
    );
}