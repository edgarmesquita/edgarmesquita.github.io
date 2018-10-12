import * as React from 'react';
import { NewWindow } from './NewWindow';

export interface IMainProjectProps {
    href:string;
    img:string;
    title:string;
}
export class MainProject extends React.Component<IMainProjectProps, {}> {
    public render() {
        return (
            <li>
                <NewWindow href={this.props.href}>
                    <img src={this.props.img} alt={this.props.title} />
                </NewWindow>
                <div>
                    <NewWindow href={this.props.href} classes="no-decoration">
                        <h4 className="sub-heading font-size-18">{this.props.title}</h4>
                    </NewWindow>
                    <p>
                        {this.props.children}
                    </p>
                    <p>
                        <NewWindow href={this.props.href}>
                            <i className="fas fa-external-link-alt margin-right-5" />
                            Find out more
                        </NewWindow>
                    </p>
                </div>
                <div className="clearfix" />
            </li>
        );
    }
}