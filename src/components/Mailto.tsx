import * as React from 'react';

export interface IMailtoProps {
    email: string;
}
export class Mailto extends React.Component<IMailtoProps, {}> {
    constructor(props: IMailtoProps)
    {
        super(props);

        this.spawnMailto = this.spawnMailto.bind(this);
    }
    public spawnMailto(e: any) {
        e.preventDefault();
        window.location.href = 'mailto:' + this.props.email;
    }
    public render() {
        return (
            <a onClick={this.spawnMailto} href="#email-me">{this.props.email}</a>
        );
    }
}