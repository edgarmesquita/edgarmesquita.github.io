import * as React from 'react';

import moment from 'moment';
import { IconType } from 'react-icons';
import { BiCodeCurly } from 'react-icons/bi';
import {
    DiCss3,
    DiDotnet,
    DiHtml5,
    DiJava,
    DiJsBadge,
    DiMsqlServer,
    DiMysql,
    DiNodejsSmall,
    DiPhp,
    DiPython,
    DiReact,
    DiRedis,
    DiScrum,
} from 'react-icons/di';

import {
    Container,
    Grid,
    Typography,
} from '@material-ui/core';
import {
    createStyles,
    makeStyles,
    Theme,
} from '@material-ui/core/styles';

const boxBackgroundColor = 'rgba(0,0,0,.1)';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        devIcon: {
            fontSize: '4rem',
            marginRight: theme.spacing(2)
        },
        devSkill: {
            paddingBottom: theme.spacing(5)
        },
        devSkillTitle: {
            display: 'inline-block',
            fontWeight: 700,
            fontSize: '1.8rem',
            color: 'rgb(255, 209, 92)',
            verticalAlign: 'middle'
        },
    }),
);

interface IStack {
    iconType: IconType;
    symbol?: string;
    years?: number;
    description?: string;
    startDate?: Date;
}
export interface IStackSectionProps {
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

const stacks: IStack[] = [
    { iconType: DiDotnet, symbol: '>', years: 12, description: '.Net and C#', startDate: new Date(2010, 1, 1) },
    { iconType: DiPhp, years: 5, description: 'PHP OOP' },
    { iconType: DiJava, years: 2, description: 'Java' },
    { iconType: DiPython, symbol: '<', years: 1, description: 'Python and Django' },
    { iconType: DiMsqlServer, symbol: '>', years: 14, description: 'SQL Server', startDate: new Date(2008, 1, 1) },
    { iconType: DiMysql, symbol: '>', years: 4, description: 'MySQL' },
    { iconType: DiRedis, years: 5, description: 'Redis', startDate: new Date(2017, 1, 1) },
    { iconType: DiHtml5, symbol: '>', years: 17, description: 'HTML', startDate: new Date(2004, 10, 1) },
    { iconType: DiCss3, symbol: '>', years: 17, description: 'CSS', startDate: new Date(2004, 10, 1) },
    { iconType: DiJsBadge, symbol: '>', years: 14, description: 'JavaScript', startDate: new Date(2008, 1, 1) },
    { iconType: BiCodeCurly, symbol: '>', years: 4, description: 'TypeScript', startDate: new Date(2017, 1, 1) },
    { iconType: DiReact, symbol: '>', years: 4, description: 'React', startDate: new Date(2017, 1, 1) },
    { iconType: DiNodejsSmall, symbol: '>', years: 4, description: 'NodeJS', startDate: new Date(2017, 1, 1) },
    { iconType: DiScrum, symbol: '±', years: 9, description: 'Scrum', startDate: new Date(2012, 1, 1) },
];
const StackSection = ({ className, titleClassName, subtitleClassName }: IStackSectionProps) => {
    const classes = useStyles();

    return (

        <Container maxWidth="md" id="stacks" className={className}>
            <Typography variant="h1" component="h2" className={titleClassName}>Stacks</Typography>
            <Grid container={true}>
                {stacks.map((stack, idx) => {
                    const Icon = stack.iconType;
                    return (
                        <Grid item={true} xs={4} sm={3} md={2} className={classes.devSkill} key={idx}>
                            <Typography align="center"><Icon className={classes.devIcon} /></Typography>
                            <Typography align="center">
                                {stack.symbol && <Typography component="span" variant="caption">{stack.symbol}</Typography>}
                                <Typography component="span" className={classes.devSkillTitle}>
                                    {(stack.startDate ? moment().diff(stack.startDate, 'years') : stack.years)}
                                </Typography>
                                <Typography component="span" variant="caption">years</Typography>
                            </Typography>
                            <Typography align="center">{stack.description}</Typography>
                        </Grid>
                    );
                })}
            </Grid>
            <Typography align="center" variant="h6" component="h3" className={subtitleClassName}>Other technologies</Typography>
            <Typography align="center" variant="caption" component="div">
                jQuery &bull; Angular &bull; XHTML &bull; XML &bull; XSL &bull; YAML <br />
                Azure &bull; AWS &bull; Digital Ocean &bull; IBM Bluemix &bull; Google Cloud
            </Typography>
        </Container>
    );
}

export default StackSection;