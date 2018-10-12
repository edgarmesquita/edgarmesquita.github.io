import * as React from 'react';
import { Mailto } from './Mailto';
import { NewWindow } from './NewWindow';

export interface IContactInfoProps {
    location: string;
    email: string;
    website: string;
}
export class ContactInfo extends React.Component<IContactInfoProps, {}> {
    public render() {
        return (
            <div className="block contact-details">
                <ul>
                    <li>
                        <i className="text-light fa fa-map-marker-alt" />
                        {this.props.location}
                    </li>
                    <li>
                        <i className="text-light fa fa-envelope" />
                        <Mailto email={this.props.email} />
                    </li>
                    <li>
                        <i className="text-light fa fa-link fa-flip-horizontal" />
                        <NewWindow href={this.props.website} text={this.props.website} />
                    </li>
                </ul>
            </div>
        );
    }
}