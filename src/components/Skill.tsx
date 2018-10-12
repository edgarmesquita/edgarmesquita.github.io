import * as React from 'react';
import { ProgressBar } from './ProgressBar';

export interface ISkillProps {
    skill: string;
    experience: string;
    ability: number;
}
export class Skill extends React.Component<ISkillProps, {}> {
    public render() {
        return (
            <li>
                <h4 className="sub-heading">{this.props.skill}</h4>
                <span>{this.props.experience}</span>
                <ProgressBar fill={this.props.ability} />
            </li>
        );
    }
}