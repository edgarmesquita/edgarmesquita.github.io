import * as React from 'react';

export interface INewWindowProps {
    inheritColor?: boolean;
    classes?: string;
    href:string;
    text?:string;
}
export class NewWindow extends React.Component<INewWindowProps, {}> {
    public render() {
        return (
            <a className={this.props.inheritColor ? 'inherit' : '' + this.props.classes}
                target="_blank" rel="noopener noreferrer"
                href={this.props.href}>
                {this.props.text}{this.props.children}
            </a>
        );
    }
}