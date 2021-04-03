import * as React from 'react';
import { Gitgraph, Orientation, templateExtend, TemplateName } from "@gitgraph/react";

interface IProject {
    name: string;
    title: string;
    date: string;
}
interface ICompany {
    name: string;
    title: string;
    startDate: string;
    endDate?: string;
    projects: IProject[];
}
interface IExperience {
    companies: ICompany[];
}
const experience: IExperience = {
    companies: [
        {
            name: "addtech", title: "🇧🇷 Add Technologies", startDate: "2004.11", endDate: "2006.06", projects: [
                { name: "culturainglesa", title: "Cultura Inglesa", date: "2004.11" },
                { name: "mongeral", title: "Mongeral", date: "2004.11" },
                { name: "goldencross", title: "Golden Cross", date: "2004.11" },
                { name: "unimed", title: "Unimed Rio", date: "2004.11" }
            ]
        },
        {
            name: "tiplan", title: "🇧🇷 Tiplan", startDate: "2006.06", endDate: "2007.06", projects: [
                { name: "invoice", title: "Eletronic Invoice", date: "2007.06" }
            ]
        },
        {
            name: "agsistemas", title: "🇧🇷 AG Sistemas", startDate: "2007.08", endDate: "2007.11", projects: []
        },
        {
            name: "running", title: "🇧🇷 Running Solutions", startDate: "2007.11", endDate: "2009.06", projects: []
        }
    ]
};
export interface ITimelineProps {
    className?: string;
}
const Timeline = ({ className, ...props }: ITimelineProps) => {

    return (
        <div className={className}>
            <Gitgraph options={{
                author: "Edgar Mesquita",
                orientation: Orientation.VerticalReverse,
                template: templateExtend(TemplateName.Metro, {
                    colors: ['#FFF', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)', '#8989FC', 'rgb(255, 209, 92)'],
                    commit: {
                        dot: {
                            size: 8
                        },
                        message: {
                            displayAuthor: false,
                            font: '1rem "Rubik"'
                        }
                    },
                    branch: {
                        lineWidth: 4,
                        spacing: 26,
                        label: {
                            bgColor: '#302f4e',
                            font: '.8rem "Rubik"'
                        }
                    },
                    tag: {
                        font: '.8rem "Rubik"',
                        color: '#353353'
                    }
                })
            }}>{(gitgraph) => {

                const master = gitgraph.branch("master");

                master.commit({
                    hash: "2004.11",
                    subject: "Init my career"
                });

                const companyBranches = [];
                const projectBranches = [];

                let i = 0;
                let version = 1;
                experience.companies.forEach((company: ICompany) => {
                    const companyBranch = master.branch(`feature/${company.name}`);

                    companyBranches.push(companyBranch);

                    i++;
                    companyBranch.commit({
                        hash: `${company.startDate}.${i}`,
                        subject: `${company.title}`,
                        style: {
                            message: {
                                font: '700 1.1rem "Rubik"',
                            }
                        }
                    });

                    if (company.projects.length > 0) {

                        const projectBranch = companyBranch.branch(`feature/${company.name}-projects`);

                        projectBranches.push(projectBranch);

                        company.projects.forEach((project: IProject) => {

                            i++;
                            projectBranch.commit({
                                hash: `${project.date}.${i}`,
                                subject: `☕ ${project.title}`,
                                style: {
                                    message: {
                                        font: '.8rem "Rubik"',
                                    }
                                }
                            });
                        });

                        i++;
                        projectBranch.commit({
                            hash: `${company.endDate || 'today'}.${i}`,
                            subject: `☕ Projects released`
                        });

                        i++;
                        companyBranch.merge({
                            branch: projectBranch,
                            commitOptions: {
                                hash: `${company.endDate || 'today'}.${i}`,
                                subject: "Ready for new challenges"
                            }
                        });
                    }
                    else {
                        i++;
                        companyBranch.commit({
                            hash: `${company.endDate}.${i}`,
                            subject: `Ready for new challenges`,
                        });
                    }
                    i++;

                    master.merge({
                        branch: companyBranch,
                        commitOptions: {
                            hash: `${company.endDate || 'today'}.${i}`,
                            subject: "Experience improved!"
                        }
                    });

                    master.tag(`v${version}.0`);


                    version++;
                });


            }}</Gitgraph>
        </div>
    );
}

export default Timeline;
