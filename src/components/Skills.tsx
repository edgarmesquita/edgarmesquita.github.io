import * as React from 'react';

export interface ISkillsProps {
    title: string;
}
export class Skills extends React.Component<ISkillsProps, {}> {
    public render() {
        return (
            <div className="block">
                <h3 className="heading">{this.props.title}</h3>
                {this.props.children}
            </div>
        );
    }
}