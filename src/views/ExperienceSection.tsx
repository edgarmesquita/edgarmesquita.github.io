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


export interface IExperienceSectionProps {
  className?: string;
  titleClassName?: string;
}

const experience: ITimelineItem[] = [
  {
    title: "🇵🇹 eQuantic Tech", role: "Founder",
    description: "Consultancy focused on solving complex problems supported by highly qualified professionals.",
    startDate: "Feb 2008",
    endDate: "Present", position: 'left',
    projects: [
      {
        title: "We build powerful business services",
        description: "eQuantic Systems promotes and supports startups to develop innovation and disruptive technology. We seek to solve the needs of the market.",
        url: "https://equantic.tech",
        image: "/img/equantic-icon.png"
      }
    ]
  },
  {
    title: "🇵🇹 Anova", role: "Team Leader",
    description: "Team follow-up, technical planning, product scalability. A strong will to continuously learn, teach, improve and make others grow.",
    startDate: "Apr 2022",
    endDate: "Dec 2022", position: 'left'
  },
  {
    title: "🇵🇹 Anova", role: "Senior Backend Developer",
    description: "Development and maintenance of a cloud-native IoT platform for the global leader in remote monitoring of industrial assets: Industrial Gas, Rail, Energy, Oil and Gas, Water / Sewer and other industries.",
    startDate: "Apr 2020",
    endDate: "Dec 2022", position: 'left'
  },
  {
    title: "🇵🇹 Farfetch", role: "Senior Software Engineer",
    description: "Maintenance and creation of new financial microservices, with development of RESTful APIs and frameworks.",
    startDate: "Dec 2018",
    endDate: "Apr 2020", position: 'left'
  },
  {
    title: "🇧🇷 Plah Tecnologia", role: "Founder & CTO",
    description: "Responsible for the management, architecture and development of social networking, highly scalable and integrated with Azure/Amazon services. Total participation in all stages, including UI / UX (both web, the mobile). Web publishing, Apple and Google Play stores.",
    startDate: "Mar 2015",
    endDate: "Dec 2018", position: 'left'
  },
  {
    title: "🇧🇷 Módulo Security", role: "Senior Software Analysis",
    description: "Architecture and development of systems focused on solutions for GRC (Governance, Risk and Compliance); BI modules development integrated with Microsoft SharePoint and Analysis Service for national large-scale projects (World Cup 2014).",
    startDate: "Dec 2013",
    endDate: "Nov 2014", position: 'left'
  },
  {
    title: "🇧🇷 Qx3", role: "Specialist .Net Developer",
    description: "Monitoring and participation in project architecture processes for Banco Itaú. Development of the IPO platform of the BTG Pactual bank.",
    startDate: "Jan 2012",
    endDate: "Nov 2012", position: 'left'
  },
  {
    title: "🇧🇷 Qx3", role: "Senior .Net Developer",
    description: "Maintenance and development of financial systems in ASP.Net (C # MVC2 / 3) + SQL Server / Oracle, Python + Django + MySQL; Definition of the functional structure of the projects and communication with Stakeholders; SCRUM Methodology",
    startDate: "Jul 2011",
    endDate: "Jan 2012", position: 'left'
  },
  {
    title: "🇧🇷 BRQ", role: "Mid System Analyst and Developer",
    description: "Third-party at \"Icatu Seguros\" Company: Maintenance and development of systems in ASP.Net (VB and C #) + SQL Server integrated to Lumis Portal Suite 3; Maintenance of products such as \"Cliente Online\", \"Casa do Corretor\", \"Site de Serviços\", etc .; Functional and technical documentation, IBM Tools (Rational Clear Case and Ration Clear Quest).",
    startDate: "Nov 2010",
    endDate: "Apr 2011", position: 'right'
  },
  {
    title: "🇧🇷 TO Brasil", role: "System Analyst Developer",
    description: "Third-party at \"Lojas Americanas\" Company: Maintenance of DP / HR management systems; Development of treasury systems, reconciliation of credit card: control of daily transactions, reports, etc.",
    startDate: "Nov 2009",
    endDate: "Oct 2010", position: 'right'
  },
  {
    title: "🇧🇷 Running Solutions", role: "System Analyst Developer",
    description: "Maintenance and development of corporate portals, intranet and web systems using languages such as: ASP.Net, PHP 5, ASP and database: SQL Server, Oracle, MySQL, DB2, Access",
    startDate: "Jun 2008",
    endDate: "Jun 2009", position: 'right'
  },
  {
    title: "🇧🇷 Running Solutions", role: "Mid Web Designer",
    startDate: "Nov 2007",
    endDate: "Jun 2008", position: 'right'
  },
  {
    title: "🇧🇷 Addtech", role: "Mid Web Designer",
    description: "Creation and development of corporate portals using Lumis Portal Suite (Content Management System - CMS); Use of tools such as: Flash, Fireworks, Dreamweaver, CorelDraw, Photoshop, 3D Studio, Maya; and languages like: Action Script, Java Script, HTML, CSS, XML / XSL, PHP. I also participated in the development of multimedia material, flash systems for desktop and internal stationery (Folders, cards, labels).",
    startDate: "Oct 2004",
    endDate: "Jun 2006", position: 'right',
    projects: [
      {
        title: "Portal Cultura Inglesa",
        description: "Development of navigation structure; Implementation in the Lumis Portal Manager tool."
      },
      {
        title: "Portal Golden Cross",
        description: "Elaboration of banners for portal campaigns. Content implementation."
      },
      {
        title: "Portal Mongeral",
        description: "Implementation in the Lumis Portal Manager tool; Development of Flash presentations."
      },
      {
        title: "Intranet Unimed Rio",
        description: "Development of the interface, implementation in the Lumis Portal Manager tool."
      }
    ]
  }
];

const ExperienceSection = ({ className, titleClassName }: IExperienceSectionProps) => {
  const classes = useStyles();

  return (

    <Container maxWidth="md" id="experience" className={className}>
      <Typography variant="h1" component="h2" className={titleClassName}>
        Experience <Typography component="span" variant="caption">Most relevants</Typography>
      </Typography>

      <TimelineList items={experience} />
    </Container>

  );
}

export default ExperienceSection;