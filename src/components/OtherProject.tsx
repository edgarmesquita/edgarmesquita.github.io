import * as React from 'react';
import { NewWindow } from './NewWindow';

export interface IOtherProjectProps {
    openSource: boolean | null | undefined;
    title: string;
    href: string;
}
export class OtherProject extends React.Component<IOtherProjectProps, {}> {
    public openSourceTag() : JSX.Element | string {
        if (this.props.openSource !== undefined)
        {
            return <span className="sub-heading-label">Open Source</span>;
        }
        return '';
    }
    public render() {
        return (
            <div>
                <h4 className="sub-heading">{this.props.title} {this.openSourceTag()}</h4>
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
        );
    }
}