import * as React from 'react';
// import { FeaturedProject } from './FeaturedProject';
// import { MainProject } from './MainProject';
import '../css/content.css';
// import { NewWindow } from './NewWindow';
// import { OtherProject } from './OtherProject';
import { Work } from './Work';
import { Job } from './Job';
import { ContactInfo } from './ContactInfo';
import { Skills } from './Skills';
import { Skill } from './Skill';

export interface IContent {
    [language: string]: { jobs: IJob[] }
}
export interface IJob {
    title: string;
    text: any;
    company: string;
    year: string;
}
export class Content extends React.Component {
    public content: IContent = {
        "en": {
            jobs: [
                {
                    title: "CTO & Founder",
                    text: "Responsible for the management, architecture and development of social networking, highly scalable and integrated with Azure/Amazon services. Total participation in all stages, including UI / UX (both web, the mobile).",
                    company: "Plah Tecnologia",
                    year: "2015 - Now"
                }
            ]
        },
        "pt": {
            jobs: []
        }
    };

    public render() {
        return (
            <section className="margin-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="block">
                                <h3 className="heading">About Me</h3>

                                <p>
                                    Experience of 16 years in Information Technology, with extensive experience in architecture, development and maintenance of systems using Agile and Traditional methodologies in software engineering disciplines. (Requirements, Design, Construction, Testing, Configuration, Metrics).
                                </p>
                                <p>
                                    Experience in deploying technological innovations solutions for Insurance areas, Social Networking, Marketing, Retail and Financial Market.
                                </p>
                                <p>
                                    Specializations:
                                </p>
                                <ul>
                                    <li>
                                        Languages: PHP, ASP, VB.Net, C#.Net, JavaScript, TypeScript, CSS, HTML, XHTML, XML and XSL;
                                    </li>
                                    <li>
                                        Frameworks: .Net Framework, .Net Core, MVC Razor, Entity Framework, NHibernate, Django, Smarty, Prado, Yii;
                                    </li>
                                    <li>
                                        Data bases: SQL Server, MySQL, DB2 and Oracle;
                                    </li>
                                    <li>
                                        Other: Python, Java/J2EE.
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="block">
                                <FeaturedProject
                                    title="Some really cool project" ribbonText="New"
                                    subtitle="Give a brief description, some one-liner that really hooks the reader on your mission."
                                    img="/img/circuit.jpg">
                                    <p className="text-left margin-top-30">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                                        Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                                        lacus. Phasellus pretium eget ligula in scelerisque. Quisque ullamcorper quis arcu id gravida.
                                    </p>
                                    <p className="text-left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                                        Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                                        lacus. Phasellus pretium eget ligula in scelerisque. Quisque ullamcorper quis arcu id gravida.
                                    </p>
                                </FeaturedProject>
                                <hr className="margin-top-50 margin-bottom-50" />
                                <ul className="main-projects">
                                    <MainProject title="Main Project #1" href="https://example.com" img="https://sisyn.com/media/img/able.png">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                                        Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                                        lacus.
                                    </MainProject>
                                    <MainProject title="Main Project #2" href="https://example.com" img="https://sisyn.com/media/img/adom.jpg">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                                        Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                                        lacus.
                                    </MainProject>
                                </ul>
                            </div>

                            <div className="block">
                                <h3 className="heading">Other Projects</h3>
                                <OtherProject title="Other Project #1" href="https://example.com" openSource={true}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                                    lacus.
                                </OtherProject>
                                <OtherProject title="Other Project #2" href="https://example.com" openSource={true}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                                    lacus.
                                </OtherProject>
                                <OtherProject title="Other Project #3" href="https://example.com" openSource={true}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                                    lacus.
                                </OtherProject>
                                <OtherProject title="Other Project #4" href="https://example.com" openSource={true}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                                    lacus.
                                </OtherProject>
                                <NewWindow href="https://example.com" classes="btn btn-cta-secondary margin-top-30">
                                    More at EXAMPLE.COM <i className="fa fa-chevron-right" />
                                </NewWindow>
                            </div> */}

                            <Work>
                                <Job title="CTO &amp; Founder" company="Plah Tecnologia" year="2015 - Now">
                                    Responsible for the management, architecture and development of social networking, highly scalable and integrated with Azure/Amazon services. Total participation in all stages, including UI / UX (both web, the mobile).
                                </Job>
                                <Job title="Technical Leader &amp; Software Architect" company="Dino - Divulgador de Notícias" year="2016">
                                    Architecture and development of platform disseminating notics; <br />
                                    Integration with payment gateway Implementation of new technologies such as .Net Core Technologies employed: C # .Net 4.6 and Core 1.0, Entity Framework 6.1, SQL Server 2014, jQuery;<br />
                                    SCRUM Methodology.
                                </Job>
                                <Job title="Senior Software Analyst" company="Modulo Security Solutions" year="2013 - 2014">
                                    Architecture and development of systems focused on solutions for GRC (Governance, Risk and Compliance);<br />
                                    BI modules development integrated with Microsoft SharePoint and Analysis Service for national large-scale projects (World Cup 2014).<br />
                                    Received the international award for innovation, "2014 GRC Technology Innovation Award for GRC Intelligence," the company GRC 20/20: <a href="http://www.prweb.com/releases/2014/03/prweb11655232.htm">http://www.prweb.com/releases/2014/03/prweb11655232.htm</a>
                                </Job>
                            </Work>
                        </div>

                        <div className="col-md-4">
                            <ContactInfo location="Rio de Janeiro, Brazil" email="edgar.rj@gmail.com" website="https://edgarmesquita.com" />

                            <Skills title="Skills">
                                <p>
                                    I worked with ASP.Net &amp; SQL Server for 10+ years, but my recent concentration
                                    has been .Net Core &amp; React with a focus in scalable real-time applications.
                                </p>
                                <ul className="skills">
                                    <Skill skill="ASP.Net Core + C#" experience="Guru" ability={100} />
                                    <Skill skill="JavaScript + jQuery" experience="Guru" ability={100} />
                                    <Skill skill="NodeJS + React" experience="Expert" ability={90} />
                                    <Skill skill="PHP + MySQL" experience="Expert" ability={90} />
                                </ul>
                            </Skills>

                            <div className="block">
                                <h3 className="heading">Education</h3>
                                <div className="education">
                                    <i className="fa fa-graduation-cap" />
                                    <span>
                                        <h4 className="sub-heading">Graphic Design Technologist</h4>
                                        <p>The University of Estácio de Sá <small>(2004-2007)</small></p>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}