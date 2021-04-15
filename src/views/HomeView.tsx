import * as React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Typist from 'react-typist';
import { Link, animateScroll as scroll } from "react-scroll";

import { Avatar, Box, Container, Drawer, Fab, Grid, List, Typography } from '@material-ui/core';
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

import { SiNuget } from "react-icons/si";

import { useInterval } from 'src/interval';
import 'react-typist/dist/Typist.css';

import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import StackSection from './StackSection';

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
            backgroundColor: theme.palette.background.default,
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            backgroundColor: theme.palette.background.default,
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(10) + 1,
            backgroundColor: theme.palette.background.default,
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
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        list: {
            marginTop: theme.spacing(2),
            "& > a": {
                color: theme.palette.text.primary
            }
        },
        listItem: {
            padding: theme.spacing(.8, 3, .8, 3.5),
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

        },
        fabIcon: {
            marginRight: theme.spacing(1),
            fontSize: '1.2rem'
        },

        menuFooter: {
            position: 'relative',
            textAlign: 'center'
        },
        menuFooterText: {
            display: 'inline-block',
            overflow: 'visible',
            color: 'rgba(255, 255, 255, .5)',
            transition: 'padding .5s ease',
        },
        menuFooterTextOpen: {
            padding: theme.spacing(4, 0, 0, 0),
        },
        menuFooterTextClose: {
            transform: 'rotate(-180deg)',
            writingMode: 'vertical-rl',
            whiteSpace: 'nowrap',
        },
        contactContainer: {
            paddingBottom: theme.spacing(5)
        },
        contactIcon: {
            fontSize: '2.2rem'
        },
        socialIcon: {
            fontSize: '2rem'
        },
        homeContainer: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'url(/img/bg.png) repeat'
        },
        homeBox: {
            margin: 'auto',
        },
        homeIcons: {
            paddingTop: theme.spacing(4)
        },
        container: {
            flexGrow: 0
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
                    <span className={clsx(classes.menuFooterText, {
                        [classes.menuFooterTextOpen]: open,
                        [classes.menuFooterTextClose]: !open
                    })}>2021 &bull; Edgar Mesquita</span>
                </div>
            </Drawer>
            <main className={classes.content}>

                <div id="home" className={clsx(classes.container, classes.homeContainer)}>
                    <Box className={classes.homeBox}>
                        <Avatar alt="Edgar Mesquita" src="/img/avatar.jpg" className={classes.avatar} />
                        <Typography align="center" variant="h1" gutterBottom={true}>
                            Edgar Mesquita
                        </Typography>
                        <Typography align="center" variant="h6" gutterBottom={true}>

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
                        <Typography align="center" className={classes.homeIcons}>
                            <IconButton aria-label="facebook" href="https://www.facebook.com/edgar.rj" target="_blank">
                                <IoLogoFacebook className={classes.socialIcon} />
                            </IconButton>
                            <IconButton aria-label="instagram" href="https://www.instagram.com/edgarmesquita/" target="_blank">
                                <IoLogoInstagram className={classes.socialIcon} />
                            </IconButton>
                            <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/edgarmesquita/" target="_blank">
                                <IoLogoLinkedin className={classes.socialIcon} />
                            </IconButton>
                            <IconButton aria-label="github" href="https://github.com/edgarmesquita" target="_blank">
                                <IoLogoGithub className={classes.socialIcon} />
                            </IconButton>
                            <IconButton aria-label="nuget" href="https://www.nuget.org/profiles/edgarmesquita" target="_blank">
                                <SiNuget className={classes.socialIcon} />
                            </IconButton>
                            <IconButton aria-label="whatsapp" href="https://api.whatsapp.com/send?phone=351918399798" target="_blank">
                                <IoLogoWhatsapp className={classes.socialIcon} />
                            </IconButton>
                            <IconButton aria-label="mail" href="mailto:edgar.rj@gmail.com" target="_blank">
                                <IoMailOpenOutline className={classes.socialIcon} />
                            </IconButton>
                        </Typography>
                    </Box>
                </div>
                <Container maxWidth="md" id="about" className={classes.container}>
                    <Typography variant="h1" component="h2" className={classes.title}>About Me</Typography>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12} sm={4} md={3} className={classes.avatarContainer}>
                            <Avatar alt="Edgar Mesquita" src="/img/edgar-working.png" className={classes.avatar2} />
                        </Grid>
                        <Grid item={true} xs={12} sm={8} md={9}>
                            <Box className={clsx(classes.baloon)} p={3}>
                                <Typography paragraph={true}>
                                    Experience of 16 years in Information Technology, with extensive experience in architecture, development and maintenance of systems using Agile and Traditional methodologies in software engineering disciplines. (Requirements, Design, Construction, Testing, Configuration, Metrics).
                                </Typography>
                                <Typography paragraph={true}>
                                    Experience in deploying technological innovations solutions for Insurance areas, Social Networking, Marketing, Retail and Financial Market.
                                </Typography>

                                <Typography align="center" component="div">
                                    <Fab variant="extended" color="secondary" aria-label="add" className={classes.fab} href="/docs/EdgarMesquita_Resume.pdf" target="_blank">
                                        <IoDownloadOutline className={classes.fabIcon} />
                                        Download CV
                                    </Fab>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <StackSection className={classes.container} titleClassName={classes.title} subtitleClassName={classes.subtitle} />

                <ExperienceSection className={classes.container} titleClassName={classes.title} />

                <EducationSection className={classes.container} titleClassName={classes.title} />

                <Container maxWidth="md" id="contact" className={clsx(classes.container, classes.contactContainer)}>
                    <Typography variant="h1" component="h2" className={classes.title}>Get in Touch</Typography>
                    <Typography variant="body1" gutterBottom={true}>You can contact me through:</Typography>


                    <Typography align="center">
                        <IconButton aria-label="whatsapp" href="https://api.whatsapp.com/send?phone=351918399798" target="_blank">
                            <IoLogoWhatsapp className={classes.contactIcon} />
                        </IconButton>
                        <IconButton aria-label="skype" href="skype:edgar-rj?chat" target="_blank">
                            <IoLogoSkype className={classes.contactIcon} />
                        </IconButton>
                        <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/edgarmesquita/" target="_blank">
                            <IoLogoLinkedin className={classes.contactIcon} />
                        </IconButton>
                        <IconButton aria-label="mail" href="mailto:edgar.rj@gmail.com" target="_blank">
                            <IoMailOpenOutline className={classes.contactIcon} />
                        </IconButton>
                    </Typography>

                    <Typography align="center" variant="caption" component="div">
                        +351 918 399 798 &bull; edgar.rj@gmail.com
                    </Typography>
                </Container>
            </main>
        </div>
    );
}