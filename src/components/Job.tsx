import * as React from 'react';

export interface IJobProps {
    title:string;
    company:string;
    year:string;
}
export class Job extends React.Component<IJobProps, {}> {
    public render() {
        return (
            <li>
                <h4 className="sub-heading">{this.props.title} - <span>{this.props.company} ({this.props.year})</span></h4>
                <p>
                    {this.props.children}
                </p>
            </li>
        );
    }
}